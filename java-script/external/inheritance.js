// class Parent{
//     brave(){
//         console.log("iam Brave")
//     }
// }
// class Child extends Parent{
//     artist(){
//         console.log("iam artist")
//     }
// }
// let c= new Child()
// c.artist()
// c.brave()




// // single inheritance 

// class A{
//     m1(){
//         console.log("iam m1 from super")
//     }
// }

// class B extends A{
//     m2(){
//         console.log("im a m2 ")
//     }
// }

// let b=new B()
// b.m1()
// b.m2()






// class Parent{
//     static ins_Name="innomatics"
// }
// class Child extends Parent{}
// console.log(Parent.ins_Name)
// console.log(Child.ins_Name)


// class Product{
//     displayDe(){
//         console.log(this.name)
//         console.log(this.price)
//     }

// }
// let P=new Product();



// class Laptop extends Product {
//     show_Det() {
//         console.log(this.ram)
//         console.log(this.price)
//     }
// }

// let l = new Laptop();
// l.ram = "12gb"
// l.price = 55000
// l.name="Product1"
// l.price=55000
// l.displayDe()
// l.show_Det()




// class Product {
//     displayDe() {
//         console.log(this.name)
//         console.log(this.price)
//     }

// }
// let p = new Product();
// p.name = "Product1"
// p.price = 55000

// p.displayDe()


// class Laptop extends Product {

// }
// let L = new Laptop
// L.displayDe()


// class Product{
//     constructor(name,price){
//         this.name=name
//         this.price=price

//     }
//     displayDe(){
//         console.log(this.name)
//         console.log(this.price)
//     }
// }
// let a= new Product("jy",1200)
// a.displayDe()





// class Product{
//     constructor(name ,price){
//         this.name=name
//         this.price=price
//     }
//     displayDe(){
//         console.log(this.name)
//         console.log(this.price)
//     }
// }
// class Laptop extends Product{}
// let lap=new Laptop("Laptop",34500)
// lap.displayDe()







// class product{
//     constructor(name,price){
//         this.name=name
//         this.price=price
//     }
//     displayDe(){
//         console.log(this.name)
//         console.log(this.price)
//     }
// }
// class Laptop extends product{
//     constructor(name ,price ,ram){
//         // this.name=name
//         // this.price=price
//          super(name,price)
//         this.ram=ram
       
//     }
//     displayDe(){
//         // console.log(this.name)
//         // console.log(this.price)

//         super.displayDe();
//         console.log(this.ram)
//     }
// }
// let a=new Laptop("hp",35000,"12gb")
// a.displayDe()







// class Inno{
//     name ="hero"
// }
// class Child{


// }
// let c1=new Child()
// console.log("this  is the child")



// class Parent{

// }
// let l1=new Parent()
// l1.fname="ajay"
// class Child{}

// let l2=new Child
// console.log(l2.fname)





// class Test{
//     m1(){
//         this.faname="ahero"

//     }
// }

// let t1=new Test()
// t1.m1()
// console.log(t1.faname)


// class Parent{
//     constructor(){
//         this.name="hero"
//     }
// }
// class Child extends Parent{

// }

// let p1=new parent()
// p1.name()



