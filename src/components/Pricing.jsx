const plansData = [
  {
    name: "Starter",
    price: "$0",
    period: "Free forever",
    features: ["2 tools access", "Basic templates", "Community support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    features: ["All 8 tools", "Premium templates", "Priority support", "AI features"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    features: ["Team accounts", "Custom branding", "Dedicated support", "API access"],
    highlight: false,
  },
]

const Pricing = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Simple Pricing</h2>
        <p className="text-gray-500 mb-12">No hidden fees. Cancel anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansData.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-violet-700 text-white shadow-xl scale-105"
                  : "bg-gray-50 text-gray-900"
              }`}
            >
              <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <div className={`text-4xl font-extrabold mb-1 ${plan.highlight ? "text-yellow-300" : "text-violet-700"}`}>
                {plan.price}
              </div>
              <div className={`text-sm mb-6 ${plan.highlight ? "text-purple-200" : "text-gray-500"}`}>
                {plan.period}
              </div>

              <ul className="space-y-2 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${plan.highlight ? "text-purple-100" : "text-gray-600"}`}>
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-2.5 rounded-xl font-bold transition ${
                plan.highlight
                  ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                  : "bg-violet-600 text-white hover:bg-violet-700"
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing
