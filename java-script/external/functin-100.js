//1.Check whether a number is positive, negative, or zero.

// n=0
// function findNum(){
//     if(n<0){
//         console.log("negative")
//     }
//     else if(n >=1){
//         console.log("postive")
//     }
//     else{
//         console.log("ZERO")
//     }
//     }

//  findNum()

//2.Check whether a number is even or odd.

// n = 9;
// function evenOdd() {
//   if (n % 2 == 0) {
//     console.log("EVEN");
//   } else {
//     console.log("ODD");
//   }
// }
// evenOdd();

//3.Find the largest of two numbers.
// n1=10
// n2=30
// function bigNum(){
//     if(n1>=n2){
//         console.log(n1,"is greater")
//     }
//      else{
//         console.log(n2,"is greater")
//     }
// }
//  bigNum()

//4 Check whether a number is divisible by 5.
// n=15
// function divBy(){
//     if(n%5==0){
//         console.log(n,"number is divisile by 5")
//     }
//     else{
//         console.log(n,"is not divisible by 5")
//     }
// }
// divBy()

//5.Print numbers from 1 to 10.
// function numbers(){
//     for(let i=1;i<=10;i++){
//         console.log(i)
//     }
// }
// numbers()

// 6. Print even numbers from 1 to 100.

// function even(){
//     for(let i=1;i<=100;i++){
//         if(i%2==0){
//             console.log(i,"is EVEN")
//         }
//     }
// }
// even()

//7. Print odd numbers from 1 to 100.
// function odd(){
//     for(let i=1;i<=100;i++){
//         if(i%2!=0){
//             console.log(i,"ODD")
//         }
//     }
// }
//  odd()

// 8. Find the sum of numbers from 1 to 100.
// function sumOf() {
//   let sum = 0;
//   for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
//   }
//   console.log(sum)
// }
// sumOf();

// 9. Find the factorial of a number.

// function facti(){
//     let n=5
//      let fact=1
//      for(let i=1;i<=n;i++){
//         fact=fact*i
//      }
//      console.log(fact)
// }
//  facti()

// 10. Count the digits of a number.

// function countNum() {
//   let n = 12345;
//   let = count = 0;
//   while (n != 0) {
//     let d = n % 10;
//     count++;
//     n = parseInt(n / 10);
//   }
//   console.log(count);
// }
// countNum();

// 11. Find the sum of digits of a number.

// function sumOf(){
//     n=12345
//     sum=0
//     while(n!=0){
//         let ld=n%10;
//         sum+=ld
//         n=parseInt(n/10);
//     }
//     console.log(sum)
// }
// sumOf()

// 12. Reverse a number.

// function Reverse() {
//  let  n = 12345;
//  let R=0
//   while (n != 0) {
//     let d=n%10;
//     R=R*10+d
//     n=parseInt(n/10)
//   }
//   console.log(R)
// }
//  Reverse()

//13. Check whether a number is a palindrome.
// function palindrome() {
//   let n = 1211;
//   let R = 0;
//   let num=n
//   while (n != 0) {
//     let ld = n % 10;
//     R = R * 10 + ld;
//     n = parseInt(n / 10);
//   }
//   if(R==num){
//     console.log("palidrome")
//   }
//   else{
//     console.log("not a palidrome")
//   }
// }
// palindrome()

//14. Check whether a number is prime.
// function prime(){
//     let n=90
//    let  count=0
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//         count++
//         }
//     }
//     if(count==2){
//         console.log("prime")
//     }
//     else{
//         console.log("not a prime")
//     }
// }
//  prime()

// // 15. Print all prime numbers from 1 to 100.
// for (let i = 1; i <= 110; i++) {
//   count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       count++;
//     }
//   }
//     if (count == 2) {
//         console.log(i,"Prime number");
//     }
// }
//Named Function – Without Input (Arguments) & Without Return
//1  even or odd
// function check(){
//     let n=5
//     if(n%2==0){
//         console.log("even");   
//     }
//     else{
//         console.log("odd"); 
//     }
// }
// check()

//Named Function – With Input (Arguments) & Without Return
// function check(n){
//     if(n%2==0){
//         console.log(n,"even");
//     }
//     else{
//         console.log(n,"odd");
        
//     } 
// }
// check(5)
// check(4)

// Named Function – Without Input (Arguments) & With Return
// function check(){
//     let a=5
//     if(a%2==0){
//         return a,"even"
//     }
//     else{
//        return a,"odd"

//     }}
//  let b=check()
//  console.log(b);


// Named Function – With Input (Arguments) & With Return
// function check(n){
//     if(n%2==0){
//           return [n,"even"]
//     }
//     else{
//         return [n,"odd"]
//     }
// }
// let a=check(5)
// console.log(a);


