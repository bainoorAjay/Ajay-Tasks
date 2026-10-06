// Sum of Prime Numbers
// 1. Find the sum of all prime numbers between 20 and 150.
// let sum = 0;
// for (let j = 20; j <= 150; j++) {
//   let n = j;
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     // console.log(sum)
//     sum = sum + n;
//   }
// }
// console.log(sum);

// Average of Perfect Numbers
// 2. Find the average of all perfect numbers between 1 and 1000.
// for (let j=1;j<=1000;j++){
// let n =j
// let sum =0
// count=0
// for (let i=1;i<n;i++){
//     if(n%i==0){
//         sum=sum+i
//     }
// }
// if(sum==n){
//     console.log(n,"its a perfect number")
// }

// }

// for (let j=20;j<=150;j++){
//     let n=j
//     let count=0
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//         count++
//     }
// }
// if(count==2){
//     console.log(n,"prime number")
// }
// }
let sum_1 = 0;
let count = 0;
for (let j = 1; j <= 1000; j++) {
  let n = j;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum = sum + i;
    }
  }
  if (sum == n) {
    sum_1 = sum_1 + j;
    count = count + 1;
    let average = sum_1 / count;
    // console.log(n,"prefect-number");
    console.log("average =", average);
  }
}
