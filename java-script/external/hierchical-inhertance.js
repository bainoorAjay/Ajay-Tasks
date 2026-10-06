class Parent{
    m1(){
        console.log("parent from M1")

    }
}

class Child extends Parent{
    m2(){
        console.log("Child from M2")
    }
}

class Child2 extends Parent{
    m3(){
        console.log("child2 from M3")
    }
}

let first = new Child()
first.m1()
first.m2()
console.log("------------------")
let first1=new Child2()
first1.m1()
// first1.m2()
first1.m3()

