  ////////////////////////////////////////////////////////////
 /////////   Code that distracted me in class lol   /////////
////////////////////////////////////////////////////////////

const person = {
    firstName: "Coby",
    lastName: "Johnson",
    favColor: "Violet",
    favCodingLang: "Rust",
    knowledge: [
        {
            name: "Rust",
            level: "Adept"
        },
        {
            name: "JavaScript",
            level: "Adept"
        },
        {
            name: "Python",
            level: "Adept"
        }
    ]
};

const printEntries = (obj) => {
    let build = ""
    
    const inner = (obj)=>{
        Object.entries(obj).forEach(([key, value])=>{
            if (Array.isArray(value)) {
                value.forEach(inner);
            } else if (value instanceof Object) {
                inner(value);
            } else {
                // console.log(`${key}: ${value}`);
                build += `${key}: ${value}\n`;
            }
        })
    }
    inner(obj);
    return build;
}

console.log(printEntries(person));

const iota = (()=>{
    let index = 0;
    return ()=> index++;
})();

console.log( iota() ); // 0
console.log( iota() ); // 1
console.log( iota() ); // 2