//Funtions are block of code that performs specific task and it can be invoked anytime we want

//Normal Function
function myFunction(){
    console.log("Helloo JavaScript Users");

}
myFunction();//Helloo JavaScript Users

//Function with Parameter here the variables will act like local variables with in the block scope

function marks( a , b){

   console.log(a + b);

}
marks(10,20);//30

//functions can be return some value using "return" keyword 

function sum(x , y){
    sum1 = x + y;
    return sum1;//using "return" keyword here it will do the operation keep the output and after return keyword remaining code will be ignored

    console.log("this line of code will be ignored");
    
}
let val = sum(5 ,2); //here we are storing the value of the function in val 
console.log(val);//7


//Arrow Function this function is ES6+ version updated function and mostly used function

//sum of two number using arrow function

const add = (a,b)=>{
    return a+b;
}
console.log(add(10,20));//30

//multiple of two numbers

const mul = (a , b)=> {
    console.log(a * b);  //20  
}
mul(5,4);//20




