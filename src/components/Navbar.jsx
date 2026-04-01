const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛍️</span>
          <span className="font-extrabold text-xl tracking-tight text-gray-900">
            My<span className="text-violet-600">Product</span>Store
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li className="hover:text-violet-600 cursor-pointer transition">Home</li>
          <li className="hover:text-violet-600 cursor-pointer transition">Products</li>
          <li className="hover:text-violet-600 cursor-pointer transition">Pricing</li>
          <li className="hover:text-violet-600 cursor-pointer transition">Contact</li>
        </ul>

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <span className="text-2xl">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Navbar
