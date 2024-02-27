import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  // base case -> words: is null?
  if (!words) return 0;

  const currWordLength = words.val.length;
  return Math.max(currWordLength, longest(words.next));
}

export { longest };
