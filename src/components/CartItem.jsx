const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">

      {/* Icon + Name + Price */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">{item.icon}</span>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
          <p className="text-violet-600 font-bold text-sm">${item.price}</p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-400 hover:text-red-600 font-bold text-sm border border-red-200 hover:border-red-400 rounded-lg px-3 py-1 transition"
      >
        Remove
      </button>

    </div>
  )
}

export default CartItem
