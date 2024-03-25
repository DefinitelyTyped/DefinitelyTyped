let {get12,get24} = require('time-ampm')
let t1 = "6" ;
console.log(get12(t1))  //6 am
let t2 = "6 am"
console.log(get24(t2)) //6
