/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {
  // Base cases
  // Num length is empty, return -1
  if(arr.length === 0) return -1;
  // Num[0] equals val, return array.length -1
  if(arr[0] === val) return 0;
  // Return arr.length - findIndex(arr.slice(1), val)
  // Up or down?
  // Up pass value forward, action before recursion
  let index = findIndex(arr.slice(1), val)
  // Down get value coming back, action after recursion
  if(index === -1) return index;
  else {
    return index + 1;
  }
}

export { findIndex };



// [3], 3 return 0
// [2,3], 3 return 0+1
// [1, 2, 3], 3 return 1+1

