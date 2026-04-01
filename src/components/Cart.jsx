import CartItem from "./CartItem"

const Cart = ({ cart, onRemove, onCheckout, onBrowse }) => {
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-2xl mx-auto">

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Your Cart</h2>
        <p className="text-gray-500 mt-1">
          {cart.length} item{cart.length !== 1 ? "s" : ""} selected
        </p>
      </div>

      {/* Empty State */}
      {cart.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="text-sm mt-1">Browse products and add them to your cart</p>
          <button
            onClick={onBrowse}
            className="mt-6 bg-violet-600 hover:bg-violet-700 text-white font-bold px-6 py-2.5 rounded-xl transition"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="space-y-3 mb-6">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onRemove={onRemove} />
            ))}
          </div>

          {/* Total + Checkout */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-medium">
                Total ({cart.length} items)
              </span>
              <span className="text-2xl font-extrabold text-violet-700">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition shadow"
            >
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}

    </div>
  )
}

export default Cart
