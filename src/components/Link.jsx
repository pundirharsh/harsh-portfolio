import React from 'react'

/**
 * Semantic link component. Implements guidelines §3.1:
 * - underline required for inline links
 * - external links get a visible icon + accessible "opens in new tab" suffix
 * - focus-visible handled globally in index.css
 */
export default function Link({ href, children, external = false, variant = 'inline', className = '' }) {
  const isExternal = external || /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      className={`link link--${variant} ${className}`}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
      {isExternal && (
        <>
          <span aria-hidden="true" className="link__icon">↗</span>
          <span className="visually-hidden"> (opens in new tab)</span>
        </>
      )}
    </a>
  )
}
