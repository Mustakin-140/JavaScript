//let dept = ['CSE', 'EEE', 'BBA', 'TE', 'ARCH'];
//console.log(dept);


//dept[0] = 'CS';//update value of an element
// console.log(dept);
// console.log(dept[0]);

//dept[10] = 'English';
// console.log(dept);

// delete dept[4]
// //console.log(dept);

// dept.push('Bangla');//automatically assigns value at the end
// dept.push('Eco')
//     //console.log(dept);


//console.log(dept[dept.length-1]);//get the last value

let naam = 'Mustakin';
//console.log(naam[0]);

//console.log(naam.toUpperCase());



//loops
let dept = ['CSE', 'EEE', 'PHARM', 'TE', 'ARCH'];
let newArr = [];
for (let i = 0; i < dept.length; i++){
    // console.log(dept[i]);
    //dept[i] = 'SSE';
    newArr.push(dept[i] + ' Department');
    
}
//console.log(newArr);

//console.log(dept);

let nums = [1, 2, 3, 4, 5, 6];
let newNums = [];
for (let i = 0; i < nums.length; i++){
    newNums.push(nums[i] * 3);
}
//console.log(newNums);

//2D array
let student = [
    ['Mahi', 140, 'Developer'],//index=0
    ['Sharmin', 123, 'Tester'],//index=1
];

// for (let row = 0; row < student.length; row++){
//     for (let col = 0; col<student[row].length; col++){
//         console.log(student[row][col]);
        
//     }
// }

for (let i = 0; i < student.length; i++){
    for (let j = 0; j < student[i].length; j++){
       // console.log(student[i][j]);
        
    }
}
//console.log(student);
// console.log(student[0][0]);
// console.log(student[1][0]);

// for (let i = 0; i <= 2; i++){
//     for (let j = 0; j <= 2; j++){
//         console.log('i: '+i+ ' j:' +j);
        
//     }
// }

let phone = [
    ['Asus Max Pro', 'Asus', 15000],
    ['Vivo S20', 'Vivo', 12000],
    ['Infinix Hot 12', 'Infinix', 13000],
];

for (let i = 0; i < phone.length; i++){
    for (let j = 0; j < phone[i].length;j++)
}