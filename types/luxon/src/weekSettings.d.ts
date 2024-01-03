import { WeekdayNumbers } from "./datetime";

export interface WeekSettings {
    firstDay: WeekdayNumbers;
    minimalDays: WeekdayNumbers;
    weekend: WeekdayNumbers[];
}
