//loops are used to execute a piece of again and again
// there are 3 types of loops 1.for loop 2.while loop 3.do while loop


//for Loop  syntax  
for (let i=0; i<5; i++){

      console.log("Hello World")
}

/*tracing 
i=0 - 0<5 - t - "Hello World" - i++
i=1 - 1<5 - t - "Hello World" - i++
i=2 - 2<5 - t - "Hello World" - i++
i=3 - 3<5 - t - "Hello World" - i++
i=4 - 4<5 - t - "Hello World" - i++
i=5 - 5<5 - F -  Loop Ends  
*/


//While Loop syntax

let i=0;
while (i<5){
    console.log("Hello Globussoft");
    i++    
}
/*
i=0 - 0<5 - t - "Hello Globussoft" - i++
i=1 - 1<5 - t - "Hello Globussoft" - i++
i=2 - 2<5 - t - "Hello Globussoft" - i++
i=3 - 3<5 - t - "Hello Globussoft" - i++
i=4 - 4<5 - t - "Hello Globussoft" - i++
i=5 - 5<5 - F -  Loop Ends  
*/



//do-while Loop syntax

let j=20;
do{
    console.log("assalamualikum");
    
}while(j<10); 
/*
j=20 - "Assalamualikum" - j<10 - F - loop ends

this will print atleast once if the conditions is false
*/


//there are 2 more loop which will use on objects,stings and arrays

//for-of this loop will works in both strings and arrays
let str ="javascript";
for(let val of str){
    console.log("val =" , val);
    
}
//for-in this loop will works in objects

let student ={
    name : "jafar",
    age : 23,
    cgpa : 8.2,
    isPaas : true,

};

for (let i in student ){
    console.log("Key =", i , student[i]);
}




