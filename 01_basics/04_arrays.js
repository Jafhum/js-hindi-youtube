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

















