/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {
  // Base case empty string, return ""?
  if(str.length === 0) return "";

  return str[str.length-1] + revString(str.slice(0, str.length-1))
}

export { revString };
