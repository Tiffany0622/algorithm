// Sliding Window
function maxSum (arr, size) {
  let windowArry = [];
  let maxValue = -Infinity;
  if (size > arr.length) return null;

  for (let i = 0; i <= arr.length - size; i++) {
    let window = [];
    let addNum = 0;
    for (let j = i; j < i + size; j++) {
      window.push(arr[j]);
      addNum += arr[j];
    }
    // console.log(window);
    if (addNum > maxValue) {
      maxValue = addNum;
      windowArry = window;
    }
  }
  console.log("maxSum：" + "[" + windowArry + "]", maxValue);
  console.log("maxSum：" + windowArry);
  console.log(`maxSum：${ windowArry }`);
  console.log(`maxSum：[${ windowArry }]`);
  return [windowArry, maxValue];
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // 12

function minSum(arr, size) {
  if (size > arr.length) {
    console.log("null");
    return null;
  }
  let minWindow = [];
  let minValue = Infinity;

  for (let i = 0; i <= arr.length - size; i++) {
    let window = [];
    let addValue = 0;
    for (let j = i; j < i + size; j++) {
      window.push(arr[j]);
      addValue += arr[j];
    }
    // console.log(window);
    if (addValue < minValue) {
      minWindow = window;
      minValue = addValue;
    }
  }
  console.log("minSum：" + "[" + minWindow + "]", minValue);
  return [minWindow, minValue];
}
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28
