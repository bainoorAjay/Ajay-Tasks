// n=10
// if(n%2!=0){
//     console.log(n)
// }
// if(9%2!=0){
//     console.log(9)
// }

// for(let i=10;i>=5;i--){
//     if(i%2!=0){
//         console.log(i)
//     }
// }
// n=3
// count=0
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//       count=count+1
//     }
// }
// console.log("count = ",count)
// if(count==2){
//     console.log("prime")
// }
// else{
//     console.log("not a Prime")
// }

//dispaly the digits in reverse order with while loop

// let n=123456789
// while(n!=0){
//     let ld=n%10;
//     console.log(ld)
//     n=parseInt(n/10);
//     // console.log(n)
// }

// let  n=123456789
// count=0
// while(n!=0){
//     let ld=n%10
//     count=count+1

//     n=parseInt(n/10)
//     console.log(ld)
// }
//  console.log(count)

// let n=12345
//  let sum=0
// while(n!=0){
//     let ld=n%10
//      sum=sum+ld
//     console.log(ld)
//     n=parseInt(n/10)

// }
//  console.log(sum)

let n = 123;
rev = 0;
while (n != 0) {
  let ld = n % 10;
  rev = rev * 10 + ld;
  console.log(ld);
  n = parseInt(n / 10);
}
console.log(rev);



