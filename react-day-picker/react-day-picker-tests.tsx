/// <reference path="react-day-picker.d.ts" />
/// <reference path="../react/react-global.d.ts" />

import DayPicker2 from 'react-day-picker';

function isSunday(day: Date) {
    return day.getDay() === 0;
}

// make sure global variable version works
function MyComponent2() {
    return <DayPicker initialMonth={ new Date(2016, 1) } modifiers={{ isSunday }} />
}

// make sure imported version works
function MyComponent() {
    return <DayPicker2 initialMonth={ new Date(2016, 1) } modifiers={{ isSunday }} />
}

const localeUtils = {
    formatMonthTitle: (d: Date) => 'month_title',
    formatWeekdayShort: (i: number) => 'weekday_short',
    formatWeekdayLong: (i: number) => 'weekday_long',
    getFirstDayOfWeek: () => 0
};

let element = <DayPicker2 initialMonth= { new Date(2016, 1) } localeUtils={localeUtils} modifiers= {{ isSunday }} />
