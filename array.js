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