// Question
// https://leetcode.com/problems/reverse-string

function reverseString(s: string[]): void {
  const length = s.length;
  const halflength = Math.floor(length / 2);

  for (let i = 0; i < halflength; i++) {
    const temp = s[i];
    s[i] = s[length - 1 - i];
    s[length - 1 - i] = temp;
  }
}

reverseString(["h", "e", "l", "l", "o"]);
