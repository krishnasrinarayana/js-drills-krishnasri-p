"use strict";

const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

//----------------------------------------PROBLEM-1
function each(elements, cb) {
  if (!Array.isArray(elements)) console.log("Enter a valid array");
  else {
    for (let i = 0; i < elements.length; i++) {
      cb(elements[i]);
    }
  }
}

//----------------------------------------PROBLEM-2

function map(elements, cb) {
  if (!Array.isArray(elements)) console.log("Enter a valid array");
  else {
    let arr = [];
    for (let i = 0; i < elements.length; i++) {
      arr.push(cb(elements[i]));
    }
    return arr;
  }
}
//------------------------------------PROBLEM-3

function reduce(elements, cb, startingValue) {
  if (!Array.isArray(elements)) console.log("Enter a valid array");
  else {
    let a = startingValue;
    for (let i = 0; i < elements.length; i++) {
      a += cb(0, elements[i]);
    }
    console.log(a);
  }
}


//-----------------------------------------PROBLEM-4

function find(elements, cb) {
  if (!Array.isArray(elements)) console.log("Enter a valid array");
  else {
    for (let i of elements) {
      if (cb(i)) return i;
    }
    return -1;
  }
}



//----------------------------------PROBLEM-5

function filter(elements, cb) {
  if (!Array.isArray(elements)) console.log("Enter a valid array");
  else {
    let arr = [];
    for (let i of elements) {
      if (cb(i)) arr.push(i);
    }
    return arr;
  }
}


//--------------------------------PROBLEM-6

const nestedArray = [1, [2], [[3]], [[[4]]]];

let arr = [];
function flatten(elements) {
    for(let i = 0; i<elements.length; i++){
        if(!Array.isArray(elements[i]) ) arr.push(elements[i])
        else flatten(elements[i]);
    }
    return arr;
}

export { items, each, map, reduce, find, filter, nestedArray, flatten };