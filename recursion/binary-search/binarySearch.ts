/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {
  return false;
}

export { binarySearch };


// Non-recursive binary search

function nonRecBinarySearch(arr: number[], item: number, left = 0, right = arr.length): boolean {
  let low = left;
  let high = arr[right - 1];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(mid);
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

const myList = [1, 3, 5, 7, 9];

console.log(nonRecBinarySearch(myList, 1)); // true
console.log(nonRecBinarySearch(myList, 2)); // false
console.log(nonRecBinarySearch(myList, 6)); // false
console.log(nonRecBinarySearch(myList, 9)); // true