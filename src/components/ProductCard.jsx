import TagBadge from "./TagBadge"

const ProductCard = ({ product, onAddToCart, addedIds =[] }) => {
  const isAdded = addedIds.includes(product.id)

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4">

      {/* Top: Icon + Tag */}
      <div className="flex items-start justify-between">
        <span className="text-4xl">{product.icon}</span>
        <TagBadge tagType={product.tagType} tag={product.tag} />
      </div>

      {/* Name + Description */}
      <div>
        <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{product.description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-1">
        {product.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-violet-500">✓</span> {f}
          </li>
        ))}
      </ul>

      {/* Price + Button */}
      <div className="mt-auto">
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
          <span className="text-gray-400 text-sm">/{product.period}</span>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className={`w-full py-2.5 rounded-xl font-bold text-sm transition ${
            isAdded
              ? "bg-emerald-500 text-white cursor-default"
              : "bg-violet-600 hover:bg-violet-700 text-white"
          }`}
        >
          {isAdded ? "✓ Added to Cart" : "Buy Now"}
        </button>
      </div>

    </div>
  )
}

export default ProductCard
