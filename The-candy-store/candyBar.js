let candyBarSize = "jumbo";
let candyBarName = "Hershey";


if (candyBarSize ==="small") {
    console.log("This", candyBarName, "costs $1.00");
}

else if (candyBarSize === "medium") {
    console.log("This", candyBarName, "costs $1.75");
}
else if (candyBarSize === "large") {
    console.log("This", candyBarName, "costs $2.50");
}
else if (candyBarSize === "jumbo") {
    console.log("This", candyBarName, "costs $4.75");
}
else {
    console.log ("Please ask associate to look up the price and check if it's valid");
}

