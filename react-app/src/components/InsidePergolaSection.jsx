import { useState, useRef, useCallback, useEffect } from 'react'
import PergolaDetailModal from './PergolaDetailModal'
import { pergolaEntries } from '../data/venues'

const pergolaImages = [
  '/assets/pergola-1.png',
  '/assets/pergola-2.png',
  '/assets/pergola-3.png',
  '/assets/pergola-4.png',
  '/assets/pergola-5.png',
]

function InsidePergolaSection() {
  const [selected, setSelected] = useState(null)
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const getPerView = useCallback(() => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth <= 700) return 1
    if (window.innerWidth <= 1024) return 2
    return 3
  }, [])

  const scrollToIndex = useCallback((idx) => {
    const el = carouselRef.current
    if (!el) return
    const cards = el.querySelectorAll('.venue-card')
    if (!cards.length) return
    const perView = getPerView()
    const maxIdx = Math.max(0, cards.length - perView)
    let next = idx
    if (next < 0) next = maxIdx
    else if (next > maxIdx) next = 0
    setCurrentIndex(next)
    const gap = parseFloat(getComputedStyle(el).columnGap || '0') || 0
    const step = cards[0].getBoundingClientRect().width + gap
    el.scrollTo({ left: next * step, behavior: 'smooth' })
  }, [getPerView])

  useEffect(() => {
    const handleResize = () => scrollToIndex(currentIndex)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentIndex, scrollToIndex])

  return (
    <div id="venues">
      <div className="section">
        <span className="section-tag">Venues</span>
        <h2 className="section-title">Inside the<br /><em>Pergola</em></h2>
        <div className="section-rule"></div>
        <p className="section-intro">
          Exclusive pergola settings across all 10 FIFA World Cup 2026 host cities, within
          Marriott&apos;s finest properties.
        </p>

        <div className="pergola-carousel" ref={carouselRef}>
          {pergolaEntries.map((entry, idx) => (
            <div
              key={`${entry.cityClass}-${idx}`}
              className={`venue-card ${entry.cityClass}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelected({ entry, imgIdx: idx })}
            >
              <div className="venue-visual" style={{ height: '160px' }}>
                <img
                  src={pergolaImages[idx % pergolaImages.length]}
                  alt={entry.venue}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                  className={`venue-img-${entry.cityClass}`}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,9,11,0.2)' }} />
                <div className="venue-lounge-tag">Pergola Lounge</div>
              </div>
              <div className="venue-body">
                <div className="venue-city">{entry.venue}</div>
                <div className="venue-hotel">{entry.city}</div>
                <div className="venue-pills">
                  <span className="venue-pill">{entry.placeTag}</span>
                  <span className="venue-pill">{entry.venueTag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pergola-carousel-controls">
          <button
            className="pergola-carousel-btn"
            type="button"
            aria-label="Previous"
            onClick={() => scrollToIndex(currentIndex - 1)}
          >‹</button>
          <button
            className="pergola-carousel-btn"
            type="button"
            aria-label="Next"
            onClick={() => scrollToIndex(currentIndex + 1)}
          >›</button>
        </div>
      </div>

      {selected && (
        <PergolaDetailModal
          entry={selected.entry}
          imageSrc={pergolaImages[selected.imgIdx % pergolaImages.length]}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}

export default InsidePergolaSection
