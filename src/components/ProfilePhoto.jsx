import React, { useState } from 'react'

export default function ProfilePhoto({ src, alt, initials = 'A' }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="profile-photo">
      {!failed ? (
        <img src={src} alt={alt} className="profile-photo__img" onError={() => setFailed(true)} />
      ) : (
        <div className="profile-photo__placeholder" role="img" aria-label={alt}>
          <span aria-hidden="true">{initials}</span>
        </div>
      )}
    </div>
  )
}