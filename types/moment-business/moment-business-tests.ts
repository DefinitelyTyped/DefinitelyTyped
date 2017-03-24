import * as moment from "moment";
import * as mb from "moment-business";
 
let a = mb.isWeekDay(moment())
let b = mb.isWeekendDay(moment());
let c = mb.addWeekDays(moment(), 1);
let d = mb.subtractWeekDays(moment(), 1);
let e = mb.weekDays(moment(), moment());
let f = mb.weekendDays(moment(), moment());
