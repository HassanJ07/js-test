var num = 5;
var num1 = 24;
let result = num1 % num;
console.log(result)
let name ="Hassan";
let sirName = "Fakkus";
console.log ("My name is "+ name +" "+sirName)

let price = 200;
let tva = 0.21;
let result3 = price +price * tva;
console.log(result3)
//one way of writting fuction
const fullPrice = (price, tva) => {
    let result = price + price * tva
    return result;
}
console.log(fullPrice(200, 0.21))

//another way of writting functions
function fullPrice2(price, tva) {
    let result = price + price * tva;
    return result;
}
console.log(fullPrice2(200, 0.21))



//Surface of a circle
let radius = 15;
let p = 3.14;
let surface = radius * radius * p;
console.log(surface)
//conversion time to seconds

function conversion (seconds, minutes, hours) {
    let result = (seconds) + (minutes * 60) + (hours * 3600)
    return result;
}
console.log(conversion(0, 0, 365));