// let i = 1;
// while (i <= 10) {
//     if(i%2==0)
//     {
//         console.log('Even');
//     }
//     else
//     {
//         console.log('Odd');
//     }
//     i++;
// }

let age = Number(prompt("Enter your age")) ;

while (age < 18) {
    age = Number(prompt("You are not eligible to enter the site")) ;
}
if (age >= 18)
{
    alert('Welcome to Porn Hub')
}