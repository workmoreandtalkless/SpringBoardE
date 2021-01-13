//Refactor it to use the rest operator & an arrow function:
const filterOutOdds = (...nums) => 
nums.filter((num)=>num%2===0);

//findMin
const finMin = (...nums) =>{
    nums.reduce((min,nums)=> nums<min ? nums:min);
}
// I should remember this one 
const findmin = (...nums) => Math.min(...nums);

//mergeObjects
const mergeObjects = (obj1,obj2)=>({...obj1,...obj2});

//double and return args
// need review
const doubleAndReturnArgs = (arr,...args)=> [...arr,...args.map(nums=>nums*2)]
//Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */

/** how to get the random element using Math.Random()* items.legnth get the index*/
function removeRandom(items) {
    let idx = Math.floor(Math.random()*items.length);
    return [...items.slice(0,idx),...items.slice(idx+1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1,...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    // OPTION 1
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;

  // OPTION 2 (uses an object enhancement you'll see in the next unit)
  // return { ...obj, [key]: val };
}


/** Return a new object with a key removed. */
/** how to use spread to remove a key in obj */
function removeKey(obj, key) {
      // OPTION 1
  let newObj = { ...obj }
  delete newObj[key]
  return newObj;

  // OPTION 2 (uses an object enhancement you'll see in the next unit)
  // ({ [key]: undefined, ...obj } = obj);
  // return obj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1,...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
      // OPTION 1

  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;

  // OPTION 2 this uses an object enhancement you'll see in the next unit)
  // return { ...obj, [key]: val };
}
