import * as React from "react";
import moment = require("moment");

import {
        SingleDatePicker,
        DateRangePicker,
        DayPickerRangeController,
        isInclusivelyAfterDay,
        isInclusivelyBeforeDay,
        isNextDay,
        isSameDay,
        toISODateString,
        toLocalizedDateString,
        toMomentObject } from "react-dates";

class SingleDatePickerMinimumTest extends React.Component {
    render() {
        return <SingleDatePicker
                    id="SingleDatePickerInput"
                    date={moment()}
                    onDateChange={d => {}}
                    focused={false}
                    onFocusChange={arg => {}}
          />
    }
}

class SingleDatePickerFullTest extends React.Component {
    render() {
        return <SingleDatePicker
                    id="SingleDatePickerInput"
                    disabled={false}
                    displayFormat="dd.mm.yyyy"
                    anchorDirection="right"
                    date={moment()}
                    enableOutsideDays={true}
                    horizontalMargin={20}
                    initialVisibleMonth={() => moment()}
                    placeholder="test"
                    required={false}
                    showClearDate={true}
                    noBorder={true}
                    block={false}
                    isDayBlocked={(day:any)=> false}
                    isOutsideRange={(day:any)=> false}
                    keepOpenOnDateSelect={true}
                    navNext="next"
                    navPrev="prev"
                    hideKeyboardShortcutsPanel={true}
                    withPortal={false}
                    onDateChange={d => {}}
                    focused={false}
                    reopenPickerOnClearDates={true}
                    screenReaderInputMessage="arial-test"
                    withFullScreenPortal={true}
                    onFocusChange={arg => {}}
                    onNextMonthClick={e => {}}
                    onPrevMonthClick={e => {}}
                    firstDayOfWeek={0}
                    numberOfMonths={2}
                    orientation="horizontal"
                    monthFormat="MM"
                    renderDayContents={day => day.toString()}
                    verticalSpacing={4}
                    keepFocusOnInput={true}
                    verticalHeight={5}
                    regular={true}
                    small={true}
                    />
    }
}

class DateRangePickerMinimumTest extends React.Component {
    render() {
        return <DateRangePicker
                    startDate={moment()}
                    endDate={moment()}
                    onDatesChange={(arg)=> {}}
                    focusedInput="startDate"
                    onFocusChange={(arg) => {}}
                     />
    }
}


class DateRangePickerFullTest extends React.Component {
    render() {
        return <DateRangePicker
                    disabled={false}
                    startDateId="id1"
                    endDateId="id2"
                    startDatePlaceholderText="placeholder"
                    endDatePlaceholderText="placeholder"
                    showDefaultInputIcon={true}
                    required={false}
                    showClearDates={true}
                    noBorder={true}
                    block={false}
                    startDate={moment().add(3, 'days')}
                    endDate={moment().add(5, 'days')}
                    anchorDirection="left"
                    focusedInput="startDate"
                    minimumNights={2}
                    onDatesChange={arg => {arg.startDate; arg.endDate;}}
                    displayFormat="dd.mm.yyyy"
                    enableOutsideDays={true}
                    horizontalMargin={20}
                    initialVisibleMonth={() => moment()}
                    isDayBlocked={(day:any)=> false}
                    isOutsideRange={(day:any)=> false}
                    keepOpenOnDateSelect={true}
                    withPortal={false}
                    reopenPickerOnClearDates={true}
                    screenReaderInputMessage="arial-test"
                    withFullScreenPortal={true}
                    onFocusChange={arg => {}}
                    onNextMonthClick={e => {}}
                    onPrevMonthClick={e => {}}
                    firstDayOfWeek={0}
                    numberOfMonths={2}
                    orientation="horizontal"
                    monthFormat="MM"
                    renderDayContents={day => day.toString()}
                    />
    }
}

class DayPickerRangeControllerMinimumTest extends React.Component {
    render() {
        return <DayPickerRangeController
                    startDate={moment()}
                    endDate={moment()}
                    onDatesChange={(arg)=> {}}
                    focusedInput="startDate"
                    onFocusChange={(arg) => {}}
                    />
    }
}












const isInclusivelyAfterDayResult: boolean = isInclusivelyAfterDay(moment(),moment());
const isInclusivelyBeforeDayResult: boolean = isInclusivelyBeforeDay(moment(),moment());
const isNextDayDayResult: boolean = isNextDay(moment(),moment());
const isSameDayResult: boolean = isSameDay(moment(),moment());
const toISODateStringResult: string | null = toISODateString(moment(), "dd.mm.yyyy");
const toLocalizedDateStringResult: string | null = toLocalizedDateString(moment(), "dd.mm.yyyy");
const toMomentObjectResult: moment.Moment | null = toMomentObject(moment(), "dd.mm.yyyy");

