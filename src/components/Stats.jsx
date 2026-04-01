const statsData = [
  { value: "50K+", label: "Happy Users" },
  { value: "8",    label: "Premium Tools" },
  { value: "98%",  label: "Satisfaction Rate" },
  { value: "24/7", label: "Support" },
]

const Stats = () => {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat) => (
          <div key={stat.label} className="p-6 rounded-2xl bg-violet-50 hover:shadow-md transition">
            <div className="text-3xl font-extrabold text-violet-700">{stat.value}</div>
            <div className="text-gray-500 text-sm mt-1 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
