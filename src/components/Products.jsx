import ProductCard from "./ProductCard"

const Products = ({ products, onAddToCart, addedIds }) => {
  return (
    <div>

      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900">Our Products</h2>
        <p className="text-gray-500 mt-2">Choose the right tools for your journey</p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            addedIds={addedIds}
          />
        ))}
      </div>

    </div>
  )
}

export default Products
