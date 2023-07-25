function checkCashRegister(price, cash, cid) {
  // all register values in cents (integers) to avoid potential issues with floating-point precision
  const toCents = (dollar) => dollar*100;
  const toDollars = (cents) => cents/100;
  const register = [
    {currency: "ONE HUNDRED", amount: 10000, cid: toCents(cid[8][1])},
    {currency: "TWENTY", amount: 2000, cid: toCents(cid[7][1])},
    {currency: "TEN", amount: 1000, cid: toCents(cid[6][1])},
    {currency: "FIVE", amount: 500, cid: toCents(cid[5][1])},
    {currency: "ONE", amount: 100, cid: toCents(cid[4][1])},
    {currency: "QUARTER", amount: 25, cid: toCents(cid[3][1])},
    {currency: "DIME", amount: 10, cid: toCents(cid[2][1])},
    {currency: "NICKEL", amount: 5, cid: toCents(cid[1][1])},
    {currency: "PENNY", amount: 1, cid: toCents(cid[0][1])}
  ];

  // calculates the total CID (cash-in-drawer) and the change needed
  const totalCID = cid.reduce((total, currency) => total+toCents(currency[1]), 0);
  let changeDue = toCents(cash)-toCents(price);
  let changeCounted = [];

  // counts the change owed with respect to the CID for each currency
  for(let currency of register){
    if(currency.amount <= changeDue){
      let currencyCount=0;
      while(changeDue>0 && currency.cid>0 && currency.amount<=changeDue){
        currency.cid -= currency.amount;
        changeDue = (changeDue - currency.amount);
        currencyCount += currency.amount;
      }
      changeCounted.push([currency.currency, toDollars(currencyCount)]);
    }
  }

  // checks whether the change counted was sufficient, insufficient, or emptied out the drawer
  return changeDue > 0 
  ? { status: "INSUFFICIENT_FUNDS", change: [] }
  : (changeDue==0 && totalCID==toCents(cash) - toCents(price)) 
  ? { status: "CLOSED", change: cid }
  : { status: "OPEN", change: changeCounted };
}

console.log(
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);

