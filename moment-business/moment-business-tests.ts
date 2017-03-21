import moment = require("moment-business");

let a = moment.momentbusiness.weekDays(moment(), moment());
let b = moment.momentbusiness.weekendDays(moment(), moment());
let c = moment.momentbusiness.addWeekDays(moment(), 1);
let d = moment.momentbusiness.subtractWeekDays(moment(), 1);
let e = moment.momentbusiness.isWeekDay(moment());
let f = moment.momentbusiness.isWeekendDay(moment());