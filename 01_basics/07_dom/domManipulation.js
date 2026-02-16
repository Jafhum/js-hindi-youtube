/*DOM Manipulation 
Attributes
there are 2 types of attribute 
1) getAttribute(attr) it is used to get the attribute val
*/
let div = document.querySelector("div");
console.log(div); //<div id="Div"> This is First change in Dom</div>

let val = div.getAttribute("id");
console.log(val);//Div  (it is id value of div node)

/*
2) setAttribute(attr , value) it is used to set the attribute value*/


// let para = document.querySelector("p");
// para.setAttribute("class" , "Paragraph")
// console.log(para);//p.Paragraph  

//Style in JS we can the styles of nodes 

let section = document.querySelector("section");
console.log(section);

//we can change the stlyes of section node
section.style.backgroundColor = "purple" // here we change the background color if we want to change the font size and font color we can do it 

section.style.fontSize = "40px";
section.style.color = "White";

//wecan add border radius and border color

section.style.border = "2px solid black";
section.style.borderRadius = "20px";
section.style.paddingTop = "20px";
section.style.paddingLeft = "20px";

//Insert Elements there are some methods to insert the elements by using js 

//1) node.append(el); this method is used to add element at end inside the node

//2) node.prepend(el); this method is used add element at starting inside the node 

//3) node.before(el); this method is used to add element before the node (outside)

//4) node.after(el); this method is used to add element at after the node (outside)

let newEle = document.createElement("div");
newEle.innerText = "Creating new element in JS";
//here i want to add a my element top of page


let fisrt = document.querySelector("div");
fisrt.prepend(newEle);//here i add the my element at top of website


// now i want add a button in my section node 

let sec = document.querySelector("section");

let Btn = document.createElement("button");
Btn.innerText = "Click Me !"

sec.append(Btn); //here i have add the button in section node using js 

//now i want add element before the section node 

let newHeading = document.createElement("h2");
newHeading.innerText ="This is JavaScript Lives";

section.before(newHeading);


//now i want create another button after the section node 

let newBtn = document.createElement("button");
newBtn.innerText = "Hit Me!";
newBtn.style.height = "40px";
newBtn.style.width = "140px";
newBtn.style.margin = "20px";
newBtn.style.backgroundColor = "yellow";
newBtn.style.fontSize = "20px";

section.after(newBtn)

//we have how to insert in the element in dom now we'll see hoe remove element from dom 

//node.remove() //removes the node 


// i want to remove the remove the the H2 hading that i have created just now 

newHeading.remove();//the h2 headind was remove in browser


//if we want to add a new class the setAttribute method overwrite the css class so what we can do is there iis method called classList this method will have a method called add and it will add a our new class

//node.classList.add("newClass");

let p = document.querySelector("p");

p.classList.add("newPara")


//there is one more method to remove class 

//node.classList.remove("className")










