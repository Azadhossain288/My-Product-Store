const footerColumns = [
  { title: "Product", links: ["Features", "Pricing", "Changelog"] },
  { title: "Company", links: ["About", "Blog", "Careers"] },
  { title: "Support", links: ["Help Center", "Contact", "Privacy"] },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🛍️</span>
            <span className="font-extrabold text-white text-lg">MyProductStore</span>
          </div>
          <p className="text-sm">Your all-in-one career toolkit for modern professionals.</p>
        </div>

        {/* Link Columns */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-bold mb-3">{col.title}</h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((link) => (
                <li key={link} className="hover:text-white cursor-pointer transition">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
        © 2025 MyProductStore. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
