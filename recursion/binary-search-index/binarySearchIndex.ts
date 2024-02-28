/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(
  arr: number[],
  val: number,
  left = 0,
  right = arr.length): number {
  const middleIdx = Math.floor((left + right) / 2);


  // if arr[mid] === val -> mid
  if (arr[middleIdx] === val) return middleIdx;
  // if left > right -> false
  if (left > right) return -1;
  // if arr[mid] > val -> binarySearch(arr, val, left, right= mid - 1)
  if (arr[middleIdx] > val) {
    return binarySearchIndex(arr, val, left, right = middleIdx - 1);
  } else {
    // if arr[mid] < val -> binarySearch(arr, val, left= mid + 1, right)
    return binarySearchIndex(arr, val, left = middleIdx + 1, right);
  }
}

export { binarySearchIndex };

// Non-recursive binary search

function nonRecBinarySearchIndex(
  arr: number[],
  item: number,
  left = 0,
  right = arr.length): number {
  let low = left;
  let high = right;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    console.log(guess);

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}