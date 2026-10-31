import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="relative z-50 border-b border-[#252a25]/10 bg-[#f7f7f3]">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 lg:px-12">

        <Link to="/" className="text-3xl font-extrabold tracking-[-0.09em]">
          HOME<span className="text-[#65765e]">.</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-xs font-semibold transition ${
                  isActive
                    ? 'text-[#65765e]'
                    : 'text-[#252a25]/70 hover:text-[#65765e]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/properties"
          className="hidden items-center gap-4 rounded-sm bg-[#354b37] px-5 py-3.5 text-xs font-bold text-white transition hover:bg-[#263729] md:flex"
        >
          Find a property
          <ArrowUpRight size={16} />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#252a25] md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 top-full flex w-full flex-col gap-6 border-t border-[#252a25]/10 bg-[#f7f7f3] px-6 py-7 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/properties"
            onClick={() => setMenuOpen(false)}
            className="flex w-fit items-center gap-3 bg-[#354b37] px-5 py-3 text-xs font-bold text-white"
          >
            Find a property
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar