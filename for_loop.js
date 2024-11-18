// for (initialization; condition; increment / decrement){
//     code block
// }


// for (let i = 1; i <= 10; i++){
//     console.log(i );
    
// }

//prints odd number
// for (let i = 1; i <= 10; i+=2){
//     console.log(i );
    
// }

//prints even number
// for (let i = 2; i <= 10; i+=2){
//     console.log(i );
    
// }


//reverse
// for (let i = 10; i >= 1; i--){
//     console.log(i);
    
// }


//numbers from 1 to 100 divisible by 7
let count = 0;
for (let i = 7; i <= 100; i++) {
    if (i % 7 == 0) {
        console.log(i);
        count++;
    }
}

console.log("Amount of numbers: " + count);
