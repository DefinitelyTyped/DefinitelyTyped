import { get12, get24 } from 'time-ampm'
let t1 = "6";
let time1 = get12(t1) //6 am
let t2 = "6 am"
let time2 = get24(t2) //6