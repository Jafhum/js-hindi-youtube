//array is an collection of items

//loop on Array
let heroes = ["Ironman", "Captain America", "Thor", "Hulk"];
for(let i=1; i<=heroes.length;i++){
    console.log(heroes[i-1]);
}


//Arrays Methods 

//push() --> this method is used to add items at end of an array and this method will change the orginal array

let Arr = ["angli", "bangli", "chuingli","tangli"];

console.log(Arr); //[angli', 'bangli', 'chuingli', 'tangli']

Arr.push("mangli", "jungli");
console.log(Arr);//['angli', 'bangli', 'chuingli', 'tangli', 'mangli','jungli']

//pop() --> this method will remove the item at end an Array and this will change the original array

let arr2 = ["bhanush", "thalapathy","boss","Sk"]
console.log(arr2);//['bhanush', 'thalapathy', 'boss', 'Sk'] 

arr2.pop();
console.log(arr2);//['bhanush', 'thalapathy', 'boss']

//toString() --> this method will change the whole array into string and this methos will not change the original array this will create a new string

let marks =[36,54,78,69,50];
console.log(marks);//[ 36, 54, 78, 69, 50 ]
let marks2 =marks.toString();
console.log(marks2);//36,54,78,69,50



//concat() --> this methos is used combine two or more arrays together 

let marvelHeros = ["Antman", "Thor" , "MoonNight"];
let indianHeros = ["Shaktiman","Panjurli"];
let dcHeros = ["SuperMan", "Batman","flash"];

let allHeros =marvelHeros.concat(indianHeros,dcHeros);

console.log(allHeros);//[ 'Antman',    'Thor','MoonNight', 'Shaktiman','Panjurli',  'SuperMan','Batman',    'flash']



