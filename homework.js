//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        otherwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

String.prototype.times = function(num) {
    return Array(num).fill(this).join('');
}

const allStrings = (object)=>{
    let build = ""
    const inner = (arg, tabs=0)=>{
        if (Array.isArray(arg)) {
            arg.forEach(val=> inner(val, tabs));
        } else if (arg instanceof Object) {
            Object.entries(arg).forEach(([key, val]) => {
                build += `${'\t'.times(tabs)}${key}\n`;
                inner(val, tabs+1);
            });
        } else {
            build += `${'\t'.times(tabs)}${arg}\n`;
        }
    }
    inner(object);
    return build;
}

console.log(allStrings(person3));


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
const Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    this.addAge = (inc=1) => {
        this.age += inc;
    }
}

const jen = new Person("Jen", 30);
const mike = new Person("Mike", 24);

jen.printInfo();

mike.printInfo();
mike.addAge(3);
mike.printInfo();


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

async function checkLength(str) {
    const promise = new Promise((ok, err)=>{
        if (str.length >= 10) {
            ok("Big word");
        } else {
            err("Small word");
        }
    });
    promise
        .then((val)=>{
            console.log(val);
        })
        .catch((err)=>{
            console.log(err);
        });
    return promise;
}

await checkLength("Hello, World!");
await checkLength("Hello?");