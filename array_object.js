// let arr = [1, 2, 3, 4, 5];
// console.log(arr[4]);

let student = [
    {
        name: 'Mahi',
        code: 140,
        dept: 'CSE',
        interest:['Developer','Tester','Leadership']
    },
    {
        name: 'Sharmin',
        code: 123,
        dept: 'CSE'
    }
]

// console.log(student[1].dept);
// console.log(student[1].code);
//console.log(student[0].interest[1]);

// for (let i = 0; i < student[0].interest.length; i++){
//     console.log(student[0].interest[i]);
    
// }


student[0].interest.forEach(
    (el)=> {
        console.log(el);
        
    }
)