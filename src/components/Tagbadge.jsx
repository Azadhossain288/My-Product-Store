const TagBadge = ({ tagType, tag }) => {
  const styles = {
    popular:    "bg-violet-100 text-violet-700 border border-violet-300",
    new:        "bg-emerald-100 text-emerald-700 border border-emerald-300",
    bestseller: "bg-amber-100 text-amber-700 border border-amber-300",
  }

  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles[tagType] || "bg-gray-100 text-gray-600"}`}>
      {tag}
    </span>
  )
}

export default TagBadge
