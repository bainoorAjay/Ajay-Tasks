// do{
// console.log("do wile")
// }while(false)

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);


// let i=5
// let sum=0
// do{
    
//     sum=sum+i
//     i++
  
// }while(i<=10)
//   console.log(sum)


let ans =""
do{
    let n = parseInt(prompt("enter a number  to check even ore odd..."))
    if(n%2==0){
        alert("even")
    }
    else{
        alert("odd")
    }
    ans=prompt("do you want to check another number (YES / NO)")
}while(ans=="y")
