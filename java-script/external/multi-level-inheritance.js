// class A{
//     m1(){
//         console.log("method from M1")
//     }
// }

// const { extend } = require("my/src/meta")

// class B extends A{
//     m2(){
//         console.log("method Form M2")
//     }
// }

// class C extends B{
//     m3(){
//         console.log("method from m3")
//     }
// }

// let c1=new C()
// c1.m3()
// c1.m2()
// c1.m1()


// class Grandparent {
//     house(){
//         console.log("I Own House")
//     }
// }

// class Parent extends Grandparent{
//     car(){
//         console.log("I own Car")
//     }    
// }

// class Child extends Parent{
//     money(){
//         console.log("I own Money")
//     }
// }

// let child=new Child()
// child.money()
// child.car()
// child.house()

// let parent=new Parent()
// parent.car()
// parent.house()
// parent.money()

// let grand=Grandparent()
// grand.house()
// grand.car()
// grand.money()





// class Mobile{
//     call(){
//         console.log("I make Call")
//     }
//     text(){
//         console.log("i will text")
//     }
// }

// class Smartphone extends Mobile{
//     camera(){
//         console.log("i take photos")
//     }
// }

// class Latestph extends Smartphone{
//     internet(){
//         console.log("i provide internet")
//     }
// }

// let phone=new Latestph()
// phone.call()
// phone.text()
// phone.camera()
// phone.internet()


// console.log("------------")

// let phone2=new Smartphone()
// phone2.call()
// phone2.text()
// phone2.camera()


// console.log("------------")


// let phone3=new Mobile()
// phone3.call()
// phone3.text()






// class BankDe{
//     constructor(acchd_num,acchd_name){
//         this.acchd_num=acchd_num
//         this.acchd_name=acchd_name
//     }
//     displayDe(){
//         console.log("Account Number",this.acchd_num)
//         console.log("Account Holder Name",this.acchd_name)
//     }
// }

// class Bankblc extends BankDe{
//     constructor(acchd_name,acchd_num,acc_blc){
//         super(acchd_num,acchd_name)
//         this.acc_blc=acc_blc
//     }

//     displayblc(){
//         super.displayDe()
//         console.log("Account Balance ",this.acc_blc)
//     }
// }

// class Bankty extends Bankblc{
//     constructor(acchd_num,acchd_name,acc_blc,acc_typ){
//         super(acchd_num,acchd_name,acc_blc)
//         this.acc_typ=acc_typ
//     }
//     displaybankty(){
//         super.displayblc()
//         console.log("Account Type",this.acc_typ)
//     }
// }

// let b1 =new Bankty(1209745678,"jayy",608,"savings")
// b1.displaybankty()