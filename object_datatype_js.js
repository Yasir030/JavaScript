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