//2   check Positive, Negative or Zero
//Named Function – Without Input (Arguments) & Without Return
// function positive(){
//     let a=6
//     if(a>0){
//         console.log(a,"positive");
        
//     }
//     else if(a<0){
//         console.log(a,"negative");  
//     }
//     else{
//         console.log(a,"zero"); 
//     }
// }
// positive()

//Named Function – With Input (Arguments) & Without Return
// function positive(n){
// if(n>0){
//     console.log(n ,"is positive" );
// }
// else if(n<0){
//     console.log(n,"is negative"); 
// }
// else{
//     console.log("zero");
    
// }
// }
// positive(0)


//Named Function – Without Input (Arguments) & With Return
// function positive(){
//     let a=-1
//     if(a>0){
//        return a,"is positive" 
//     }
//     else if(a<0){
//         return a, "is negative"
//     }
//     else{
//         return "zero"
//     }
// }
// console.log(positive());

//Named Function – With Input (Arguments) & With Return
// function check(a){
//     if(a>0){
//         return a,"is positive" 
//     }
//     else if(a<0){
//         return a ,"is negative"
//     }
//     else{
//         return "zero"
//     }
// }
// let b=check(-2)
// console.log(b);

//3 print 1 to n

//Named Function – Without Input (Arguments) & Without Return
// function rama(){
//     for(let i=1;i<=10;i++){
//         console.log(i);
        
//     }
// }
// rama()


//Named Function – With Input (Arguments) & Without Return
// function rama(n){
// for(let i=1;i<=n;i++){
//     console.log(i);  
// }
// }
// rama(10)



//Named Function – Without Input (Arguments) & With Return
// function rama(){
//     let a=[]
//     for(let i=1;i<=10;i++){
//         a.push(i)
//     }
//  return a  
// }
// let b=rama()
// console.log(b);


//Named Function – With Input (Arguments) & With Return
// function rama(n){
// let a=[]
// for(let i=1;i<=n;i++){
//      a.push(i)
// }
// return a
// }
// console.log(rama(5));

//4 sum of numbers
//Named Function – Without Input (Arguments) & Without Return
// function sum(){
//     sum=0
//     for(let i=1;i<=5;i++)
//         sum=sum+i
//     console.log(sum);
// }
// sum()
//Named Function – With Input (Arguments) & Without Return
// function rama(n){
// sum=0
// for(let i=1;i<=n;i++){
//     sum=sum+i
// }
// console.log(sum);
// }
// rama(5)

//Named Function – Without Input (Arguments) & With Return
// function rama(){
// sum=0
// for(let i=1;i<=5;i++){
//     sum=sum+i
// }
// return sum
// }
// let b=rama()
// console.log(b);
//Named Function – With Input (Arguments) & With Return
// function rama(n){
//     sum=0
//     for(let i=1;i<=n;i++){
//          sum=sum+i
//     }
//     return sum
// }
// let b=rama(5)
// console.log(b);

//5  Multiplication Table
// Named Function – WithoutInput (Arguments) & Without Return
// function table(){
//     let a=2
//     for(let i=1;i<=10;i++){
//         console.log("2 x ",i ,"=",2*i);  
//     }
// }
// table()

// Named Function – WithInput (Arguments) & Without Return
// function table(n){
//     for(let i=1;i<=10;i++){
//         console.log(n, "x" ,i ,"=",n *i);
        
//     }
// }
// console.log(table(2));


// 6 count even numbers
// Named Function – Without Input (Arguments) & Without Return
// function even(){
//     count=0
//     for(let i=2;i<=10;i++){
//         if(i%2==0){
//             count=count+1
//             console.log(i);  
//         }
//     }
//     console.log(count);
// }
// even()

// Named Function – With Input (Arguments) & Without Return
// function even(n){
// count=1
// for(let i=1;i<n;i++){
//     if(i%2==0){
//           count=count+1
//           console.log(i); 
//     }
// }
// console.log(count);
// }
// even(10)

// Named Function – Without Input (Arguments) & With Return
// function even(){
// count=0
// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         count=count+1
//     }
// }
// return count
// }
//  console.log(even());

// Named Function – With Input (Arguments) & With Return
// function rama(n){
//     count=0
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//              count=count+1
//         }   
//     }
// return count
// }
// console.log(rama(10));


// . Reverse a Number
  
// Named Function – Without Input (Arguments) & Without Return

// function rev(){
// let a=1234543
// rev=0
// while(a>0){
//     b=a%10   
//     rev=rev*10+b  
//     a=parseInt(a/10)  
// }
// console.log(rev);
// }
// rev()


// Named Function – With Input (Arguments) & Without Return
// function rev(n){
//     rev=0
//     while(n>0){
//         a=n%10
//         rev=rev*10+a
//         n=parseInt(n/10)
//     }
// console.log(rev);
// }
// rev(12345)


