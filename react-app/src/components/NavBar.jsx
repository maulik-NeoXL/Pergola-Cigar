import { useState, useEffect } from 'react'

const navItems = [
  { href: '#concept', label: 'Concept' },
  { href: '#collection', label: 'Collection' },
  { href: '#experience', label: 'Experience' },
  { href: '#packages', label: 'Packages' },
  { href: '#schedule', label: 'Schedule' },
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

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-brand">
        <div className="nav-brand-top">Crescendo <span>×</span> Marriott</div>
        <div className="nav-brand-sub">World Cup 2026 Pergola Experience</div>
      </div>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={handleNavClick}>{item.label}</a>
          </li>
        ))}
        <li>
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
