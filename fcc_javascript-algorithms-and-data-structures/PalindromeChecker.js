function palindrome(str) {
  let arr = str.toLowerCase().match(/[^\W_]/g);
  for(let i=0; i<arr.length/2; i++){
    if(arr[i] != arr[arr.length-1-i]) return false
  }
  return true;
}

palindrome("A man, a plan, a canal. _Panama"); // returns true
