
//Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
//Log the values of a and b in the inner function.
function outer(){
    let a = "Hello"
    let b = {fname: "kyle"}
    console.log (a, b)
//Update the inner function to take two parameters named a and b.
//Pass a and b in as arguments when you execute inner().
    function inner(a,b) {
//Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
        a = "Greetings";
        b = {fname: "nick"};
        console.log (a,b)
//Inside the inner function, update a property of the b object.
        b.fname = "ong";
        console.log (a,b)
    };
    inner (a,b);
    console.log (a,b)
}

outer();