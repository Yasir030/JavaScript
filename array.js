const fruits = ["apple","Orange", "Mango", "Banana"];


fruits[0]= "grape";
fruits[4]="pineapple";

console.log(fruits)
console.log(fruits[fruits.length -1])  //priting last index of array

// Loop

const car = ["toyta", "nissan", "tata", "mahindra"]

for( i=0; i<car.length; i++){
    console.log(car[i]);
}
 // foreach

 const phone = ["iphone", "samsung","oppo","oneplus"];

 function phoneFeature(value){
    console.log("the phone name is", value);

 }

 phone.forEach(phoneFeature);


 // object itself is array

  const person = [];

  person["first_name"]= "yasir";
  person["last_name"]= "arafat";
  person["age"] = 24;
  person.length

  console.log(person.length)  // length is zero because it is an object
  console.log(person)

  let number = [1,2,3] //this one is array
  console.log(number)