//Named Function – Without Input (Arguments) & With Return
// function  rev(){
// let a=234567
//  rev=0
// while(a>0){  
//     b=a%10
//     rev=rev*10+b
//     a=parseInt(a/10)
// }
// return rev
// }
// console.log(rev());

// Named Function – With Input (Arguments) & With Return
//check prime or not
// function prime(a){
// count=0
// for(let i=1;i<=a;i++){
// if(a%i==0){
//       count=count+1
// }
// }
// if(count==2){
//     return "prime";
// }
// else{
//     return "not"
// }
// }
// console.log(prime(14));

//Named Function – Without Input (Arguments) & Without Return
//check armstrong
// function arm(){
//     let a=153
// let original=a
// sum=0
// count=0
// temp=a
// while(a>0){
//     a=parseInt(a/10)
//      count=count+1   
// }
// while(temp>0){
//      b=temp%10
//      sum=sum+b**count
//      temp=parseInt(temp/10)
//    }
// if(original==sum){
//     console.log("armstrong");   
// }
// else{
//     console.log("not");
    
// }
// }
// arm()

//print all prime num from 1 to 50

//Named Function – With Input (Arguments) & Without Return
// function prime(n){
//     for(let j=1;j<=n;j++)
// {
// let a=j
// count=0
// for(let i=1;i<=a;i++){
//     if(a%i==0){
//         count=count+1
//     }
// }
// if(count==2){
//     console.log(a);   
// }
// }
// }
// console.log(prime(50));



//Named Function – Without Input (Arguments) & With Return
// 6. Write a function to find and print the sum of numbers from 1 to 100
// function sum(){
// sum=0
// for(let i=1;i<=100;i++){
//     sum=sum+i
// }
// return sum
// }
// console.log(sum());

//Named Function – With Input (Arguments) & With Return
// Write a function to print it is Armstrong number or not
// function arm(n){
// let a=n
// original=a
// count=0
// sum=0
// temp=a

// while(temp>0){
//     c=temp%10
//     sum=sum+c**count
//     temp=parseInt(temp/10)
// }
// if(original==sum){
//     return ("armstrong");   
// }
// else{
//     return ("not");  
// }
// }
// console.log(arm(100));


//anynomous function
//find largest
//anynomous Function – Without Input (Arguments) & Without Return
// function large(){
//     let a=10
//     let b=25
//     let c=15
//     if(a>b && a>c){
//         console.log("a is big"); 
//     }
//     else if(b>a && b>c){
//         console.log(" b is big");
        
//     }
//     else{
//         console.log(" c is big");   
//     }
// }
// large()


//check leap year 
//anynomous Function – With Input (Arguments) & Without Return
// function leap(n){
// if(((n%4==0) && (n%100!=0))||(n%400==0)){
//     console.log(n,"leap year"); 
// }
// else{
//     console.log("not leap year");
// }
// }
// leap(2005)

//count digits of a number
//anynomous Function – Without Input (Arguments) & With Return
// function count(){
// count=0
// let a=1234567
// while(a>0){
//     b=a%10
//     count=count+1
//     a=parseInt(a/10)
// }
// return count
// }
// console.log(count());

//anynomous Function – With Input (Arguments) & With Return
//5. Find the largest digit
// function small(a,b,c){
// if(a<b && a<c){
//     console.log("a is   small");  
// }
// else if(b<a && b<c){
//     console.log(" b is small");  
// }
// else{
//     console.log(" c is small");  
// }
// }
// console.log(small(10,20,30));

//arrow function
//Function – Without Input (Arguments) & Without Return
//Find the largest digit
// let c=()=>{
//     let a=12
//     let b=13
//     if(a>b){
//         console.log("a is big");      
//     }
//     else{
//         console.log("b is big");      
//     }
// }
// c()

//with input &without return
// let a=(a,b)=>{
// if(a>b){
//     console.log(" a is big");   
// }
// else{
//     console.log(" b is big");  
// }
// }
// a(10,20)

//withoutinput & with return
// let a=()=>{
// let a=12
// let b=13
// if(a>b){
//     return "a is big"
// }
// else{
//     return " b is bigg"
// }
// }
// console.log(a());



// Arrow Function Without Input & Without Return
//1 Print numbers from 40 to 1.
// let nums = () => {
//     for (let i = 40; i >= 1; i--) {
//         console.log(i);
//     }
// };
// nums();


//2. Return the product of numbers from 1 to 5.
// let b = () => {
//     let b = 1;
//     for (let i = 1; i <= 5; i++) {
//         b= b * i;
//     }
//     return b;
// };
// console.log(b());



























 







 




