import { useState } from 'react'

function SkeletonImage({ src, alt, className, style }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="skeleton-img-container" style={style}>
      {!loaded && <div className="skeleton-shimmer" />}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
      />
    </div>
  )
}

export default SkeletonImage
