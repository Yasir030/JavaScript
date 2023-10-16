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


let person = {
    first_name: "Yasir",
    last_name: "Arafat",
    Age: 24,
    designation: "Programmer",

    identity: function(){
        console.log(this.first_name + " " + this.last_name + this.designation)
    }
}

person.identity()
