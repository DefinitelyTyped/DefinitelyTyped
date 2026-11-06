import PasoonateModule = require("pasoonate");
import type { CalendarManager, DateTimeParts, Duration } from "pasoonate";

const Pasoonate = PasoonateModule.default;
const calendar: CalendarManager = Pasoonate.make(1, 1).jalali("1405-01-01 12:30:00");
const dateTime: DateTimeParts = calendar.getDateTime();
const difference: Duration = calendar.diff(calendar.clone());
const formatted: string = calendar.addDay(1).format("yyyy-MM-dd");
const epoch: number = Pasoonate.J1970;

// @ts-expect-error
calendar.addDay("1");

void dateTime;
void difference;
void formatted;
void epoch;
