import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Components
import Navbar   from "./components/Navbar"
import Banner   from "./components/Banner"
import Stats    from "./components/Stats"
import Products from "./components/Products"
import Cart     from "./components/Cart"
import Steps    from "./components/Steps"
import Pricing  from "./components/Pricing"
import Footer   from "./components/Footer"

// Data
import products from "./data/products.js"

function App() {
  const [cart, setCart]           = useState([])
  const [addedIds, setAddedIds]   = useState([])
  const [activeTab, setActiveTab] = useState("products")

  // Add to Cart
  const handleAddToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      toast.info(`${product.name} is already in your cart!`)
      return
    }
    setCart([...cart, product])
    setAddedIds([...addedIds, product.id])
    toast.success(`🛒 ${product.name} added to cart!`)
  }

  // Remove from Cart
  const handleRemove = (id) => {
    const item = cart.find((p) => p.id === id)
    setCart(cart.filter((p) => p.id !== id))
    setAddedIds(addedIds.filter((aid) => aid !== id))
    toast.error(` ${item?.name} removed from cart`)
  }

  // Checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warn("Your cart is empty!")
      return
    }
    setCart([])
    setAddedIds([])
    toast.success(" Checkout successful! Cart cleared.")
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      <ToastContainer autoClose={2500} position="top-right" />

      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      {/* Toggle Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-1 flex gap-1 shadow-sm">
              <button
                onClick={() => setActiveTab("products")}
                className={`px-8 py-2.5 rounded-xl font-bold text-sm transition ${
                  activeTab === "products"
                    ? "bg-violet-600 text-white shadow"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                🛍️ Products
              </button>
              <button
                onClick={() => setActiveTab("cart")}
                className={`px-8 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 ${
                  activeTab === "cart"
                    ? "bg-violet-600 text-white shadow"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                🛒 Cart
                {cart.length > 0 && (
                  <span className="bg-yellow-400 text-gray-900 text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Products Tab */}
          {activeTab === "products" && (
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              addedIds={addedIds}
            />
          )}

          {/* Cart Tab */}
          {activeTab === "cart" && (
            <Cart
              cart={cart}
              onRemove={handleRemove}
              onCheckout={handleCheckout}
              onBrowse={() => setActiveTab("products")}
            />
          )}

        </div>
      </section>

      <Steps />
      <Pricing />
      <Footer />

    </div>
  )
}

export default App
