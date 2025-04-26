export const formatReview = (value) => {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1).replace(".0", "") + "b"
  }
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1).replace(".0", "") + "m"
  }
  if (value >= 1_000) {
    return (value / 1_000).toFixed(1).replace(".0", "") + "k"
  }
  return value.toString()
}
