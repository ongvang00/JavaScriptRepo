//Create an array of user objects called users. Each user object should have an id, name, and email property.
const users = 
[{
    id: 1,
    name: 'molly',
    email: 'molly@gmail.com',
},
{
    id: 2,
    name: 'nick',
    email: 'nick@gmail.com',
},
{
    id: 3,
    name: 'jack',
    email: 'jack@gmail.com',
}]

//Implement a function called fetchUserById that accepts a user ID as an argument and returns a promise
// //The promise should resolve with the user object if the user with the given ID exists in the users array. 
// //Otherwise, it should reject with an error message. 
// //Simulate an asynchronous request by using setTimeout() to delay the resolution or rejection of the promise by 1 second.

function fetchUserById(userID) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const user = users.find(function(user) {
          return user.id === userID;});
        if (user) {
          resolve(user)
        } else {
          reject("Error- User ID: " + userID + " not found.");
        }
      }, 1000);
    });
  }

  console.log("Starting fetch");
//Use the fetchUserById function to fetch the user with ID 1. Log the user object if the promise is fulfilled and the error message if the promise is rejected
fetchUserById(1)
    .then((user) => {
      console.log("User Found: ", user);
    })
    .catch((error) => {
      console.log(error);
    });
    console.log("Fetch Initiated");
//Next, chain another fetchUserById call to fetch the user with ID 2. Log the user object if the promise is fulfilled and the error message if the promise is rejected.

fetchUserById(2)
    .then(function(user) {
      console.log("User Found: ", user);
    })
    .catch(function(error) {
      console.log(error);
    });