import { useEffect, useRef } from 'react'

export default function VideoModal({ open, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="video-modal-title">The Pergola Experience</div>
        <div className="video-modal">
          <video
            ref={videoRef}
            className="video-modal-player"
            controls
            autoPlay
            playsInline
          >
            <source src="/assets/concept-video.mov" type="video/quicktime" />
            <source src="/assets/concept-video.mov" type="video/mp4" />
            Your browser does not support this video format.
          </video>
        </div>
        <div className="video-modal-subtitle">Crescendo × Marriott · World Cup 2026</div>
      </div>
    </div>
  )
}
