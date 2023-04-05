let shoppinglist = [
    'pop tarts',
    'ramen noodles',
    'chips',
    'salsa',
    'coffee'];


console.log(shoppinglist);

//Add 'fruit loops' to the list.
shoppinglist.push('fruit loops')
console.log(shoppinglist);


//Update 'coffee' to 'fair trade coffee'
shoppinglist[4]='fair trade coffee'
console.log(shoppinglist);

//Replace 'chips' and 'salsa' with 'rice' and 'beans'
shoppinglist.splice(2, 2, 'rice', 'beans')
console.log(shoppinglist);

//Create an empty array to represent your shopping cart.
let cart = ['']

console.log(cart);

//Remove the last item from your shopping list and add it to your cart
cart.push(shoppinglist.pop()) 
console.log(cart);

//Remove the first item from your shopping list and add it to the cart
cart.push(shoppinglist.shift())
console.log(cart);

//Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.
while(shoppinglist.length>0) {
    let shoppinglistitem=shoppinglist.pop()
cart.push(shoppinglistitem)
}
console.log('cart:' + cart)
console.log('shoppinglist:' + shoppinglist)

//Sort the items in your cart alphabetically... and then backwards & Print the list of items in your shopping cart to the console as comma separated string.
cart.sort(). reverse(). join(',');
console.log(cart)






