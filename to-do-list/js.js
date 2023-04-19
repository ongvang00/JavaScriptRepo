//When the button is clicked: The text from the input box is used to add a list item to the bottom of the list
//The text from the input box is cleared out.
const addToListbtn = document.getElementById("addToListbtn");
const toDoList = document.querySelector(".shoppingList");
const inputText = document.querySelector(".inputText");

function addNewItem() {
  const newItem = document.createElement("li");
  const newLabel = document.createElement("label");
  newLabel.textContent = inputText.value;
  newItem.appendChild(newLabel);
  toDoList.appendChild(newItem);
  inputText.value = "";
}

addToListbtn.addEventListener("click", addNewItem);

//When the user clicks on a list item, it is removed

function removeItem(event) {
    event.target.remove();
  }
  toDoList.addEventListener('click', removeItem);


