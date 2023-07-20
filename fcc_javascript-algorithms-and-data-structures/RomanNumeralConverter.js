function step(x){
  const romanNumerals = [
    {value: 1000, numeral: "M"},
    {value: 900, numeral: "CM"},
    {value: 500, numeral: "D"},
    {value: 400, numeral: "CD"},
    {value: 100, numeral: "C"},
    {value: 90, numeral: "XC"},
    {value: 50, numeral: "L"},
    {value: 40, numeral: "XL"},
    {value: 10, numeral: "X"},
    {value: 9, numeral: "IX"},
    {value: 5, numeral: "V"},
    {value: 4, numeral: "IV"},
    {value: 1, numeral: "I"},
  ];
  for(let obj of romanNumerals){
    if(x >= obj.value) return [obj.value, obj.numeral];
  }
}

function convertToRoman(num) {
  let x = num;
  let str = "";
  while(x>0){
    let newX, newStr;
    [newX, newStr] = step(x);
    x -= newX;
    str += newStr;
  }

 return str;
}

console.log(convertToRoman(36));
