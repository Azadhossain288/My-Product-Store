const plansData = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    btnLabel: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: "$29",
    period: "/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    btnLabel: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: "$99",
    period: "/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    btnLabel: "Contact Sales",
    highlight: false,
  },
]

const Pricing = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plansData.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-gradient-to-b from-violet-600 to-purple-700 text-white border-transparent shadow-2xl"
                  : "bg-white text-gray-900 border-gray-200 shadow-sm"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div>
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? "text-purple-200" : "text-gray-500"}`}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span className={`text-5xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-medium ${plan.highlight ? "text-purple-200" : "text-gray-500"}`}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-green-300" : "text-violet-600"}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? "text-purple-100" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition ${
                  plan.highlight
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                {plan.btnLabel}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing
