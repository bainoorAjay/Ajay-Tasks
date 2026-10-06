// class Hospital{
//     static Hospital= "KIMS"
//     static emergency_no=1200

// const Model = require("app/lib/Model")

//     constructor(patient_name,patient_age,patientld,disease,doctorName,roomNum){
//                 this.patient_name=patient_name
//                 this.patient_age=patient_age
//                 this.patientld=patientld
//                 this.disease=disease
//                 this.doctorName=doctorName
//                 this.roomNum=roomNum

//     }

//     displyaDe(){
//         console.log("Hospital Name",Hospital.Hospital)
//         console.log("Enegerncy number",Hospital.emergency_no)
//         console.log("Patient-Name",this.patient_name)
//         console.log("patient Age",this.patient_age)
//         console.log("patient-Ld",this.patientld)
//         console.log( "Disease",this.disease)
//         console.log("Doctor's name",this.doctorName)
//         console.log("Room number = ",this.roomNum)

//     }
// }


// let h1 =new Hospital("Ajay",22,"p101","chickenPox","varun",22)
// console.log("----------patient one details-----------")
// h1.displyaDe()


// let h2 = new Hospital ("rahul ",24,"p103","typhoid","Ajay",20)
// console.log("----------patient two details-----------")
// h2.displyaDe()




//2.

// class Flight{
//    static flight="AirIndia"
//    static country="India"

//     constructor(flightNumber,passName,source,destintation,seatNum,ticketPrice){
//             this.flightNumber=flightNumber
//             this.passName=passName
//             this.source=source
//             this.destintation=destintation
//             this.seatNum=seatNum
//             this.ticketPrice=ticketPrice

//     }
//     displayDe(){
//         console.log(Flight.flight)
//         console.log(Flight.country)
//         console.log("Flight Number",this.flightNumber)
//         console.log("passenger name",this.passName)
//         console.log("source",this.source)
//         console.log("destination",this.destintation)
//         console.log("seatnumber",this.seatNum)
//         console.log("ticketPRice",this.ticketPrice)
//     }
// }
// let f1=new Flight("1B70PS","Ajay","Hyderabad","Mumbai","12C",2500)
// console.log("---------First Passanger Details-----------")
// f1.displayDe()



//3.

// class Laptop {
//     static brand = "hp"
//     static processer = "i3"
//     constructor(ram, rom, model, battery, price) {
//         this.ram = ram
//         this.rom = rom
//         this.model = model
//         this.battery = battery
//         this.price = price
//     }
//     displayDe() {
//         console.log(Laptop.brand)
//         console.log(Laptop.processer)
//         console.log(this.ram)
//         console.log(this.rom)
//         console.log(this.model)
//         console.log(this.battery)
//         console.log(this.price)
//     }
// }
// let L1 = new Laptop("254", "8", "I3", "2500amh" ,"45000")
// L1.displayDe()

// let L2 =new Laptop("450",12,"i5","2500amh",65000)
// L1.displayDe()