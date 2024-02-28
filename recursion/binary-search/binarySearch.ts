/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(
  arr: number[],
  val: number,
  left = 0,
  right = arr.length): boolean {
  const middleIndex = Math.floor((left + right) / 2);

  // base case(s):
  // if arr[mid] === val -> true
  if (arr[middleIndex] === val) return true;
  // if left > right -> false
  if (left > right) return false;
  // if arr[mid] > val -> binarySearch(arr, val, left, right= mid - 1)
  if (arr[middleIndex] > val) {
    return binarySearch(arr, val, left, right = middleIndex - 1);
  } else {
    // if arr[mid] < val -> binarySearch(arr, val, left= mid + 1, right)
    return binarySearch(arr, val, left = middleIndex + 1, right);
  }
}

export { binarySearch };

// console.log(binarySearch([1, 2, 3, 4], 4));

// console.log(binarySearch([], 0)); // false
// console.log(binarySearch([1, 2, 3, 4], 0)); // false
// console.log(binarySearch([1, 2, 3, 4], 11)); // false
// Non-recursive binary search

function nonRecBinarySearch(
  arr: number[],
  item: number,
  left = 0,
  right = arr.length): boolean {
  let low = left;
  let high = right;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    console.log(guess);

    if (guess === item) {
      return true;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
}

// const myList = [1, 3, 5, 7, 9];

// console.log(nonRecBinarySearch(myList, 1)); // true
// console.log(nonRecBinarySearch(myList, 2)); // false
// console.log(nonRecBinarySearch(myList, 6)); // false
// console.log(nonRecBinarySearch(myList, 9)); // true