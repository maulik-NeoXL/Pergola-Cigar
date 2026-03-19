import { useEffect } from 'react'

function CityPergolaModal({ city, onClose }) {
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

  if (!city) return null

  return (
    <div className="city-modal-overlay" onClick={onClose}>
      <div className="city-modal" onClick={(e) => e.stopPropagation()}>
        <button className="city-modal-close" onClick={onClose}>✕</button>

        <div className="city-modal-header">
          <span className="city-modal-tag">Pergola Lounges</span>
          <h3 className="city-modal-title">{city.city}</h3>
          <p className="city-modal-subtitle">{city.hotel}</p>
          <div className="city-modal-pills">
            {city.tags.map((tag) => (
              <span className="venue-pill" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="city-modal-rule" />

        <div className="city-modal-list">
          {city.pergolas.map((pergola, idx) => (
            <div className="city-modal-item" key={idx}>
              <div className="city-modal-item-num">{String(idx + 1).padStart(2, '0')}</div>
              <div className="city-modal-item-body">
                <div className="city-modal-item-name">{pergola.name}</div>
                <div className="city-modal-item-address">{pergola.address}</div>
                <div className="city-modal-item-meta">
                  <span className="city-modal-meta-pill">{pergola.type}</span>
                  <span className="city-modal-meta-pill">{pergola.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default CityPergolaModal
