
//Update the 'Apples' item to say 'Granny Smith Apples'


const cartList = document.getElementById('list').children;
cartList[1].innerHTML = "Granny Smith Apples";


//Remove 'Oat Milk' from the list

cartList[3].remove();

//Add an item 'Kombucha'
const newLI = document.createElement('li');
newLI.innerHTML = "Kombucha";

const list = document.querySelector('ul');
list.appendChild(newLI);

//Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']

const newList = ['protein bars', 'almonds', 'peanut butter'];
list.innerHTML = '';
newList.map(item => {
  let newlist1 = document.createElement('li');
  newlist1.innerHTML = item;
  list.append(newlist1);
});

//Add the class 'important' to the almonds item.

cartlist[1].className= "important"