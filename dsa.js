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

console.log(checkDuplicateFine(array1));
