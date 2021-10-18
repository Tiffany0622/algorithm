function isIntersection(arr1, arr2) {
  let result = [];
  let arrNum = arr1.concat(arr2);
  let counter = {};
  for (let i = 0; i < arrNum.length; i++) {
    if (!counter[arrNum[i]]) {
      counter[arrNum[i]] = 1;
    } else {
      counter[arrNum[i]]++;
    }
  }

  for (let item in counter) {
    if (counter[item] >= 2) {
      result.push(item);
    }
  }

  console.log("Intersection Number is ：" + result);
  return result;
}

isIntersection([1, 2, 3, 0, 9, 8, 4], [1, 2, 4, 8, 3]);
// Intersection Number is ：1,2,3,4,8