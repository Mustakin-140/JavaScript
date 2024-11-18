// let person1 = {
//     name: 'Mahi',
//     id: 140,
//     Hello() {
//         console.log('Hello ' + '' + this.name);
        
//     },
// };

// person1.Hello();

// let person2 = {
//     name: 'Sharmin',
//     id: 123,
//     Hello() {
//         console.log('Hello ' + '' + this.name);
        
//     },
// };

// person1.Hello();


function createPerson(name, age) {
    return {
        name,
        age,
        Hello() {
            console.log('Hello '+this.name);
            
        }
    }
}

let person1 = createPerson('Mahi', 25);
let person2 = createPerson('Sharmin', 24);
console.log(person1);
console.log(person2);

