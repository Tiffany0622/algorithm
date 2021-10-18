// array
let arr = ["Tiffany", "Jessie", "Jane"];

// for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   console.log(i);
// }

//foreach
// arr.forEach((person,index,arr) => {
//   console.log(index, person);
//   console.log(arr[index]);
// })

// class
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   getArea () {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// let c1 = new Circle(5)
// let c2 = new Circle(10)
// console.log(c1.radius);
// console.log(c1.getArea());
// console.log(c2.radius);
// console.log(c2.getArea());

// 1+2+3+...+n=sum

function fun1(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(fun1(10));

function fun2(n) {
  return ((n + 1) * n) / 2;
}
// console.log(fun2(10));

let time1 = window.performance.now();
fun1(1000000);
let time2 = window.performance.now();
let timeDiff1 = (time2 - time1) / 1000;
console.log(timeDiff1,fun1(1000000));

let time3 = window.performance.now();
fun2(1000000);
let time4 = window.performance.now();
let timeDiff2 = (time4 - time3) / 1000;
console.log(timeDiff2,fun2(1000000));


