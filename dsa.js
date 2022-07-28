//let's solve easy problem to understrand space and time complexity.......

//1...we have been given an array and we need to find if that array contain duplicate element or not...

// if yes..print yes....else print no.....

let array1 = [1, 2, 3, 4];

const checkDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return "yes";
      }
    }
  }

  return "no";
};

//this function has...time complexity..O(n^2)...but time complexity......O(1)

// console.log(checkDuplicate(array1));

//let's optimize it......

const checkDuplicateFine = (arr) => {
  let obj = {};
  //object has key and value..and key can't be duplicated...unique ..key...so use it. now...

  //for the first time we have to loop once...
  for (let i = 0; i < arr.length; i++) {
    //check if the object has something or not...

    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      return true;
    }
  }
  console.log(obj);
  return false;
};

// console.log(checkDuplicateFine(array1));

//We have been given 2 arrays, create a function that return true/false based on arrays contain any common items. if there is common element return true else return false....

const checkCommonElem = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }

  return false;
};

//again this is timecomplexity...O(n^2)........

// console.log(checkCommonElem(firstArr, secondArr));

let firstArr = [1, 2, 3, 4];
let secondArr = [5, 6, 2];

const checkCommonElemFine = (array1, array2) => {
  let obj = {}; //space complexity is..O(n)..because we don't know what is the lenght of this object...

  for (let i = 0; i < array1.length; i++) {
    if (!obj[array1[i]]) {
      obj[i] = array1[i];
    }
  }

  for (let comm in obj) {
    if (array2.includes(obj[comm])) {
      return true;
    }
  }

  console.log(obj);

  return false;
};

// console.log(checkCommonElemFine(firstArr, secondArr));

/* The two-sum problem is a question that asks that if given an array of integers (numbers), like [1, 2, 3], and a target sum number, such as 5, return an array of elements that add up to that target sum number. If no two numbers in the array add up to the target number, then we need to return an empty array; [].*/

//two sum problem.....

const sumArray = [2, 5, 7, 9, 6];

//example...you have to return the target number that adds to that target sum.....

const targetSumProb = (arr, targetSum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return [i, j];
      }
    }
  }

  return [];
};

// console.log(targetSumProb(sumArray, 12));

//now optimize this sumprob...

const targetSumProbFine = (arr, targetSum) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const neededValue = targetSum - currentNumber;
    const index2 = obj[neededValue];
    if (index2 != null) {
      return [index2, i];
    } else {
      return (obj[currentNumber] = i);
    }
  }
};

// console.log(targetSumProbFine(sumArray, 12));

//problem....In an array print element occurring maximum number of time....

const maxOccurrArray = [3, 4, 8, 9, 2, 8, 9, 9];

const findMaxOccurrNumber = (arr) => {
  const hashmap = arr.reduce((acc, elem) => {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
  }, {});

  console.log(hashmap);

  for (let num in hashmap) {
    if (hashmap[num] > 2) {
      return num;
    }
  }
};

// findMaxOccurrNumber(maxOccurrArray);
// console.log(findMaxOccurrNumber(maxOccurrArray));

//understanding javascript reduce with 5 examples...

//The reduce() method on  JavaScript arrays executes a 'reducer' function on every element of the array in order, passing the return value from the previous reducer call to the next reducer call.

//Example 1:

//Summing an Array of Numbers...

//given an array of numbers [1,3,5,7], calculalte the sum.

function sum(arr) {
  let sum = 0;
  for (const val of arr) {
    sum += val;
  }
  return sum;
}

// console.log(sum([1, 3, 5, 7]));

//now with reduce...

function sum(arr) {
  return arr.reduce((sum, elem) => sum + elem);
}

// console.log(sum([1, 3, 5, 7]));

//summing an array of numeric properties...

//The reduce function by itself is often more confusing than helpful. If all you need to do is sum an array of numbers, you might be beter off using a for loop...But, when combined with other array methods like filter() and map(), reduce starts looks more appealing..

//Example 2:

// For example, suppose you have an array of line items, and you want to calculate the sum of each line items's total property...

const lineItems = [
  { description: "Eggs(dozen)", quantity: 1, price: 3, total: 3 },
  { description: "Cheese", quantity: 0.5, price: 5, total: 2.5 },
  { description: "Butter", quantity: 2, price: 6, total: 12 },
];

//here is one way to add up to the line items total using reduce()...

// console.log(lineItems.reduce((acc, item) => acc + item.total, 0));

//This works, but is less composable..A better alternative is to first map() to get the total...

//another way..
// console.log(lineItems.map((li) => li.total)); //map returns a new array...
// console.log(lineItems.map((li) => li.total).reduce((sum, val) => sum + val, 0));

//Example 3:

//Find the Maximum value....

//While reduce() is used for summing, it doesn't have to be...

//the accumulatior can be any value:number, null, undefined, array, pojo,even a promise...

//for example, suppose you have an array of javascript dates, and you want to find the most recent date..

const dates = ["2019/06/01", "2018/06/01", "2019/09/01", "2018/09/01"].map(
  (v) => new Date(v)
);

// const sortedDates = dates.map((v) => new Date(v)).sort((a, b) => b - a);
// console.log(sortedDates[0]);

//that works, but isn't as efficient as it could be, and sorting an array of dates in javascript is no-trivial..

//Instead you can use reduce() and make your reducer return the most recent date found so far..

//using reduce it is cool man..

const maxdate = dates.reduce((max, d) => (d > max ? d : max), dates[0]);

// console.log(maxdate);

//example 4...

//Grouping values.....

//Given an array of objects with an age property....

//How do you retuurn a map that contains how many characters have a given age?....For example..

// the correct output on the above array would be

const characters = [
  { name: "ali", age: 30 },
  { name: "ahmed", age: 30 },
  { name: "denna", age: 51 },
];

// { 30: 2, 51: 1 }..output

//start with an empty object, increment map[age] for each element of the array...

const reducer = (map, val) => {
  if (map[val] == null) {
    map[val] = 1;
  } else {
    ++map[val];
  }
  return map;
};

//1st way....
// console.log(
//   characters
//     .map((char) => char.age)
//     .reduce((acc, elem) => {
//       acc[elem] = (acc[elem] || 0) + 1;
//       return acc;
//     }, {})
// );

//2nd way...
// console.log(characters.map((char) => char.age).reduce(reducer, {}));

//example 5...

//Promise Chaining...

//suppose you have an array of async functions that you want to execute in series...There
// is a non standard promise.series function for this, but you can also do this with reduce()..

const functions = [
  async function () {
    return 1;
  },
  async function () {
    return 2;
  },
  async function () {
    return 3;
  },
];

//chain the function calls in order, starting with an
// empty promise in the end, res is equivalent to ..

//Promise.resolve().then(fn1).then(fn2).then(fn3)...
const chainAsyncFunctions = async (functions) => {
  const res = await functions.reduce(
    (promise, fn) => promise.then(fn),
    Promise.resolve()
  );
  return res;
};

// chainAsyncFunctions(functions).then((res) => console.log(res));

//target sum prob again....

const targetSumArray = [3, 5, 8, 1, 15];
