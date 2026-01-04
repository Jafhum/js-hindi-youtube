//primetive datatypes 
let number = 22; //number datatype
let string ="jafar"; //string datatype
let boolean =true; //boolean datatype


// typeof is a function which give us the type of data ex: number string boolean etc
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);

//and there are more datatypes like undifined and null
//this will give you undifined because js will store undifined value auto matically 
let subject;
console.log(subject);//undifinded 

//here js will store null value in marks but the null type is object
let marks = null;
console.log(typeof marks); //object

//checking the if the datatypes converstions

let sum = 33;
//changing it's datatype
let sumUpdate = String(sum); // type of this datatype is number
console.log(typeof sum);
console.log(typeof sumUpdate);// type of datatype is String

let read = "javascript";
let startRead = Boolean(read);

console.log(typeof read);// type of this datatype is string
console.log(typeof startRead);//type of this datatype is boolean

let add = "33a2"; //here it is string
let adding = Number(add) //after changing it's datatype it change it's datatype to number 

console.log(add);//before changing it's datatype it is string because we used ""
console.log(typeof adding);//after changing it's datatype will became to Number
console.log(adding);//after changing it's datatype the value we stored in it is NaN (not a number)
















//non-primitive datatypes
