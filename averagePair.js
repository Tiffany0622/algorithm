function averagePair (arr, num) {
  counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      counter++
      console.log(arr[i],arr[j]);
    }
  }
  console.log(counter);
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21],2)