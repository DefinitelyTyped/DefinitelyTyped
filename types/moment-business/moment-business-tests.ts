import moment = require("moment");
import * as mb from "moment-business";

mb.isWeekDay(moment());
mb.isWeekendDay(moment());
mb.addWeekDays(moment(), 1);
mb.subtractWeekDays(moment(), 1);
mb.weekDays(moment(), moment());
mb.weekendDays(moment(), moment());
