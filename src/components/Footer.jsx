import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#252a25] text-[#f7f7f3]">
      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-12">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">
            <Link to="/" className="text-4xl font-extrabold tracking-[-0.09em]">
              HOME<span className="text-[#a1ad91]">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Property options, thoughtfully brought together.
              Explore spaces to buy, rent and consider your next move.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#a1ad91]">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/70">
              <Link to="/" className="transition hover:text-white">Home</Link>
              <Link to="/properties" className="transition hover:text-white">Properties</Link>
              <Link to="/about" className="transition hover:text-white">About</Link>
              <Link to="/contact" className="transition hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#a1ad91]">
              Get in touch
            </h3>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-sm transition hover:text-[#a1ad91]"
            >
              Make an enquiry
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-[10px] font-medium uppercase tracking-[0.12em] text-white/40 sm:flex-row">
          <span>© 2026 HOME PROPERTY & LIVING.</span>
          <span className="text-white/70">A digital experience by ZIVA.</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer