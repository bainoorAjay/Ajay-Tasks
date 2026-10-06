 //1.......
 //i)
 // class  Vechile{
//     constructor(name,model,price){
//         this.name=name
//         this.model=model
//         this.price=price
//     }
//     display(){
//         console.log(this.name)
//         console.log(this.model)
//         console.log(this.price)
//     }
// }
// // let v= new Vechile
// // 
// class Car extends Vechile{
//     constructor(name,model,price){
//         super(name,model,price)
//     }
//     displayDe(){
//         super.display()
//         console.log("-----------------------------------------")
//     }

// }
// let C= new Car("maruthi","swift",20000)
// C.display()
// console.log("-------")
// C.displayDe()


// let c1 =new Car("bmw","s3",3000)
// c1.display()
// console.log("----")
// c1.displayDe()

//ii)----

// class cricket {
//     constructor(player, age, tag) {
//         this.player = player
//         this.age = age
//         this.tag = tag

//     }
//     displayDe() {
//         console.log(this.player)
//         console.log(this.age)
//         console.log(this.tag)
//     }
// }
// class Red_ball extends cricket {
//     constructor(player, age, tag) {
//         super(player, age, tag)

//     }
//     displayDetails() {
//         super.displayDe()
//     }

// }
 


// let ball=new Red_ball("Virat",38,"king")
// ball.displayDe()
// console.log("------")
// ball.displayDetails()

// let ball2=new Red_ball("Rohit",39,"hitman")
// ball2.displayDe()
// console.log("-------")
// ball2.displayDetails()


//iii)------
// class State{
//   constructor(name,dist,mandal){
//     this.name=name
//     this.dist=dist
//     this.mandal=mandal
//   }
//   displayDe(){
//     console.log(this.name)
//     console.log(this.dist)
//     console.log(this.mandal)
//   }
// }

// class City  extends State{
//   constructor(name,dist,mandal){
//           super(name,dist,mandal)
//   }
//   displayDet(){
//     super.displayDe()
//   }
// }

// let s1=new State("telangana","nizamabad","bodhan")
// console.log("-------")
// s1.displayDe()
// // console.log("-------")
// let c1=new City("telangana-1","nizamabad-1","bodhan-1")
// console.log("--------")
// c1.displayDet()


//2..
// class Red_ball{
//   b1(){
//     console.log("this Single Inheritance")
//   }
// }
// let ball1=new Red_ball()
// ball1.b1()

// class White_ball{
//   white(){
//     console.log("this is white ball")
//   }
// }

// let b=new White_ball()
// b.white()




