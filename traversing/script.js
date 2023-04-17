//Get the header element

const header = document.getElementsByTagName('header');
console.log (header);

//Get all the section elements

const section = document.getElementsByTagName('section');
console.log(section);

//Get the section element with class="current"

const currentSection = document.querySelector('.current');
console.log(currentSection);

//Get the section that comes after the current section

const nextCurrent = currentSection.nextElementSibling; 
console.log(nextCurrent);

//Get the h2 node from the section before the 'current' section
 const prevSection = currentSection.previousElementSibling.children;
 console.log(prevSection);


//Get the div that contains the section that has an h2 with a class of 'highlight'


const highlight = document.querySelector('h2.highlight');
const div = highlight.parentElement.parentElement;
console.log(div);

//Get all the sections that contain an H2 (using a single statement);
const h2Section = document.querySelectorAll('section:has(h2)');

console.log(h2Section);