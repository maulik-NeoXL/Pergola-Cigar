import { useEffect } from 'react'

function PergolaDetailModal({ entry, imageSrc, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!entry) return null

  return (
    <div className="pd-overlay" onClick={onClose}>
      <div className="pd-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pd-close" onClick={onClose}>✕</button>

        <div className="pd-hero">
          <img
            src={imageSrc}
            alt={entry.venue}
            className="pd-hero-img"
          />
          <div className="pd-hero-overlay" />
          <div className="pd-hero-content">
            <span className="pd-hero-tag">{entry.venueTag}</span>
            <h3 className="pd-hero-title">{entry.venue}</h3>
            <p className="pd-hero-hotel">{entry.city}</p>
          </div>
        </div>

        <div className="pd-body">
          <p className="pd-description">{entry.description}</p>

          <div className="pd-info-grid">
            <div className="pd-info-card">
              <span className="pd-info-label">Hours</span>
              <span className="pd-info-value">{entry.hours}</span>
            </div>
            <div className="pd-info-card">
              <span className="pd-info-label">Capacity</span>
              <span className="pd-info-value">{entry.capacity}</span>
            </div>
            <div className="pd-info-card">
              <span className="pd-info-label">Location</span>
              <span className="pd-info-value">{entry.placeTag}</span>
            </div>
            <div className="pd-info-card">
              <span className="pd-info-label">Type</span>
              <span className="pd-info-value">{entry.venueTag}</span>
            </div>
          </div>

          <div className="pd-section">
            <h4 className="pd-section-title">Amenities</h4>
            <div className="pd-amenities">
              {entry.amenities.map((item) => (
                <span className="pd-amenity" key={item}>
                  <span className="pd-amenity-dot">◆</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <a href="#reserve" className="pd-cta" onClick={onClose}>Reserve Your Spot</a>
        </div>
      </div>
    </div>
  )
}

export default PergolaDetailModal
