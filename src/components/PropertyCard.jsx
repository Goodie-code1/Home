import { Link } from 'react-router-dom'
import { ArrowUpRight, BedDouble, Bath, Maximize2, MapPin } from 'lucide-react'

function PropertyCard({ property }) {
  return (
    <article className="group min-w-0">

      <Link
        to={`/properties/${property.id}`}
        className="relative block overflow-hidden rounded-sm bg-[#e8e9e3]"
      >
        <img
          src={property.images[0]}
          alt={property.name}
          className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[320px]"
        />

        <span className="absolute left-4 top-4 rounded-sm bg-[#f7f7f3] px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-[#252a25]">
          {property.status}
        </span>

        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#252a25] transition duration-300 group-hover:bg-[#354b37] group-hover:text-white">
          <ArrowUpRight size={19} />
        </span>
      </Link>

      <div className="pt-5">

        <div className="flex items-center gap-2 text-xs font-medium text-[#65765e]">
          <MapPin size={14} />
          {property.location}
        </div>

        <div className="mt-3 flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight text-[#252a25] sm:text-2xl">
            {property.name}
          </h3>

          <p className="whitespace-nowrap text-base font-extrabold text-[#354b37]">
            {property.price}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#252a25]/10 pt-4 text-xs font-medium text-[#252a25]/60">

          <span className="flex items-center gap-2">
            <BedDouble size={16} />
            {property.bedrooms} Bedrooms
          </span>

          <span className="flex items-center gap-2">
            <Bath size={16} />
            {property.bathrooms} Bathrooms
          </span>

          <span className="flex items-center gap-2">
            <Maximize2 size={15} />
            {property.area}
          </span>

        </div>
      </div>
    </article>
  )
}

export default PropertyCard