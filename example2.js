function example(n) {
  let counter = 0;
  for (let i = 0; i < 3*n; i++) {
    counter++;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      counter++;
    }
  }
  counter += 4
  
  return counter
}

for (let i = 2; i < 10; i++) {
  console.log(`${i} ==> ${example(i)}`);
}
