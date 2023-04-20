//Create an array of user objects called users. Each user object should have an id, name, and email property.
const users = 
[{
    id: '1',
    name: 'molly',
    email: 'molly@gmail.com',
},
{
    id: '2',
    name: 'nick',
    email: 'nick@gmail.com',
},
{
    id: '3',
    name: 'jack',
    email: 'jack@gmail.com',
}]

//Implement a function called fetchUserById that accepts a user ID as an argument and returns a promise
// //The promise should resolve with the user object if the user with the given ID exists in the users array. 
// //Otherwise, it should reject with an error message. 
// //Simulate an asynchronous request by using setTimeout() to delay the resolution or rejection of the promise by 1 second.

function fetchUserById(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId == users.id) {
          resolve("ID Match");
        } else {
          reject("Error- ID not found");
        }
      }, 1000);
    });
  }

  console.log("Starting fetch");

fetchUserById(1)
.then((message) => {
    console.log ("resolved:", message);
})
.catch((message) => {
    console.log("reject:", message);
});

console.log("Fetch Initiated");
//Use the fetchUserById function to fetch the user with ID 1. Log the user object if the promise is fulfilled and the error message if the promise is rejected.


//Next, chain another fetchUserById call to fetch the user with ID 2. Log the user object if the promise is fulfilled and the error message if the promise is rejected.