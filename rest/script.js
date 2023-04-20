
//Get all posts 

const displayData = document.getElementById("data");
const getAllPostBTN = document.getElementById("getAllPost")
const loadAllData = (allData) => {
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((responseJson) => {
        for (let { body } of responseJson) {
            console.log (body);
            const dataBody = document.createElement('p');
            dataBody.innerText = body;
            displayData.append(dataBody);
        }
    })
}
    getAllPostBTN.addEventListener('click', () => {
            loadAllData();

    })


// Get post with id of 10

const ID10BTN = document.getElementById("id10")
const loadId10Data = (id10Data) => {
fetch('https://jsonplaceholder.typicode.com/posts?id=10')
    .then(response => response.json())
    .then((responseJson) => {
        for (let { body } of responseJson) {
            console.log (body);
            const dataBody = document.createElement('p');
            dataBody.innerText = body;
            displayData.append(dataBody);
        }
    })
}
    ID10BTN.addEventListener('click', () => {
            loadId10Data();

    })

//Create a new post and log the id generated for it by the server


const newPost = (newdata) => {
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Please work',
    body: 'is it working yet?',
    userId: 123,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
const createNewBTN = document.getElementById("createNew")

createNewBTN.addEventListener('click', () => {
    newPost();
})

//Replace the post with id of 12 and render the responseJSON