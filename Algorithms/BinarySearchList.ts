export default function bs_list(haystack: number[], needle: number): boolean {

  let high = haystack.length
  let low = 0

  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2)
    if (needle === haystack[mid]) {
      return true
    } else if (needle > haystack[mid]) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return false

}