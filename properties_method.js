let student = {
    name: 'Md Mustakin Mahi',
    code: 123,
    Hello: function () {
        console.log('Hello World');
        
    },
};

student.Hello = function () {
    console.log('Hello Mahi');
    
}
student.name = 'Sharmin';
student.code = 123;
//console.log(student.name);
//console.log(student);
delete student.code;
//console.log(student);
let fullName = student.name;

student.Hello();