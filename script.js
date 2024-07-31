//1.Implementing a queue with array
const queue = [];
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
const dequeue = queue.shift(); 
console.log("1.The Queue is "+queue);

//2.Rotating an array
const array = [1, 2, 3, 4, 5];
const rotatedArray = [...array.slice(-2), ...array.slice(0, -2)];
console.log("2.The Rotated Array is " + rotatedArray);

//3.Implementing a stack with array
const stk = [];
stk.push(2);
stk.push(3);
stk.push(4);
stk.push(5);
stk.push(6);
const poppedItem = stk.pop(); 
console.log("3.The Stack is "+stk);

//4.Finding the longest string in an array
const strings = ["apple", "banana", "cherry", "date", "elderberry"];
let longest=strings[0].length;
let longestStr=strings[0];
for(let i=0;i<strings.length;i++){
    if(strings[i].length>longest)
        longestStr=strings[i];
}
console.log("4.The longest String is "+longestStr);

//5.Sorting array with complex object
const arr = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
];
arr.sort((a, b) => a.age - b.age);
console.log("5.The sorted array of objects is:", arr);
