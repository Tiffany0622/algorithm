function isfrequency(str1, str2) {
  if (str1.length !== str2.length) {
    console.log("長度不同");
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (!counter1[str1[i]]) {
      counter1[str1[i]] = 1;
    } else {
      counter1[str1[i]]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!counter2[str2[i]]) {
      counter2[str2[i]] = 1;
    } else {
      counter2[str2[i]]++;
    }
  }

  for (let item in counter1) {
    if (!counter2[item] || counter2[item] !== counter1[item]) {
      console.log(item,counter1[item],counter2[item]);
      console.log("False!");
      return false;
    }
    console.log(item,counter1[item],counter2[item]);
  }
  console.log("True!");
  return true;
}

isfrequency("abbc", "aabc"); // False!
isfrequency("abba", "abab"); // True!
isfrequency("aasdebasdf", "adfeebed"); // 長度不同
