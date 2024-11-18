let person = {
    greeting:"Hello",
    names: ['Mustakin','Mahi','Sharmin'],
    showName: function () {
        // this.names.forEach(function (el) {
        //     console.log(this);
            
        // });
        this.names.forEach(function (el) {
            console.log(this);
        }, person);
        
        
    },
};
person.showName();

//this keyword can present in method and function