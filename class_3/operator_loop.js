let num1 = 10;
let num2 = 10;
let num3 = '10';
// console.log(num1 == num2);
// console.log(num1 == num3);//checks value
// console.log(num1 === num3);//checks value and type


let num4 = 10;
let num5 = 5;
let num6 = '5'
// console.log(num4 > num5);
// console.log(num4 > num6);

let age = 24;
let city = 'Cumilla';
// console.log(age > 18 && city == 'Dhaka');


let num7 = 123;
let num8 = 140;
// console.log(num7 != num8);


//ternary operator
let age1 = 24;
let greet = age1 > 18 ? 'Welcome' : 'Get out';
// console.log(greet);


//loops
let i;
for (i = 1; i <= 10; i++){
    // console.log(i);
}
// console.log('i: ' +i);

let j = 1;
while (j<=10) {
    // console.log(j);
    j++;
}

let names = ['Mustakin', 'Mahi', 'Sharmin'];
// for (let x = 0; x < names.length; x++){
//     console.log(names[x]);
    
// }
names.forEach((el) => {
    // console.log(el);
    
})

for (let y = 1; y <= 10; y++){
    if(y==5)break;
    // console.log(y);
    
}

for (let z = 1; z <= 10; z++){
    console.log(z);
    if (z == 5) continue;
    
}