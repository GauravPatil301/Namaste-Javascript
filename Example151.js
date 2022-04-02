//function Statement or Function Declaration
a();
function a(){
    console.log("A is called");
}

//function Expression
var b = function (){
    console.log("B is called");
}
b();

//Anonymous Function
// function (){

// }


//Named Function Expression
var c = function xyz(){
    console.log("C is called");
}
c();

//Difference between Parameters and Argument 
var d = function (param1,param2){
    console.log("D is called");
}
d(1,2);

//First Class Functions   Ability to used like values
var e = function (param1){
   return function xyz(){

   }
}
console.log(e());

//Arrow Function
