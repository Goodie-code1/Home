import { useState } from 'react'
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PropertyCard from '../components/PropertyCard'
import properties from '../data/properties'

function Properties() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('All locations')
  const [status, setStatus] = useState('All')
  const [sort, setSort] = useState('default')
  const [type, setType] = useState('All types')

  const locations = [
    'All locations',
    ...new Set(properties.map((property) => property.location.split(',')[0])),
  ]

  const resetFilters = () => {
    setSearch('')
    setLocation('All locations')
    setStatus('All')
    setSort('default')
    setType('All types')
  }

  const filteredProperties = properties
    .filter((property) => {
      const matchesSearch =
        property.name.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase())

      const matchesLocation =
        location === 'All locations' ||
        property.location.startsWith(location)

      const matchesStatus =
        status === 'All' || property.status === status

      const matchesType =
        type === 'All types' || property.type === type

      return matchesSearch && matchesLocation && matchesStatus && matchesType
    })
    .sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name)

      if (sort === 'price') {
        const getPrice = (value) =>
          Number(value.replace(/[^\d]/g, '')) || 0

        return getPrice(a.price) - getPrice(b.price)
      }

      return 0
    })

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f7f3] text-[#252a25]">

        {/* INTRO */}
        <section className="border-b border-[#252a25]/10 px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#65765e]">
              The property collection
            </p>

            <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end">
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-[-0.06em] md:col-span-8 md:text-8xl">
                Find a place<br />
                to call yours<span className="text-[#65765e]">.</span>
              </h1>

              <p className="text-sm leading-8 text-[#252a25]/60 md:col-span-4">
                Browse the available property options, explore the details
                and discover spaces worth considering.
              </p>
            </div>
          </div>
        </section>

        {/* SEARCH AND FILTERS */}
        <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <SlidersHorizontal size={18} className="text-[#65765e]" />
              <h2 className="text-sm font-bold">Find your property</h2>
            </div>

            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-[#65765e] transition hover:text-[#252a25]"
            >
              Reset all filters
            </button>
          </div>

          <div className="mt-6 grid gap-3 rounded-sm border border-[#252a25]/10 bg-white p-4 md:grid-cols-2 lg:grid-cols-5">

            <div className="relative">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#65765e]"
              />
              <input
                type="text"
                placeholder="Name or location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-sm border border-[#252a25]/10 bg-[#f7f7f3] py-4 pl-11 pr-3 text-sm outline-none transition focus:border-[#65765e]"
              />
            </div>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-sm border border-[#252a25]/10 bg-[#f7f7f3] px-4 py-4 text-sm outline-none focus:border-[#65765e]"
            >
              {locations.map((place) => (
                <option key={place} value={place}>{place}</option>
              ))}
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-sm border border-[#252a25]/10 bg-[#f7f7f3] px-4 py-4 text-sm outline-none focus:border-[#65765e]"
            >
              <option value="All types">All property types</option>
              <option value="Detached House">Detached House</option>
              <option value="Apartment">Apartment</option>
              <option value="Semi-Detached House">Semi-Detached House</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-sm border border-[#252a25]/10 bg-[#f7f7f3] px-4 py-4 text-sm outline-none focus:border-[#65765e]"
            >
              <option value="All">Buy or rent</option>
              <option value="For Sale">For sale</option>
              <option value="For Rent">For rent</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full rounded-sm border border-[#252a25]/10 bg-[#f7f7f3] px-4 py-4 text-sm outline-none focus:border-[#65765e]"
            >
              <option value="default">Sort: Default</option>
              <option value="name">Name: A–Z</option>
              <option value="price">Price: Lowest first</option>
            </select>

          </div>
        </section>

        {/* RESULTS */}
        <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-12">

          <div className="mb-10 flex items-center justify-between border-b border-[#252a25]/10 pb-5">
            <div>
              <p className="text-lg font-extrabold">
                {filteredProperties.length} properties
              </p>
              <p className="mt-1 text-xs text-[#252a25]/50">
                Matching your search
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#252a25]/50">
              <ArrowUpDown size={15} />
              {sort === 'price' ? 'Lowest price' : sort === 'name' ? 'Name A–Z' : 'Featured order'}
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <>
              <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              <p className="mt-12 text-xs text-[#252a25]/45">
                Illustrative property listings for demonstration purposes.
              </p>
            </>
          ) : (
            <div className="py-24 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight">
                No properties found.
              </h2>

              <p className="mt-4 text-sm text-[#252a25]/55">
                Try adjusting your search or choosing different filters.
              </p>

              <button
                onClick={resetFilters}
                className="mt-8 rounded-sm bg-[#354b37] px-7 py-4 text-xs font-bold text-white transition hover:bg-[#263729]"
              >
                Clear filters
              </button>
            </div>
          )}

        </section>
      </main>

      <Footer />
    </>
  )
}

export default Properties