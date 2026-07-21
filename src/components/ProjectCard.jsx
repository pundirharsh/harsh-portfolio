import React, { useState } from 'react'

export default function ProjectCard({ image, title, description, href }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <a className="card" href={href} target="_blank" rel="noopener noreferrer">
      <div className="card__media">
        {!imgFailed ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="card__media-fallback" aria-hidden="true">{title.slice(0, 1)}</div>
        )}
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <span className="card__cta">
          View project <span aria-hidden="true">↗</span>
          <span className="visually-hidden"> (opens in new tab): {title}</span>
        </span>
      </div>
    </a>
  )
}
