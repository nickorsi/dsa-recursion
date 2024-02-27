/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {
  // base case -> arr is empty or val is found
  if (arr.length === 0) return false;
  if (arr[0] === val) return true;

  return find(arr.slice(1), val);
}

export { find };