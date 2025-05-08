"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Globe, ArrowRight } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("studio-360-platform")

  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-4 md:px-12 py-4 bg-white">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            SRP
          </Link>

          <div className="hidden lg:flex space-x-8">
            <Link href="#" className="text-black hover:text-gray-600 font-medium">
              Products
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 font-medium">
              Solutions
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 font-medium">
              Why SRP
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 font-medium">
              Our partners
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 font-medium">
              Who we are
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 font-medium">
              Resources
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="#" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            Schedule a demo
          </Link>
          <Link href="#" className="border border-black text-black px-4 py-2 rounded-full text-sm font-medium">
            Contact us
          </Link>
          <button className="p-2">
            <Globe className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-3">
            <Link href="#" className="text-black hover:text-gray-600 py-2">
              Products
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 py-2">
              Solutions
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 py-2">
              Why Sentry's Reconciliation Partners
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 py-2">
              Our partners
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 py-2">
              Who we are
            </Link>
            <Link href="#" className="text-black hover:text-gray-600 py-2">
              Resources
            </Link>
            <Link href="#" className="bg-black text-white px-4 py-2 rounded-full text-center text-sm font-medium">
              Schedule a demo
            </Link>
            <Link
              href="#"
              className="border border-black text-black px-4 py-2 rounded-full text-center text-sm font-medium"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section with Yellow Background and Gold Elements */}
      <section className="bg-[#FFE500] rounded-[2.5rem] relative overflow-hidden py-12 lg:py-18 xl:py-24 mx-4 md:mx-16">
        {/* Gold Elements Background */}
        <div className="w-full pb-[100%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-[0.95] xl:scale-[0.8]">
          <div className="absolute inset-0">
            <div className="w-full h-full origin-center -rotate-[120deg]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5/12 pb-[20.8%] rounded-b-full bg-[#fdee4b]"></div>
              <div className="absolute top-[20.8%] left-1/2 -translate-x-1/2 w-8/12 pb-[33.3%] rounded-b-full bg-[#fdee4b]"></div>
              <div className="absolute top-[calc(20.8%+33.3%)] left-1/2 -translate-x-1/2 w-full pb-[50%] rounded-b-full bg-[#fdee4b]"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-12 relative">
          <div className="col-span-10 col-start-2 md:gap-y-8">
            <div className="flex flex-col gap-y-6">
              <h1 className="font-urbanist font-extrabold text-h4 tracking-tight text-center md:text-h3 lg:text-h2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Meet your future-ready financial operations platform.
              </h1>
              <p className="text-xl tracking-tight text-center lg:text-2xl max-w-4xl mx-auto">
                Identify your critical path with Sentry's Reconciliation Partners AI-enabled solutions - accelerating
                record-to-report and invoice-to-cash, eliminating delays, strengthening controls, and delivering trusted
                data.
              </p>
              <div className="flex flex-col mx-auto gap-4 lg:flex-row justify-center">
                <Link
                  href="#"
                  className="font-urbanist border font-semibold border-black border-2 text-white bg-black hover:bg-gray-700 hover:border-gray-700 transition-all duration-200 ease-out transform cursor-pointer active:bg-gray-600 active:border-gray-600 font-bold rounded-[2rem] text-lg leading-7 gap-3 py-4 px-6 text-center"
                >
                  Schedule a demo
                </Link>
                <Link
                  href="#"
                  className="font-urbanist border font-semibold bg-transparent text-black border-black border-2 hover:text-white hover:bg-black transition-all duration-200 ease-out transform cursor-pointer active:bg-gray-600 font-bold rounded-[2rem] text-lg leading-7 gap-3 py-4 px-6 text-center"
                >
                  Explore AI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-bold tracking-wider uppercase mb-12">
            JOIN 4,400+ COMPANIES TAKING CONTROL OF THEIR FINANCIAL OPERATIONS WITH SRP
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
            {[...Array(7)].map((_, i) => (
              <Image
                key={i}
                src="/placeholder.svg?height=40&width=120"
                alt="Client Logo"
                width={120}
                height={40}
                className="h-8 w-auto grayscale opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CFO Section */}
      <section className="bg-black text-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-urbanist text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-5xl">
            Revolutionize the office of the CFO through end-to-end AI-powered digital transformation.
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl">
            Streamline your financial close, accounts receivable, and compliance processes with our unified platform.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Financial Close Management</h3>
              <p className="text-gray-300 mb-6">
                Automate and standardize your financial close process for greater accuracy and efficiency.
              </p>
              <Link href="#" className="flex items-center text-[#FFE500] font-medium hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Accounts Receivable Automation</h3>
              <p className="text-gray-300 mb-6">
                Optimize cash flow with automated invoice-to-cash processes and real-time visibility.
              </p>
              <Link href="#" className="flex items-center text-[#FFE500] font-medium hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Compliance & Controls</h3>
              <p className="text-gray-300 mb-6">
                Strengthen financial controls and ensure compliance with automated workflows.
              </p>
              <Link href="#" className="flex items-center text-[#FFE500] font-medium hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Intro Section */}
      <section className="py-30 px-6 sm:px-8 lg:px-12 xl:px-16 3xl:container 3xl:mx-auto">
        <div className="flex flex-col">
          
          {/* Platform Intro Features */}
          <div className="flex flex-col gap-8 mb-8">
            <div className="text-heading-h6 font-extrabold sm:text-heading-h3">Sentry's Reconciliation Partners's AI-enabled solutions:</div>
            <div className="grid grid-cols-1 gap-12 mb-8 sm:grid-cols-2 sm:gap-x-4 md:gap-x-6 md:gap-y-16 lg:grid-cols-3 lg:gap-x-8 3xl:gap-16">
              <div className="flex flex-col gap-4 md:gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16 text-gold-500 md:h-22 md:w-22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
                <div className="text-heading-h4 font-extralight sm:text-heading-h5 md:text-heading-h1 lg:text-heading-h5 xl:text-h3">
                  Deliver rapid ROI
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16 text-gold-500 md:h-22 md:w-22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                  />
                </svg>
                <div className="text-heading-h4 font-extralight sm:text-heading-h5 md:text-heading-h1 lg:text-heading-h5 xl:text-h3">
                  Create a pathway to strategic success
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16 text-gold-500 md:h-22 md:w-22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <div className="text-heading-h4 font-extralight sm:text-heading-h5 md:text-heading-h1 lg:text-heading-h5 xl:text-h3">
                  Ensure sustainable transformation
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16 text-gold-500 md:h-22 md:w-22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
                <div className="text-heading-h4 font-extralight sm:text-heading-h5 md:text-heading-h1 lg:text-heading-h5 xl:text-h3">
                  Boost your accuracy
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16 text-gold-500 md:h-22 md:w-22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <div className="text-heading-h4 font-extralight sm:text-heading-h5 md:text-heading-h1 lg:text-heading-h5 xl:text-h3">
                  Focus employees on high-impact work
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-16 w-16 text-gold-500 md:h-22 md:w-22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                <div className="text-heading-h4 font-extralight sm:text-heading-h5 md:text-heading-h1 lg:text-heading-h5 xl:text-h3">
                  Safeguard your data
                </div>
              </div>
            </div>

            <div>
              <Link
                href="#"
                className="border font-semibold border-gold-300 border-2 text-black bg-gold-300 hover:bg-gold-500 hover:border-gold-500 transition-all duration-200 ease-out transform cursor-pointer active:bg-gold-600 active:border-gold-600 font-urbanist rounded-7xl text-lg leading-7 font-bold gap-3 py-4 px-6 text-center inline-flex w-full sm:w-auto"
              >
                Discover the full power of our platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Sections with Tabs */}
      <section className="relative">
        {/* Product Intro - Studio360 Platform */}
        <div className="product-intro text-black bg-gradient-to-r bg-linear-to-r from-yellow-600 via-yellow-400 to-yellow-300" id="studio-360-platform">
          <div className="px-6 pb-16 sm:px-8 sm:pt-16 sm:pb-18 md:pt-18 md:pb-22 lg:px-12 lg:pt-24 lg:pb-26 xl:px-16 3xl:container 3xl:mx-auto">
            <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-22 xl:mb-30">
              <div className="lg:hidden">
                <div className="text-base font-bold pt-6 border-t-2 border-black">Studio360 Platform</div>
              </div>
              <div className="hidden lg:flex lg:gap-6">
                <a
                  className={`text-base tracking-tight pt-6 border-t-2 lg:flex-1 ${activeTab === "studio-360-platform" ? "border-black font-bold" : "border-black/20"}`}
                  href="#studio-360-platform"
                  onClick={() => setActiveTab("studio-360-platform")}
                >
                  Studio360 Platform
                </a>
                <a
                  className={`text-base tracking-tight pt-6 border-t-2 lg:flex-1 ${activeTab === "financial-close" ? "border-black font-bold" : "border-black/20"}`}
                  href="#financial-close"
                  onClick={() => setActiveTab("financial-close")}
                >
                  Financial Close
                </a>
                <a
                  className={`text-base tracking-tight pt-6 border-t-2 lg:flex-1 ${activeTab === "intercompany" ? "border-black font-bold" : "border-black/20"}`}
                  href="#intercompany"
                  onClick={() => setActiveTab("intercompany")}
                >
                  Intercompany
                </a>
                <a
                  className={`text-base tracking-tight pt-6 border-t-2 lg:flex-1 ${activeTab === "consolidation-financial-analytics" ? "border-black font-bold" : "border-black/20"}`}
                  href="#consolidation-financial-analytics"
                  onClick={() => setActiveTab("consolidation-financial-analytics")}
                >
                  Consolidation &amp; Financial Analytics
                </a>
                <a
                  className={`text-base tracking-tight pt-6 border-t-2 lg:flex-1 ${activeTab === "invoice-to-cash" ? "border-black font-bold" : "border-black/20"}`}
                  href="#invoice-to-cash"
                  onClick={() => setActiveTab("invoice-to-cash")}
                >
                  Invoice-to-Cash
                </a>
              </div>
            </div>

            <h2 className="text-h5 font-extralight mb-6 sm:text-h2 sm:mb-10 lg:mb-14 xl:w-9/12 3xl:w-7/12">
              See your financial operations from every angle
            </h2>

            <div className="lg:grid lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-6 lg:order-2 3xl:col-start-8 3xl:col-span-5">
                <div className="h-[220px] rounded-3xl overflow-hidden bg-black/20 mb-6 sm:h-[400px] sm:mb-10 md:h-[430px] md:w-9/12 lg:h-[320px] lg:w-full xl:h-[400px] 3xl:h-[410px]">
                  <Image
                    src="/placeholder.webp?height=400&width=550"
                    alt="Sentry's Reconciliation Partners Studio Platform"
                    width={550}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="md:w-10/12 lg:w-full">
                  <div className="text-xl font-bold mb-6 sm:text-2xl sm:font-medium sm:mb-8">
                    <p>
                      <span>
                        Connect, automate, and report on your entire financial ecosystem from an intuitive cloud-based
                        hub.
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-7 pl-6 border-l-2 mb-10 sm:pl-8 sm:mb-14 xl:mb-20 border-black">
                    <div className="text-xl sm:text-2xl">Integrate your data, ensuring a single source of truth</div>
                    <div className="text-xl sm:text-2xl">Orchestrate workflows across applications</div>
                    <div className="text-xl sm:text-2xl">
                      Visualize activities with customizable dashboards and reports
                    </div>
                    <div className="text-xl sm:text-2xl">
                      Blueprint rapid transformation with process design templates
                    </div>
                    <div className="text-xl sm:text-2xl">Control governance and risk management from a central hub</div>
                  </div>

                  <div>
                    <Link
                      href="#"
                      className="border font-semibold border-black border-2 text-white bg-black hover:bg-gray-700 hover:border-gray-700 transition-all duration-200 ease-out transform cursor-pointer active:bg-gray-600 active:border-gray-600 font-urbanist rounded-7xl text-lg leading-7 font-bold gap-3 py-4 px-6 text-center flex justify-center sm:inline-flex"
                    >
                      Explore the Sentry's Reconciliation Partners Studio360 Platform
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Intro - Financial Close */}
        <div
          className={`product-intro min-h-[200px] p-6 text-gray-800 bg-gradient-to-r from-purple-400 via-purple-300 to-pink-300 ${activeTab === "financial-close" ? "block" : "hidden lg:block"}`}
          id="financial-close"
        >
          <div className="px-6 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-18 md:pt-18 md:pb-22 lg:px-12 lg:pt-24 lg:pb-26 xl:px-16 3xl:container 3xl:mx-auto">
            <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-22 xl:mb-30">
              <div className="lg:hidden">
                <div className="text-base font-bold pt-6 border-t-2 border-white">Financial Close</div>
              </div>
              <div className="hidden lg:flex lg:gap-6">
                <a
                  className={`text-base tracking-tight pt-6 border-t-2 lg:flex-1 ${activeTab === "studio-360-platform" ? "border-white font-bold" : "border-white/20"}`}
                  href="#studio-360-platform"
                  onClick={() => setActiveTab("studio-360-platform")}
                >
                  Studio360 Platform
                </a>
                <a
                  className={`text-base tracking-tight pt-6 border-t-2 lg:flex-1 ${activeTab === "financial-close" ? "border-white font-bold" : "border-white/20"}`}
                  href="#financial-close"
                  onClick={() => setActiveTab("financial-close")}
                >
                  Financial Close
                </a>
                <a
                  className={`text-base tracking-tight pt-6 border-t-2 lg:flex-1 ${activeTab === "intercompany" ? "border-white font-bold" : "border-white/20"}`}
                  href="#intercompany"
                  onClick={() => setActiveTab("intercompany")}
                >
                  Intercompany
                </a>
                <a
                  className={`text-base tracking-tight pt-6 border-t-2 lg:flex-1 ${activeTab === "consolidation-financial-analytics" ? "border-white font-bold" : "border-white/20"}`}
                  href="#consolidation-financial-analytics"
                  onClick={() => setActiveTab("consolidation-financial-analytics")}
                >
                  Consolidation &amp; Financial Analytics
                </a>
                <a
                  className={`text-base tracking-tight pt-6 border-t-2 lg:flex-1 ${activeTab === "invoice-to-cash" ? "border-white font-bold" : "border-white/20"}`}
                  href="#invoice-to-cash"
                  onClick={() => setActiveTab("invoice-to-cash")}
                >
                  Invoice-to-Cash
                </a>
              </div>
            </div>

            <h2 className="text-h5 font-extralight mb-6 sm:text-h2 sm:mb-10 lg:mb-14 xl:w-9/12 3xl:w-7/12">
              Execute a financial close you can trust
            </h2>

            <div className="lg:grid lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-6 lg:order-2 3xl:col-start-8 3xl:col-span-5">
                <div className="h-[220px] rounded-3xl overflow-hidden bg-black/20 mb-6 sm:h-[400px] sm:mb-10 md:h-[430px] md:w-9/12 lg:h-[320px] lg:w-full xl:h-[400px] 3xl:h-[410px]">
                  <Image
                    src="/placeholder2.webp?height=400&width=550"
                    alt="Financial Close"
                    width={550}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="md:w-10/12 lg:w-full">
                  <div className="text-xl font-bold mb-6 sm:text-2xl sm:font-medium sm:mb-8">
                    <p>
                      <span>Automate closing activities to reduce risk and accelerate financial insights.</span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-7 pl-6 border-l-2 mb-10 sm:pl-8 sm:mb-14 xl:mb-20 border-white">
                    <div className="text-xl sm:text-2xl">Manage and control the end-to-end financial close process</div>
                    <div className="text-xl sm:text-2xl">
                      Reduce error-prone tasks by automating journal entries and reconciliations
                    </div>
                    <div className="text-xl sm:text-2xl">Strengthen controls</div>
                  </div>

                  <div>
                    <Link
                      href="#"
                      className="border font-semibold border-black border-2 text-white bg-black hover:bg-gray-700 hover:border-gray-700 transition-all duration-200 ease-out transform cursor-pointer active:bg-gray-600 active:border-gray-600 font-urbanist rounded-7xl text-lg leading-7 font-bold gap-3 py-4 px-6 text-center flex justify-center sm:inline-flex"
                    >
                      Explore Financial Close
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional product sections would follow the same pattern */}
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-1">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Sentry's Reconciliation Partners Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 mb-6">Trust is in the Balance™</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">PRODUCTS</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Financial Close
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Intercompany
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Consolidation & Financial Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Invoice-to-Cash
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">SERVICES</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Professional services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Training & education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Customer success
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Transformation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">RESOURCES</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Resource library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Events & webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sentry's Reconciliation Partners blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">WHO WE ARE</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Sentry's Reconciliation Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Why Sentry's Reconciliation Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Success stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Press releases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4">CAREERS</h3>
            <p className="text-gray-400 mb-4">
              Sentry's Reconciliation Partners has been voted Best Place to Work by Inc. Magazine four years in a row. Find your next role with
              us.
            </p>
            <Link href="#" className="flex items-center text-gray-400 hover:text-white">
              See open roles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-between items-center border-t border-gray-800 pt-8">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <Link href="#" className="hover:text-white">
                System Status
              </Link>
              <Link href="#" className="hover:text-white">
                Corporate Responsibility
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Cookies Settings
              </Link>
              <Link href="#" className="hover:text-white">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-white">
                GDPR
              </Link>
              <span>© 2023 Sentry's Reconciliation Partners Inc.</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
