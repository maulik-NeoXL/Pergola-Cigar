import { useEffect, useRef } from 'react'

export default function useScrollReveal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const targets = el.querySelectorAll(
      '.section-tag, .section-title, .section-rule, .section-intro, .venue-card'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((t) => {
      t.classList.add('reveal')
      observer.observe(t)
    })

    el.querySelectorAll('.venues-grid, .pergola-carousel').forEach((grid) => {
      grid.classList.add('reveal-stagger')
    })

    return () => observer.disconnect()
  }, [])

  return containerRef
}
