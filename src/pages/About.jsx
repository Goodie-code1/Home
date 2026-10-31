import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f7f7f3] text-[#252a25]">

        <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65765e]">
            ABOUT HOME
          </p>

          <div className="mt-7 grid gap-10 md:grid-cols-12 md:items-end">
            <h1 className="text-5xl font-bold leading-[1.08] tracking-[-0.06em] md:col-span-8 md:text-8xl">
              A better way to find your place.
            </h1>

            <p className="text-sm leading-8 text-[#252a25]/65 md:col-span-4">
              HOME brings property options together, making it easier
              to explore spaces, compare possibilities and take the
              next step with confidence.
            </p>
          </div>
        </section>

        <section className="grid min-h-[480px] md:grid-cols-2">
          <div className="min-h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85"
              alt="Modern residential interior"
              className="h-full min-h-[350px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center bg-[#e9ece5] px-7 py-16 md:px-14 lg:px-20">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65765e]">
              Our perspective
            </p>

            <h2 className="mt-6 max-w-lg text-3xl font-bold leading-tight tracking-[-0.045em] md:text-5xl">
              The right space is about more than four walls.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-[#252a25]/65">
              It is about what the space makes possible. A fresh start,
              a growing family, a new business or simply somewhere
              that feels right. That's the perspective behind HOME.
            </p>

            <Link
              to="/properties"
              className="mt-9 inline-flex w-fit items-center gap-5 bg-[#354b37] px-7 py-4 text-xs font-bold text-white transition hover:bg-[#263729]"
            >
              Explore properties
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

{/* WHAT GUIDES US */}
<section className="border-t border-[#252a25]/10 px-6 py-20 md:px-12 md:py-28">
  <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2">
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65765e]">
        What guides us
      </p>

      <h2 className="mt-6 max-w-lg text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">
        Finding a property should feel straightforward.
      </h2>
    </div>

    <div className="flex flex-col justify-center gap-8">
      <p className="text-sm leading-8 text-[#252a25]/65">
        We believe exploring property should begin with clarity.
        That's why HOME brings different property options into one
        place, giving people room to discover, compare and decide
        what works for them.
      </p>

      <div className="grid grid-cols-2 gap-6 border-t border-[#252a25]/10 pt-7">
        <div>
          <p className="text-2xl font-bold">01</p>
          <p className="mt-2 text-xs text-[#252a25]/60">
            Explore possibilities
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold">02</p>
          <p className="mt-2 text-xs text-[#252a25]/60">
            Make informed choices
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
    </>
  )
}

export default About