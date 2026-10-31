
import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#f5f3ed] text-[#292c26]">
        <section className="border-b border-[#292c26]/10 px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1450px]">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#75866c]">
              We'd like to hear from you
            </p>

            <h1 className="mt-6 max-w-4xl text-6xl leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Let's talk about
              <br />
              your next move<span className="text-[#75866c]">.</span>
            </h1>

            <p className="mt-8 max-w-md text-sm leading-8 text-[#292c26]/60">
              Looking for a property, have a question or want to
              arrange a viewing? Send us a message.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1450px] gap-16 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#75866c]">
              Get in touch
            </p>

            <h2 className="mt-5 text-4xl leading-tight">
              Start with a conversation.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#292c26]/60">
              Tell us what you're looking for. We're here to help
              you explore your property options.
            </p>

            <div className="mt-12 space-y-9">
              <a href="mailto:goodiecodes@gmail.com" className="flex gap-5 group">
                <Mail size={20} className="mt-1 text-[#75866c]" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#292c26]/45">
                    Email
                  </p>
                  <p className="mt-2 text-sm group-hover:text-[#75866c]">
                    goodiecodes@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+2349069336658" className="flex gap-5 group">
                <Phone size={20} className="mt-1 text-[#75866c]" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#292c26]/45">
                    Phone
                  </p>
                  <p className="mt-2 text-sm group-hover:text-[#75866c]">
                    09069336658
                  </p>
                </div>
              </a>

              <div className="flex gap-5">
                <MapPin size={20} className="mt-1 text-[#75866c]" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#292c26]/45">
                    Location
                  </p>
                  <p className="mt-2 text-sm">Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#ebe9e1] p-7 md:col-span-7 md:col-start-6 md:p-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#75866c]">
              Send an enquiry
            </p>

            <h2 className="mt-4 text-4xl">
              What can we help you with?
            </h2>

            {submitted ? (
              <div className="mt-10 border border-[#75866c]/40 bg-[#f5f3ed] p-7">
                <h3 className="text-3xl">Thank you.</h3>
                <p className="mt-3 text-sm leading-7 text-[#292c26]/65">
                  Your message has been received by this demo
                  interface. It has not been sent to an agency.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[10px] uppercase tracking-widest text-[#75866c] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-wider">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      className="w-full border-b border-[#292c26]/25 bg-transparent py-4 text-sm outline-none placeholder:text-[#292c26]/35 focus:border-[#354b37]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-wider">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      className="w-full border-b border-[#292c26]/25 bg-transparent py-4 text-sm outline-none placeholder:text-[#292c26]/35 focus:border-[#354b37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border-b border-[#292c26]/25 bg-transparent py-4 text-sm outline-none placeholder:text-[#292c26]/35 focus:border-[#354b37]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider">
                    What are you interested in?
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full border-b border-[#292c26]/25 bg-transparent py-4 text-sm outline-none focus:border-[#354b37]"
                  >
                    <option value="" disabled>Select an enquiry type</option>
                    <option>Buying a property</option>
                    <option>Renting a property</option>
                    <option>Property inspection</option>
                    <option>General enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-wider">
                    Your message
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell us a little about what you're looking for..."
                    className="w-full resize-none border-b border-[#292c26]/25 bg-transparent py-4 text-sm outline-none placeholder:text-[#292c26]/35 focus:border-[#354b37]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-between bg-[#354b37] px-6 py-5 text-[10px] uppercase tracking-[0.15em] text-white transition hover:bg-[#292c26]"
                >
                  Send enquiry
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </section>

        <section className="relative h-[350px] overflow-hidden md:h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
            alt="Modern residential architecture"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#20251f]/35 px-6 text-center">
            <h2 className="max-w-2xl text-5xl leading-tight text-white md:text-7xl">
              The right move starts here.
            </h2>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Contact
