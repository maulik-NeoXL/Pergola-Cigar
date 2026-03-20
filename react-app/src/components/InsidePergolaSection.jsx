import { useRef, useCallback, useState, useEffect } from 'react'

const galleryItems = [
  { image: '/assets/pergola-1.png', label: 'Pergola Lounge' },
  { image: '/assets/pergola-2.png', label: 'Evening Ambiance' },
  { image: '/assets/pergola-3.png', label: 'Canopy Detail' },
  { image: '/assets/pergola-4.png', label: 'Lounge Setting' },
  { image: '/assets/pergola-5.png', label: 'Guest Experience' },
  { image: '/assets/pergola-6.png', label: 'Exterior View' },
  { image: '/assets/pergola-7.png', label: 'Property Integration' },
  { image: '/assets/pergola-8.png', label: 'Interior Canopy' },
  { image: '/assets/pergola-9.png', label: 'Aerial Perspective' },
]

function InsidePergolaSection() {
  const trackRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)

  const getPerPage = useCallback(() => {
    if (typeof window === 'undefined') return 2
    return window.innerWidth <= 700 ? 1 : 2
  }, [])

  const maxPage = useCallback(() => {
    const perPage = getPerPage()
    return Math.max(0, Math.ceil(galleryItems.length / perPage) - 1)
  }, [getPerPage])

  const goToPage = useCallback((page) => {
    let next = page
    const max = maxPage()
    if (next < 0) next = max
    else if (next > max) next = 0
    setCurrentPage(next)
  }, [maxPage])

  const translateValue = `calc(-${currentPage} * (100% + 1rem))`

  return (
    <div id="venues" className="media-gallery section">
      <span className="section-tag">Gallery</span>
      <h2 className="section-title">Media<br /><em>Gallery</em></h2>
      <div className="section-rule"></div>

      <div className="media-gallery-viewport">
        <div className="media-gallery-track" ref={trackRef} style={{ transform: `translateX(${translateValue})` }}>
          {galleryItems.map((item, idx) => (
            <div key={idx} className="media-gallery-item">
              <div className="media-gallery-img-wrap">
                <img src={item.image} alt={item.label} className="media-gallery-img" />
                <div className="media-gallery-overlay" />
                <span className="media-gallery-label">{item.label}</span>
                <span className="media-gallery-count">
                  {String(idx + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="media-gallery-controls">
        <button className="media-gallery-btn" onClick={() => goToPage(currentPage - 1)} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="media-gallery-btn" onClick={() => goToPage(currentPage + 1)} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  )
}

export default InsidePergolaSection
