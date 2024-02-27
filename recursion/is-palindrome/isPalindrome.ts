/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  // base case(s)
  // get to center so str.length === 1 -> TRUE
  if (str.length < 2) return true;
  // the first value and last value are not equal -> FALSE
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, str.length - 1));
}

export { isPalindrome };