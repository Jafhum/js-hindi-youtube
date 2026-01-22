//print even numbers from 1 to 100 
// for(let i=0; i<=100; i++){
//     if(i%2===0){
//         console.log(i);   
//     } 
// }
 

//for given array with marks of students [85,95,44,37,76,60]
//find the average marks of entire class

let students =[85,97,44,37,76,60];
let sum =0;
for(let i=0; i<students.length;i++){
    sum=sum+students[i]
    
    

}
let avg = sum / students.length;
console.log(`avarage marks of the class ${avg}`);
// let avg = sum / students.length

