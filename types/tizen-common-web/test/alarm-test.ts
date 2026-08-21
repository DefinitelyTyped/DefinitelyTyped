import { alarm, AlarmAbsolute } from "tizen-common-web";

const date = new Date(2014, 0, 1, 8, 0);
const alarm1 = new AlarmAbsolute(date);
tizen.alarm.add(alarm1, "appId");

const alarm2 = new AlarmAbsolute(date, ["SA", "SU"]);
tizen.alarm.add(alarm2, "appId");

// deprecated
// const alarm3 = new AlarmAbsolute(date, 12345);
// tizen.alarm.add(alarm3, "appId");
