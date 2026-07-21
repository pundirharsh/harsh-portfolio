import React, { useState, useRef, useEffect } from 'react'

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#proficiency', label: 'Proficiency' },
  { href: '#projects', label: 'Project Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState('#about')
  const toggleRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className="nav" aria-label="Primary">
      <button
        ref={toggleRef}
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="primary-nav-list"
        onClick={() => setOpen(o => !o)}
      >
        <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        <span aria-hidden="true">{open ? '✕' : '☰'}</span>
      </button>
      <ul id="primary-nav-list" className={`nav__list ${open ? 'nav__list--open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <li key={item.href}>
            <a
              href={item.href}
              className="nav__link"
              aria-current={current === item.href ? 'page' : undefined}
              onClick={() => { setCurrent(item.href); setOpen(false) }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
