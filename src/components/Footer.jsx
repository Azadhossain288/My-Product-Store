const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            
            <span className="font-extrabold text-white text-lg">DigiTools</span>
          </div>
          <p className="text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            {["Features", "Pricing", "Templates", "Integrations"].map((l) => (
              <li key={l} className="hover:text-white cursor-pointer transition">{l}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {["About", "Blog", "Careers", "Press"].map((l) => (
              <li key={l} className="hover:text-white cursor-pointer transition">{l}</li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            {["Documentation", "Help Center", "Community", "Contact"].map((l) => (
              <li key={l} className="hover:text-white cursor-pointer transition">{l}</li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Social Links</h4>
          <div className="flex items-center gap-3">
            {/* YouTube */}
            <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center transition">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center transition">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-violet-600 rounded-full flex items-center justify-center transition">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <span>© 2025 MyProductStore. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition">Cookies</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer
