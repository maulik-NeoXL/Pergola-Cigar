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
            src="https://res.cloudinary.com/dvnlyohtl/video/upload/v1773949088/concept-video_hsdvlb.mp4"
          />
        </div>
        <div className="video-modal-subtitle">Crescendo × Marriott · World Cup 2026</div>
      </div>
    </div>
  )
}
