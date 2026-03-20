import { useState, useEffect } from 'react'

const navItems = [
  { href: '#concept', label: 'Concept' },
  { href: '#collection', label: 'Collection' },
  { href: '#experience', label: 'Experience' },
  { href: '#packages', label: 'Packages' },
  { href: '#venues', label: 'Venues' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleNavClick(e) {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const target = document.querySelector(href)
    setMenuOpen(false)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-brand">
        <div className="nav-brand-top">Crescendo <span>×</span> Marriott</div>
        <div className="nav-brand-sub">World Cup 2026 Pergola Experience</div>
      </div>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        <li className="mobile-menu-brand">
          <div className="nav-brand-top">Crescendo <span>×</span> Marriott</div>
          <div className="nav-brand-sub">World Cup 2026 Pergola Experience</div>
        </li>
        {navItems.map((item, i) => (
          <li key={item.href} style={{ '--item-index': i + 1 }}>
            <a href={item.href} onClick={handleNavClick}>{item.label}</a>
          </li>
        ))}
        <li style={{ '--item-index': navItems.length + 1 }}>
          <a href="#reserve" className="nav-cta" onClick={handleNavClick}>Reserve</a>
        </li>
      </ul>

      <button
        className={`nav-hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}
