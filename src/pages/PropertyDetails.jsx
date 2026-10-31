
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  Check,
} from 'lucide-react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PropertyCard from '../components/PropertyCard'
import properties from '../data/properties'

function PropertyDetails() {
  const { id } = useParams()
  const property = properties.find((item) => item.id === id)

  const [selectedImage, setSelectedImage] = useState(0)

const imageLabels = [
  'Exterior',
  'Living Room',
  'Kitchen',
  'Bedroom',
]
  const [submitted, setSubmitted] = useState(false)

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#f5f3ed] px-6 text-center">
          <h1 className="text-5xl">Property not found.</h1>
          <p className="mt-4 text-sm text-[#292c26]/60">
            This property may no longer be available.
          </p>
          <Link
            to="/properties"
            className="mt-7 bg-[#354b37] px-6 py-4 text-xs uppercase tracking-widest text-white"
          >
            Browse properties
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  const otherProperties = properties
    .filter((item) => item.id !== property.id)
    .slice(0, 3)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#f5f3ed] text-[#292c26]">

        {/* BREADCRUMB */}
        <section className="mx-auto max-w-[1450px] px-6 py-8 md:px-12">
          <Link
            to="/properties"
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-[#75866c] hover:text-[#292c26]"
          >
            <ArrowLeft size={15} />
            Back to properties
          </Link>
        </section>

        {/* PROPERTY HEADING */}
        <section className="mx-auto max-w-[1450px] px-6 pb-9 md:px-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#75866c]">
                <MapPin size={13} />
                {property.location}
              </p>

              <h1 className="mt-4 text-5xl tracking-[-0.04em] md:text-7xl">
                {property.name}
              </h1>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#292c26]/50">
                {property.status}
              </p>
              <p className="mt-2 text-2xl font-medium">{property.price}</p>
            </div>
          </div>
        </section>

                {/* PHOTO GALLERY */}
        <section className="mx-auto max-w-[1450px] px-6 md:px-12">
          <div className="grid gap-3 md:grid-cols-12">
            <div className="relative overflow-hidden bg-[#e8e5dc] md:col-span-9">
              <img
                src={property.images[selectedImage]}
                alt={`${property.name} - ${imageLabels[selectedImage] || 'Property view'}`}
                className="h-[320px] w-full object-cover sm:h-[420px] md:h-[510px]"
              />

              <div className="absolute bottom-0 left-0 bg-[#252a25]/85 px-5 py-4 text-white">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/60">
                  Property photograph
                </p>
                <p className="mt-1 text-sm">
                  {imageLabels[selectedImage] || `View ${selectedImage + 1}`}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:col-span-3 md:grid-cols-1">
              {property.images.map((image, index) => (
                <button
                  key={image + index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden bg-[#e8e5dc] text-left ${
                    index === selectedImage ? 'ring-2 ring-[#354b37]' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${property.name} - ${imageLabels[index] || `View ${index + 1}`}`}
                    className="h-28 w-full object-cover transition duration-300 hover:scale-105 md:h-[120px]"
                  />

                  <span className="absolute inset-x-0 bottom-0 bg-[#252a25]/75 px-3 py-2 text-left text-[9px] uppercase tracking-wider text-white">
                    {imageLabels[index] || `View ${index + 1}`}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PROPERTY INFORMATION */}
        <section className="mx-auto grid max-w-[1450px] gap-14 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#75866c]">
              Property overview
            </p>

            <h2 className="mt-5 text-4xl tracking-[-0.03em] md:text-5xl">
              A closer look.
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#292c26]/65">
              {property.description}
            </p>

            <div className="mt-10 grid grid-cols-3 border-y border-[#292c26]/15 py-7">
              <div>
                <BedDouble size={20} className="mb-3 text-[#75866c]" />
                <p className="text-xl">{property.bedrooms}</p>
                <p className="mt-1 text-[9px] uppercase tracking-wider text-[#292c26]/50">
                  Bedrooms
                </p>
              </div>

              <div>
                <Bath size={20} className="mb-3 text-[#75866c]" />
                <p className="text-xl">{property.bathrooms}</p>
                <p className="mt-1 text-[9px] uppercase tracking-wider text-[#292c26]/50">
                  Bathrooms
                </p>
              </div>

              <div>
                <Maximize2 size={19} className="mb-3 text-[#75866c]" />
                <p className="text-xl">{property.area}</p>
                <p className="mt-1 text-[9px] uppercase tracking-wider text-[#292c26]/50">
                  Area
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl">Property features</h3>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-[#292c26]/70">
                    <Check size={16} className="text-[#75866c]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INSPECTION FORM */}
          <div id="inspection" className="h-fit bg-[#ebe9e1] p-7 md:col-span-5 md:p-9">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#75866c]">
              Interested in this property?
            </p>

            <h2 className="mt-4 text-4xl leading-tight">
              Arrange an inspection.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#292c26]/60">
              Send us your details and preferred viewing date.
              Our team can follow up about your request.
            </p>

            {submitted ? (
              <div className="mt-8 border border-[#75866c]/40 bg-[#f5f3ed] p-6">
                <Check size={25} className="text-[#354b37]" />
                <h3 className="mt-4 text-2xl">Request received.</h3>
                <p className="mt-2 text-sm leading-7 text-[#292c26]/60">
                  This is a demonstration form. No request has
                  actually been sent to an agency.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-[10px] uppercase tracking-widest text-[#75866c] underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full border border-[#292c26]/15 bg-transparent px-4 py-4 text-sm outline-none focus:border-[#75866c]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-full border border-[#292c26]/15 bg-transparent px-4 py-4 text-sm outline-none focus:border-[#75866c]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your phone number"
                    className="w-full border border-[#292c26]/15 bg-transparent px-4 py-4 text-sm outline-none focus:border-[#75866c]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider">
                    Preferred inspection date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border border-[#292c26]/15 bg-transparent px-4 py-4 text-sm outline-none focus:border-[#75866c]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-between bg-[#354b37] px-6 py-5 text-[10px] uppercase tracking-[0.15em] text-white transition hover:bg-[#292c26]"
                >
                  Request inspection
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* MORE PROPERTIES */}
        <section className="bg-[#ebe9e1] px-6 py-20 md:px-12 md:py-24">
          <div className="mx-auto max-w-[1450px]">
            <div className="mb-12 flex items-end justify-between gap-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#75866c]">
                  Keep exploring
                </p>
                <h2 className="mt-4 text-4xl md:text-6xl">
                  You may also like.
                </h2>
              </div>

              <Link
                to="/properties"
                className="hidden items-center gap-2 text-[10px] uppercase tracking-wider sm:flex"
              >
                All properties <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {otherProperties.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default PropertyDetails
