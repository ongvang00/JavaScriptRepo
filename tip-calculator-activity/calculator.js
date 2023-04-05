//Create a variable that holds the total amount of the bill (before the tip).

let billAmount=200

//Create a function named 'calculateTip' ( It should multiply the bill variable by 20% of the total and return that value)
function calculateTip(billAmount){
    return billAmount * .20;
}
console.log(calculateTip(billAmount))

//Create another function called 'getBillTotal' and it should do the following things:
//- Take any amount as an argument
//- call the 'calculateTip' function
//- return the amount + the tip amount


function getBillTotal(billAmount){
    let tipAmount=calculateTip(billAmount);
    return billAmount + tipAmount;
}

let totalbill = getBillTotal(billAmount)

console.log(totalbill)

