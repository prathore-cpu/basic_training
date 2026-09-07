function secondLargest(array) {
  let largest =-Infinity;
  let secondLargest =-Infinity;

  for (let i=0; i<array.length; i++){
    if (array[i]>largest) {
      secondLargest =largest;
      largest=array[i];
    }else if(array[i]>secondLargest&&array[i] <largest){
       secondLargest =array[i];
    }
  }
return secondLargest;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  let frequency = [];
  
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char >= 'a' && char <= 'z') {
      if (frequency[char] === undefined) {
        frequency[char] = 1;
      } else {
        frequency[char]++;
      }
    }
  }

  return frequency;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  let flatObject = {};

  function flattenObject(object, parentKey) {
    for (let key in object) {
      let newKey = parentKey ? parentKey + "." + key : key;

      if (typeof object[key] === "object" && object[key] !== null) {
        flattenObject(object[key], newKey);
      } else {
        flatObject[newKey] = object[key];
      }
    }
  }

  flattenObject(unflatObject, "");

  return flatObject;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  let result = {};

  for (let key in flatObject) {
    let parts = key.split(".");
    let current = result;

    for (let i = 0; i < parts.length; i++) {
      let part = parts[i];

      if (i === parts.length - 1) {
        current[part] = flatObject[key];
      } else {
        if (current[part] === undefined) {
          if (!isNaN(parts[i + 1])) {
            current[part] = [];
          } else {
            current[part] = {};
          }
        }

        current = current[part];
      }
    }
  }

  return result;
}

