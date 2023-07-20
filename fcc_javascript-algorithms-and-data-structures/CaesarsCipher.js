function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shift = 13;
  let decipher = "";
  for (let i=0; i<str.length; i++){
    let idx, shiftIdx;
    /\w/.test(str[i]) ? (
      idx = alphabet.indexOf(str[i]),
      shiftIdx = (idx+shift) % 26,
      decipher += alphabet[shiftIdx]
    ) : decipher += str[i];
  }
  return decipher;
}

console.log(
rot13("SERR PBQR PNZC")
);
