arr = [1, 2, 3, 4, 5];
arr2 = arr;
arr2.push(6);
console.log(arr);

//similarly same thing can be done with objects
obj1 = { name: "dip", age: 20 };
obj2 = obj1;
obj2.age = 21;
console.log(obj1);

//Now we are going to learn descructuring in javascript

var arr1 = [1, 2, 3, 4, 5];
var arry2=[...arr1] //making a copy properly

console.log(arry2);

//lets make it little interesting showing with a proper example

let name=["dip","dev","raj","sony"]
let [a,b,...c]=name
console.log(c)
  
let name2=[...name] //we have made a diff copy of the array
name2.push("Hello") //Now even if we update the older array we it won't point to the memoery of that array
console.log(name2) //output (5) ['dip', 'dev', 'raj', 'sony', 'Hello']
console.log(name) //output (4) ['dip', 'dev', 'raj', 'sony']

//One more thing ... => is a rest operator and it is written in the last. not in the starting like [...arr,a,b] This is not allowed


//Now we will be doing the same thing for the object

var obj={
    name:"Dip",
    age:"21",
    some:112,
    hell0:234234234
}
var {age}=obj
console.log(age)


