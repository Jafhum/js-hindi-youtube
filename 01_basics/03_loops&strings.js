//loops are used to execute a piece of again and again
// there are 3 types of loops 1.for loop 2.while loop 3.do while loop


//for Loop  syntax  
for (let i=0; i<5; i++){

      console.log("Hello World")
}

/*tracing         output
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
/*                   output
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
    /*output
    val = j
    val = a
    val = v
    val = a
    val = s
    val = c
    val = r
    val = i
    val = p
    val = t*/
    
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
    /*output
    key= name jafar
    key = age 23
    key = cgpa 8.2
    key = isPass true*/
}


// string can be defined in three ways 
//1 ' '; single cotes

let str1 = 'jafar';
console.log(str1 , typeof str1);//jafar string

//2 " "; double cotes

let str2 ="jafar";
console.log(str2 , typeof str2);//jafar string

//3 ` `; backtik {template litrels} template literals in js is a way to have embedded expressions in strings and ${} this is string interpolation and it is to create string by doing substitution of placeholders 


let str3 = "jafar" ;
console.log(`this is backtik ${str3} and ${typeof str3}`);//this is backtik jafar and string

//we can also add expression in ${Expression}ex
console.log(`add these number 1 + 2 + 33 and total =${1+2+33}`); //add these number 1 + 2 + 33 and total=36

//Escape Charecter 
//  backslash n (\n) it make the string in nextling 
let name = "jafar\njafhum";
console.log(name); 
/*output
jafar
jafhum 
*/

//(\t) this will give us space of a tab

let name2 = "jafar\tjafhum";
console.log(name2);
/*output
jafar   jafhum 
 */


// STING METHODS these are built in methods to manipulate a string 

// Note : All strings will not effect the original string they will create a new string that why the string is called Immutable(cann't be  changed)

//toUpperCase() this string menthod is used convert all the charecter in Uppercase

let String1 = "Jafhum";
console.log(String1.toUpperCase()); // JAFHUM

//toLowerCase() this string menthod is used convert all the charecter in Lower Case

 let String2 = "JafHum";
console.log(String2.toLowerCase());  //jafhum


//trim() this method will remove the start and end spaces   

let string3 = "    Jafar Jafhum     ";
console.log(string3.trim());//Jafar Jafhum

//slice() this methos is used for slice the particular part of a string using index values ,two parameters are allowed (1 , 3) 1st starting position and 2nd ending position and 2nd parameter is optional

let slice = "ilovejs";
console.log(slice.slice(1 , 5));//love

/*
slice method start's from 1 to 5 
and last index will be ignored so from 1 index l 2) o 3) v 4)e 
5)this will ignore 

 */
let slice1 = "ilovejs"
let slice2 = slice1.slice(1);
console.log(slice2);//lovejs from starting index to end 



//concat() this method will concat the 2 strings 

let con1 = "jafar";
let con2 = "jafhum";
console.log(con1.concat(con2));//jafarjafhum
 

//replace() this method will replace the charecter or word from the sting 

let rep = "love";
console.log(rep.replace("l" , "D"));//dove

let rep1 = "LoveLove";
console.log(rep1.replace("Lo" ,"Do")); // DoveLove 
//here only starting letter only will change if we want both Lo letter should change than we hane replaceAll() method



//replaceAll()

let rep2 = "LoveLove";
console.log(rep2.replaceAll("Lo", "Do"));//DoveDove


//charAt()  this method used to find charter using the index number 

let char ="Jafar";
let char1 = char.charAt(4);
console.log(char1);//r


//prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
//ex user name ="jafar" , username should be "@jafar05"






