const stepsData = [
  { step: "01", title: "Browse Tools",  desc: "Explore our suite of career-boosting products.", icon: "🔍" },
  { step: "02", title: "Add to Cart",   desc: "Pick the tools that match your career goals.",  icon: "🛒" },
  { step: "03", title: "Get Started",   desc: "Checkout instantly and start achieving more.",   icon: "🚀" },
]

const Steps = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">How It Works</h2>
        <p className="text-gray-500 mb-12">Get started in 3 simple steps</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsData.map((s) => (
            <div key={s.step} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition text-center">
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="text-violet-600 font-black text-sm mb-1">{s.step}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Steps
