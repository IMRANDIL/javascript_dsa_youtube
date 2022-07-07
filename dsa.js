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

console.log(checkCommonElemFine(firstArr, secondArr));

/* The two-sum problem is a question that asks that if given an array of integers (numbers), like [1, 2, 3], and a target sum number, such as 5, return an array of elements that add up to that target sum number. If no two numbers in the array add up to the target number, then we need to return an empty array; [].*/

//two sum problem.....

const sumArray = [2, 3, 4, 6, 8, 9];

//example...you have to return the target number that adds to that target sum.....

const targetSumProb = (arr, targetSum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        return [arr[i], arr[j]];
      }
    }
  }

  return [];
};
