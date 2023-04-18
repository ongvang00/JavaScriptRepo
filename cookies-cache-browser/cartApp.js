//Create a function called initializeCart that checks if there's a cart in localStorage;
function initializeCart(){
    if (localStorage.getItem('cart') = null) {; 
        // if not, it initializes an empty cart and stores it in localStorage.
    localStorage.setItem ('cart', JSON.stringify([]));
    }

}

//Create a function called addItem that takes an item object as a parameter, 
 function addItem(item) {
//retrieves the cart from localStorage,
    const cart = JSON.parse (localStorage.getItem('cart'));
// adds the item to the cart, 
    cart.push(item);
//and then stores the updated cart back into localStorage.
    localStorage.setItem('cart', JSON.stringify(cart)); 
 }

//Create a function called removeItem that takes an item id as a parameter, 
function removeItem(id){
// retrieves the cart from localStorage,
    const cart = JSON.parse (localStorage.getItem('cart'));
//removes the item with the given id from the cart, 
    const newCart = cart.filter(item => item.id !== id);
//and then stores the updated cart back into localStorage.
    localStorage.setItem('cart', JSON.stringify(cart)); 
}

//Create a function called displayCart that retrieves the cart from localStorage and 
function displayCart(){
    const cart = JSON.parse (localStorage.getItem('cart'));
//logs the cart contents to the console.
    console.log(cart)
}

//Create event listeners for the add item form 
const addItemForm= document.getElementById('addItemForm');
addItemForm.addEventListener
    ('submit', function(event){
        event.preventDefault();
        const itemName = document.getElementById('itemName').value;
        const itemPrice = parseFloat(document.getElementById('itemPrice').value);
        const itemId = new Date().getTime();
        addItem({ id:itemId, name:itemName, price: itemPrice }); 
    });
 

//and display cart button to call the respective functions.
const displayCartButton = document.getElementById('displayCartButton');
displayCartButton.addEventListener('click', displayCart);
initializeCart();