//global scope

// let myName="AJay"
// console.log("outside",myName)

// function gbscope(){
//     console.log(myName,"inside")
// }
//  gbscope()

//  if(true){
//     console.log(myName)
//  }
//

// local scope

// function myName() {
//   let name = "ajay";
//   console.log("inside name ", name);

//   if(true){
//     console.log("inside block", name);

//   }
// }
//  myName()



/// Block Scope
// function blockScope(){
//     if(true){
//     let name="Ajay"
//     console.log("inside block",name)
// }

// }
// blockScope()


// console.log("inside block",name)



// function blockScope(){
//     for (var i=1;i<=3;i++){
     
//     }
//    console.log(i)
// }
//  blockScope()



// let fname = "global scope"
// function name(){
//     // let fname ="local scope"
//     if(true){
//     // let fname="Block scope"
//     console.log(fname)
// }

// }



// function outer(){
//     console.log("outer")
//  function inner(){
//     console.log("inner")
//  }
//  inner()
// }
// outer()





let gvar="globa"
function outerFunction(){
    let lvar="local var -outer function";
    function innerFunction(){
        let ivar ="local var -inner function"


    // console.log(gvar)
    // console.log(ivar)
    // console.log(lvar)
    }
 
    innerFunction()
    // console.log(gvar)
    // console.log(ivar)//❌
    // console.log(lvar)
}
outerFunction()