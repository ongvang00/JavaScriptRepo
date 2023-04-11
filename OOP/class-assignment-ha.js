class Job { //Create a class of `Job` with the following properties:
    constructor(name, industry, degree, field, salary) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = degree;
        this.field = field;
        this.salary = salary; //any other relevant properties (get creative!)
    }
//The following methods: getName & getFieldAndIndustry
    getName() {
        return "Job Name:" + this.name
    }

    getFieldAndIndustry () {
        return "Job Field:" + this.field + " " + "Job Industry:"+ this.industry
    }
}




//You must also extend the class into something of your choice. It must be relevant and make sense as the properties will have to be unique enough.
class softwareEngineer extends Job {
    getName(){
        super.getName();
        console.log ("Job Name: Software Engineer")
    }
    getFieldAndIndustry (){
        super.getFieldAndIndustry();
        console.log ("Field/Industry: Computer Science");
    }
}

//create three different instances of the Job class
//console log any 2 methods for each instance of the class


const nurse = new Job ('Pediatric Nurse', 'Medical', 'BSN', 'Medical', '70000');
console.log (nurse.getFieldAndIndustry());
console. log (nurse.getName ())

const teacher = new Job ('Highschool Teacher', 'Education', 'BA', 'Education', '50000');
console.log (teacher.getFieldAndIndustry ());
console.log (teacher.getName())

const assembler = new Job ('Sandwich Assembler', 'Manufacture', 'diploma', 'Manufacture', '20000');
console.log(assembler.getName());
console.log (assembler.getFieldAndIndustry());



//create an instance of the extended class
const softwareEngineer1 = new softwareEngineer ();

//console log 2 new methods from the extended class
softwareEngineer1.getName();
softwareEngineer1.getFieldAndIndustry();