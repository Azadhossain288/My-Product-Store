const stepsData = [
  {
    step: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
]

const Steps = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <div className="w-8 h-1 bg-violet-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
          <p className="text-gray-500 mt-2">Get started in 3 simple steps</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stepsData.map((s) => (
            <div key={s.step} className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition text-center">

              {/* Step Number Badge - top right */}
              <div className="absolute top-5 right-5 w-9 h-9 bg-violet-600 text-white text-sm font-black rounded-full flex items-center justify-center">
                {s.step}
              </div>

              {/* Icon Circle */}
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-gray-900 text-xl mb-3">{s.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>

            </div>
          ))}
        </div>

        {/* Bottom line decoration */}
        <div className="flex justify-center mt-14">
          <div className="w-8 h-1 bg-violet-500 rounded-full"></div>
        </div>

      </div>
    </section>
  )
}

export default Steps
