import moment from "moment";
import * as mb from "moment-business";

// $ExpectType number
mb.weekDays(moment(), moment());

// $ExpectType number
mb.weekendDays(moment(), moment());

// $ExpectType Moment
mb.addWeekDays(moment(), 1);

// $ExpectType Moment
mb.subtractWeekDays(moment(), 1);

// $ExpectType boolean
mb.isWeekDay(moment());

// $ExpectType boolean
mb.isWeekendDay(moment());
