

function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFood, family){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFood = favoriteFood;

}
// Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
Person.prototype.fullname = function () {
    console.log("Full Name: " + this.firstName + " " + this.lastName );
}; 


//Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
Person.prototype.toString = function () {
    console.log(this.firstName,  this.lastName + ', Favorite Color: ' + this.favoriteColor, ', Favorite Number: ' + this.favoriteNumber )
}


//Add a property on the Person object called family which is an empty array.
Person.prototype.family = [];


// Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family 
//array. To make sure that the object you are adding is an object constructed from the Person constructor - 
//take a look at the instanceofoperator. Make sure that your family array does not include duplicates! 
//This method should return the length of the family array.
Person.prototype.addToFamily = function (familyMember) { 
    if (familyMember instanceof Person && !this.family.includes(familyMember))
    {
        this.family.push(familyMember) }
    
        return this.family.length

}

const Molly = new Person ('Molly', 'Smith', 'Green', '7', ['noodles', 'chicken'])
const Sarah = new Person ('Sarah', 'Smith', 'blue', '9', 'pizza')

Molly.addToFamily(Molly)
Sarah.addToFamily(Sarah)
console.log ("family array:",  Molly.family)
console.log (Molly.addToFamily())

