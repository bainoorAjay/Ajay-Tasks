// 1) write a program to add two numbers
function addNum() {
  //input
  let a = parseInt(document.getElementById("n1").value);
  let b = parseInt(document.getElementById("n2").value);
  //process
  sum = a + b;
  //output
  document.getElementById("res").value = sum;
}

//2) write a program to display average of 3numbers

function avgThree() {
  let a = parseInt(document.getElementById("n4").value);
  let b = parseInt(document.getElementById("n5").value);
  let c = parseInt(document.getElementById("n6").value);

  let sum = a + b + c;
  let avg = sum / 3;
  document.getElementById("resu").value = avg;
}

//4) find the average of n natural numbers

function avgNum() {
  let a = parseInt(document.getElementById("a").value);
  let sum = (a * (a + 1)) / 2;
  let avg = sum / a;
  document.getElementById("resul").value = sum;
}

//5)  Find the missing angle in triangle when two angles are provided
function twoAngle() {
  let a = parseInt(document.getElementById("n7").value);
  let b = parseInt(document.getElementById("n8").value);
  let sum = a + b;
  let missing = 180 - sum;
  document.getElementById("result").value = missing;
}
//6 
function PercentageOf() {
  let p = parseInt(document.getElementById("na").value);
  let t = parseInt(document.getElementById("nb").value);
  let profit = ((p - t) / t) * 100;
  document.getElementById("res1").value = profit;
}
//7

// let basic_salary=20000
// let Bouns=10
// let insentive=5
// let bp=(Bouns/100)*basic_salary
// let i = (insentive/100)*basic_salary
// let gross = basic_salary+bp+i
// console.log(gross)



// let basicsalary=35000
// let insentive=20
// let bouns=5
// let pf=2
// let health=1
// let bp=(bouns/100)*basicsalary
// let i=(insentive/100)*basicsalary
// let gross=basicsalary+bp+i
// console.log(gross)


let pf_per=(pf/100)*basicsalary
let health_per=(health/100)*basicsalary
let decuction=(pf_per+health_per);
let amount = gross-decuction
console.log(amount)


// let n1=234
// let last = (n1%10)
// console.log("last number of 234 =",last)


// let n1=2345
// let last =parseInt((n1/10))    
// console.log(last)


let a=10
let n=90
console.log("BEFORE")
console.log(a);
console.log(n);


let c;
 c=a
 a=n
 n=c
console.log("AFTER")
console.log(a);
console.log(n);
