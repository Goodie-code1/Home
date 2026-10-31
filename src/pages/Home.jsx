
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Building2,
  KeyRound,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PropertyCard from '../components/PropertyCard'
import properties from '../data/properties'

function Home() {
  const featuredProperties = properties.slice(0, 3)

  const services = [
    {
      icon: <Building2 size={23} />,
      title: 'Property sales',
      description:
        'Explore residential properties and find a place that suits your plans.',
    },
    {
      icon: <KeyRound size={23} />,
      title: 'Property rentals',
      description:
        'Find spaces to rent, whether you are moving, starting out or relocating.',
    },
    {
      icon: <ClipboardCheck size={23} />,
      title: 'Property guidance',
      description:
        'Get help understanding your options as you navigate the property market.',
    },
  ]

  const highlights = [
    { value: '07', label: 'Featured demo properties' },
    { value: '02', label: 'Ways to find your space' },
    { value: '01', label: 'Place to start your search' },
  ]

  return (
    <>
      <Navbar />

      <main className="bg-[#f7f7f3] text-[#252a25]">

        {/* HERO */}
        <section className="px-4 pt-4 md:px-8">
          <div className="grid min-h-[620px] overflow-hidden bg-[#e9ece5] lg:grid-cols-2">

            <div className="flex flex-col justify-center px-7 py-16 md:px-14 lg:px-16 xl:px-20">
              <p className="mb-7 text-xs font-bold uppercase tracking-[0.18em] text-[#65765e]">
                HOME · Real estate
              </p>

              <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] md:text-7xl">
                A place that feels like <span className="text-[#65765e]">yours.</span>
              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#252a25]/65 md:text-base">
                Finding the right property starts with knowing what matters
                to you. Explore spaces worth considering.
              </p>

              <Link
                to="/properties"
                className="mt-9 inline-flex w-fit items-center gap-8 rounded-sm bg-[#354b37] px-7 py-4 text-xs font-semibold text-white transition duration-300 hover:bg-[#263729]"
              >
                Explore properties
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="relative min-h-[350px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90"
                alt="Modern residential property"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#65765e]">
                Finding your next space
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
                Property decisions deserve a little more thought.
              </h2>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <p className="text-sm leading-8 text-[#252a25]/65">
                Whether you are looking to buy, rent or simply explore,
                HOME brings property options together in one place.
              </p>
            </div>
          </div>
        </section>

        {/* HOME HIGHLIGHTS */}
        <section className="bg-[#263729] px-6 py-12 text-white md:px-12 md:py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-9 flex items-center gap-3">
              <ShieldCheck size={19} className="text-[#b7c5ad]" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b7c5ad]">
                A closer look at HOME
              </p>
            </div>

            <div className="grid gap-9 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`${
                    index !== 0
                      ? 'border-t border-white/15 pt-7 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0'
                      : ''
                  }`}
                >
                  <p className="text-4xl font-semibold tracking-tight md:text-5xl">
                    {item.value}
                  </p>
                  <p className="mt-3 text-xs tracking-wide text-white/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 border-t border-white/15 pt-5 text-[10px] leading-6 text-white/45">
              Figures represent the scope of this demonstration website,
              not verified company performance.
            </p>
          </div>
        </section>

        {/* FEATURED PROPERTIES */}
        <section className="bg-[#eeefe9] px-6 py-24 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1400px]">

            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#65765e]">
                  Selected properties
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                  Take a closer look.
                </h2>
              </div>

              <Link
                to="/properties"
                className="inline-flex w-fit items-center gap-3 border-b border-[#354b37]/40 pb-2 text-xs font-semibold transition hover:text-[#65765e]"
              >
                Browse all properties
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <p className="mt-10 text-xs text-[#252a25]/45">
              Illustrative property listings for demonstration purposes.
            </p>

          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#65765e]">
              What we offer
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
              More than just property listings.
            </h2>
          </div>

          <div className="mt-14 grid border-t border-[#252a25]/15 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="border-b border-[#252a25]/15 py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <div className="text-[#65765e]">
                  {service.icon}
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-7 text-[#252a25]/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY HOME */}
        <section className="bg-[#263729] text-white">
          <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">

            <div className="flex flex-col justify-center px-7 py-20 md:px-14 lg:px-20">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b7c5ad]">
                The HOME difference
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
                A more considered way to explore property.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-white/65">
                Every property search comes with its own questions.
                We want to make exploring your options clearer, simpler
                and easier to navigate.
              </p>

              <Link
                to="/about"
                className="mt-9 inline-flex w-fit items-center gap-4 border-b border-white/50 pb-3 text-xs font-semibold transition hover:text-[#b7c5ad]"
              >
                Get to know HOME
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
                alt="Bright contemporary living space"
                className="h-full min-h-[400px] w-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 py-24 text-center md:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#65765e]">
            Your search starts here
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-7xl">
            Let's find a space that works for you.
          </h2>

          <Link
            to="/properties"
            className="mt-9 inline-flex items-center gap-8 rounded-sm bg-[#354b37] px-7 py-4 text-xs font-semibold text-white transition hover:bg-[#263729]"
          >
            View properties
            <ArrowUpRight size={17} />
          </Link>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Home
