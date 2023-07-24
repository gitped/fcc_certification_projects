function telephoneCheck(str) {
  // check for incorrect characters
  if(/[^0-9 ()-]/.test(str)) return false

  // check for incorrect digit length
  let digits = str.match(/\d/g);
  if(digits.length!=10 && digits.length!=11) return false;

  // checks that 1st digit is "1" if length is 11
  if (digits.length==11 && str[0]!="1") return false;

  // check for existing paranthesis pair with only 3 digits inside, if any
  if (/\(|\)/.test(str) && !/\(\d{3}\)/.test(str)) return false

  // check for a max of two dash symbols, if any
  if(str.match(/-/g)?.length > 2) return false


  return true;
}

console.log(
  telephoneCheck("1 555 555 5555")
);
