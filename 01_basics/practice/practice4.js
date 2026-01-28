//we are given array of [30,91,81,90,95,59,39] marks of students filter out of the marks of students that scored 90+

let stu = [30,91,81,90,95,59,39];

let newStu =stu.filter((val)=>{
    return val > 90;
});
console.log(newStu);//[ 91, 95 ]



///take a number n as input from the user .create an array of number from 1 to n
//use reduce method to calculate the sum of all numbers from an array
//use reduce method to calculate the product of all numbers from an array


let n=10;
let arr=[];

for(let i=0; i<n;i++){
    arr[i]=i+1;
}
console.log(arr);

let sumArr=arr.reduce((pre,curr)=>{
    return pre + curr;
});
console.log(sumArr);


let productArr =arr.reduce((pre,curr)=>{
    return pre * curr;
})
console.log(productArr);



