function Person(name,age) {
    (this.name = name),
        (this.age = age),
        (this.Hello = function () {
            console.log('Hello ' + this.name);
        
        });
        
    }
let person1 = new Person('Mahi', 25);
let person2 = new Person('Sharmin', 24);

console.log(person1);
console.log(person2);
