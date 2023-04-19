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
let fetchUserById = new Promise ((resolve,reject) => {
    setTimeout(() => {
//The promise should resolve with the user object if the user with the given ID exists in the users array. 
        let id = " "
            if (id === users.id){
                resolve("Match")
//Otherwise, it should reject with an error message. 
            } else {
                reject("Not Found")
            }
//Simulate an asynchronous request by using setTimeout() to delay the resolution or rejection of the promise by 1 second.
    }, 1000)
})

//Use the fetchUserById function to fetch the user with ID 1. Log the user object if the promise is fulfilled and the error message if the promise is rejected.
fetchUserById.then((message)=>{
    console.log ("resolved:", message);
});
.catch ((message) => {
    console.log("reject:", message);
});

