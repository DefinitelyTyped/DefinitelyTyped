import moment = require("moment-timezone");
import strftime2 = require("moment-strftime2");
strftime2.installTo(moment);

moment("2016-10-10 12:34:56.135 +02:00").strftime("%d %o #d #o"); // "10 %o #d #o"
strftime2.separator = "$";
strftime2.modifiers.o = "DD";
moment("2016-10-10 12:34:56.135 +02:00").strftime("%d %o #d #o"); // "%d %o 10 10"
