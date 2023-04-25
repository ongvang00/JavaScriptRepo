//Create an index.js file and update package.json so that npm start will run it
console.log ('my application just ran');

//Require or import the 'moment' modules in your application.
const moment = require('moment');
const myMoment = new moment

//Use 'moment' to output the timestamp for when the response arrives using the format h:mm:ss a.
var myDate = new Date ();
var timeStamp = moment(myDate).format('h:mm:ss a');
console.log (timeStamp);
