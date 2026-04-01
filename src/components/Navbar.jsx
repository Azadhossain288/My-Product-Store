const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl"></span>
          <span className="font-extrabold text-xl tracking-tight text-gray-900">
            <span className="text-violet-600">DigiTools</span>
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li className="hover:text-violet-600 cursor-pointer transition">Products</li>
          <li className="hover:text-violet-600 cursor-pointer transition">Features</li>
          <li className="hover:text-violet-600 cursor-pointer transition">Pricing</li>
          <li className="hover:text-violet-600 cursor-pointer transition">Testimonials</li>
          

        </ul>

        {/* Right Side: Cart + Login + Get Started */}
        <div className="flex items-center gap-3">

          {/* Cart Icon */}
          <div className="relative cursor-pointer mr-1">
            <span className="text-2xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login Button */}
          <button className="text-sm font-semibold text-gray-700 hover:text-violet-600 px-4 py-2 rounded-xl transition">
            Login
          </button>

          {/* Get Started Button */}
          <button className="text-sm font-bold bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-xl transition shadow">
            Get Started
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
