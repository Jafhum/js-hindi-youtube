//array is an collection of items
let arr = [45,56,98,50,78];
console.log(arr);//[45,56,98,50,78];

let arr1 = ["Ironman", "Thor", "Captain America","hulk" ];

console.log(arr1);//['Ironman', 'Thor', 'Captain America', 'HUlk'];


//array is mutable because changing values in array is possible and in string is not possible because string is immutable

arr1[1] = "Strongest Avenger";

console.log(arr1);//['Ironman', 'Strongest Avenger', 'Captain America', 'hulk'];

console.log(arr1[3].toUpperCase());//HULK

//Loops on Arrays

let alluMovies =["parugu","julai", "pushpa", "raceguram","bunny"];

for(let i=0; i<alluMovies.length;i++){
    console.log(alluMovies[i]);
}

/*
HULK
parugu
julai
pushpa
raceguram
bunny
*/


//Array Methods

//pop() this method is used to remove values at ending index

let names = [ "jafar", "Sukumar", "Munna"];
console.log(names);//[ 'jafar', 'Sukumar', 'Munna' ]
names.pop();
console.log(names);//[ 'jafar', 'Sukumar' ]

//push() this method is used to add values at ending index and returns 

let chiruMoves = ["Thakhur","Indra","MSVPG","MBBS"];
console.log(chiruMoves);//[ 'Thakhur', 'Indra', 'MSVPG', 'MBBS' ]
chiruMoves.push("BholaShankar");
console.log(chiruMoves);//[ 'Thakhur', 'Indra', 'MSVPG', 'MBBS', 'BholaShankar' ]


//tostring() this method will make all values of an array into string but it will change the original array it creates the new array

let marks =[45,98,25,67,59];
console.log(marks);//[ 45, 98, 25, 67, 59 ]
marks.toString();
console.log(marks);//[ 45, 98, 25, 67, 59 ] here it was not changed to string becuase it wil affect the original array we have to create a new one

let mark = marks.toString();
console.log(mark);//45,98,25,67,59
console.log(typeof mark);//string

//concat() this method is used combine multiple array and it will return the result

let total = marks.concat(mark);
console.log(total);//[ 45, 98, 25, 67, 59, '45,98,25,67,59' ]

//unshift() this methos is used to add values at starting index

let person1 =["Jafar",];
console.log(person1);// 'Jafar' ]
person1.unshift("Jafhum");
console.log(person1);//[ 'Jafhum', 'Jafar' ]

//shift() this method is used to remove values at starting index and returns the values

let person2 = ["sukumar","Aman Kumar"];
console.log(person2);//[ 'sukumar', 'Aman Kumar' ]
let person = person2.shift();
console.log(person2);//[ 'Aman Kumar' ]
console.log("delted value from person2 is =" , person);//delted value from person2 is = sukumar

//slice() this method will a peice of an array and it will change the original array
//syntax : slice(startIdx,EndIdx); and the ending index is non inclusive which means it will give the end index result

let personMarks = [90,39,50,69,75];
console.log(personMarks);//[ 90, 39, 50, 69, 75 ]
let slice = personMarks.slice(1,4);
console.log(slice);//[ 39, 50, 69 ]

//Splice() this method is used add,remove and delete items from an array it will change the original array
//syntax;- splice(startIdx,DeleteCount,NewElement);

let count =[38,59,48,50,83,91];
console.log(count);//[ 38, 59, 48, 50, 83, 91 ]
count.splice(1,0,101);//here replacing the element at starting index
console.log(count);//[38, 101, 59, 48, 50,  83, 91]

count.splice(2,2);//here deleting 2 items in array from 2 index
console.log(count);//[ 38, 101, 50, 83, 91 ]

count.splice(2,0,102,103);//here addiing items in array from 2 index
console.log(count);//[ 38, 101, 102, 103, 50,  83,  91]

console.log("hello World"); // hello world


//forEach Loop 
//this loop will work on Arrays and they also called as higer order method in js which they take function as a parameter or they return another function as their output 

//syntax  arr.forEach(callBackFunction)  callbackfunction : here , it is a function to execute for each element in the array

let arr9 =[1, 2, 3, 4, 5, 6]

// arr9.forEach((val)=>{
//     console.log(val);
    
// })

arr9.forEach(function araay(val){
    console.log(val); // 1 2 3 4 5 6
    
})

//i want print each index of an array with multiple of 2

let print = [20,30,40,50];

let prints = (val=>{
    console.log(val*2); //40 60 80 100
    
});

// print.forEach((val=>{
//     console.log(val*2);
    
// }))  we print like this as well 

print.forEach(prints);

console.log("foreach() ends here");//foreach() ends here

//Map() creates a new array with the result of some operation. the value it's callback returns are used to form a new array.

//array.map(val,index,array); in map method we can pass three arguments

let opt = [100,200,300,400,500];

let newopt=opt.map((val)=>{
   return val * 2;    
})
console.log(newopt);//[ 200, 400, 600, 800, 1000 ]
console.log(opt);//[ 100, 200, 300, 400, 500 ] 

//map() this method will not affect the original array 

console.log("map() will end here"); //map() will end here

//filter(): this is method will check the each index of array and filter the array based on condition and this will create the new Array & it will affect the original array

let array = [1,2,3,4,5,6,7,8];
console.log(array); //[1, 2, 3, 4,5, 6, 7, 8]
//i want to only even values from an array 

let evenArray = array.filter((val)=>{
    return val % 2==0;
})
console.log(evenArray);//[ 2, 4, 6, 8 ]

//i want to print the odd numbers from the array

let oddArray = array.filter((val)=>{
    return val % 2 !==0;
})
console.log(oddArray);//[ 1, 3, 5, 7 ]

//i want to print the numbers  which are greater than 4

let greaterArray = array.filter((val)=>{
    return val > 4;
})
console.log(greaterArray);//[ 5, 6, 7, 8 ]
console.log("filter() will end here");//filter() will end here

//reduce(): this method will perform some operation and reduce the array into single value and it will return the single value and it will create the new array

// i want to sum all the values from array and return the single value
let sum =[1,2,3,4,5];

let newSum=sum.reduce((pre , curr)=>{
    return pre + curr;
})
console.log(newSum);//15
/* how it's working 
first it will check the two elements of an array one is previous(pre) val and another one is current(curr) val which are
[1,2] after adding 1+2 = 3 this 3 will stored in pre val and the curr val will check another index [3,3] 3+3= 6 and [6,4] 6+ 4=10; [10,5] 10+5=15 and curr val ends here so the output is 15
*/

//now i want to find the value which is greater in the array

let val=[1,5,3,8,6,4,9,0];

let newVal=val.reduce((pre ,curr)=>{
    return pre > curr ? pre : curr;
})
console.log(newVal);












