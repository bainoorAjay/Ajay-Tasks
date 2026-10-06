function addValue(){
    var a=parseInt(document.getElementById("num1").value);
var b=parseInt(document.getElementById("num2").value);
var sum=a+b;
document.getElementById("res").value=sum
}
function subValue(){
    var a=parseInt(document.getElementById("num1").value);
var b=parseInt(document.getElementById("num2").value);
var sum=a-b;
document.getElementById("res").value=sum
}
function multiValue(){
    var a=parseInt(document.getElementById("num1").value);
var b=parseInt(document.getElementById("num2").value);
var sum=a*b;
document.getElementById("res").value=sum
}
function divValue(){
    var a=parseInt(document.getElementById("num1").value);
var b=parseInt(document.getElementById("num2").value);
var sum=a%b;
document.getElementById("res").value=sum
}