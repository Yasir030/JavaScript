        const car={
    name : "TOYOTA",
    model : 2000,
    color : "white",
    weight : "1000kg",

    start : function(){
        console.log("car has started")
    },

    drive : function(){
        console.log("car is driving")
    }
}

console.log(car.name)
console.log(car['model'])
car.start()


let person = {                              //let is not a proper way of declearing object
    first_name: "Yasir",
    last_name: "Arafat",
    Age: 24,
    designation: "Programmer",

    identity: function(){
        return this.first_name + " " + this.last_name + this.designation;    //have to return if any one wants to store this function's value
    }
};


console.log(person.first_name.length);

const me = person.identity();
console.log(me.length);


