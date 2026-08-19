import { useEffect, useState } from 'react'
import { Sparkmark, MenuIcon } from './icons.jsx'
import './Navbar.css'

const LINKS = ['Company', 'Benefits', 'How it works', 'Testimonials', 'Blog']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label="Monoio — home">
          <Sparkmark />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((label) => (
            <a key={label} href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="btn btn--line" href="#login">
            Login
          </a>
          <a className="btn btn--blush" href="#start">
            Get started
          </a>
        </div>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div className="nav__sheet">
          {LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={close}
            >
              {label}
            </a>
          ))}
          <div className="nav__sheet-cta">
            <a className="btn btn--line" href="#login" onClick={close}>
              Login
            </a>
            <a className="btn btn--blush" href="#start" onClick={close}>
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
