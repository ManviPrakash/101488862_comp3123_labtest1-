// question1
function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject("Please input an array!");
      }
  
      const result = mixedArray
        .filter(item => typeof item === "string")
        .map(item => item.toLowerCase());
  
      if (result.length > 0) {
        resolve(result);
      } else {
        reject(" Sorry!There is no string elements in the array.");
      }
    });
  }
  
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))  
    .catch(error => console.error(error));
  