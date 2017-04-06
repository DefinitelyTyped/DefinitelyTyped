import * as React from "react";
import * as moment from "moment";

import { 
        CalendarDay, 
        CalendarMonth, 
        CalendarMonthGrid, 
        SingleDatePickerInput, 
        SingleDatePicker, 
        DayPicker, 
        DayPickerRangeController, 
        DateRangePickerInput, 
        DateRangePickerInputController, 
        DateRangePicker,     
        isInclusivelyAfterDay,
        isInclusivelyBeforeDay,
        isNextDay,
        isSameDay,
        toISODateString,
        toLocalizedDateString,
        toMomentObject} from "react-dates";


class CalendarDayRenderingMinimumTest extends React.Component<{}, {}> {
    render() {
        return <CalendarDay  />
    }
}

class CalendarDayRenderingFullTest extends React.Component<{}, {}> {
    render() {
        return <CalendarDay day={moment()} 
                            isOutsideDay={false} 
                            renderDay={day => day.toString()}
                            onDayClick={(day,e) => {}}
                            onDayMouseEnter={(day,e) => {}}
                            onDayMouseLeave={(day,e) => {}}                            
                    />
    }
}

class CalendarMonthMinimumTest extends React.Component<{}, {}> {
    render() {
        return <CalendarMonth  />
    }
}

class CalendarMonthFullTest extends React.Component<{}, {}> {
    render() {
        return <CalendarMonth enableOutsideDays={true}
                              isVisible={true}
                              month={moment()}
                              orientation="horizontal"
                              monthFormat="MM"
                              renderDay={day => day.toString()}
                              onDayClick={(day,e) => {}}
                              onDayMouseEnter={(day,e) => {}}
                              onDayMouseLeave={(day,e) => {}}                            
                    />
    }
}




class SingleDatePickerInputMinimumTest extends React.Component<{}, {}> {
    render() {
        return <SingleDatePickerInput id="SingleDatePickerInput"  />
    }
}

class SingleDatePickerInputFullTest extends React.Component<{}, {}> {
    render() {
        return <SingleDatePickerInput
                    id="SingleDatePickerInput" 
                    disabled={false}
                    displayValue="SingleDatePicker"
                    focused={false}
                    inputValue="test"
                    onChange={e => {}}
                    onClearDate={e => {}}
                    onFocus={e => {}}
                    onKeyDownShiftTab={e => {}}
                    onKeyDownTab={e => {}}
                    phrases={{clearDate: "clear"}}
                    placeholder="test"
                    required={false}
                    screenReaderMessage="arial-test"
                    showCaret={true}
                    showClearDate={true}
                    />
    }
}




class SingleDatePickerMinimumTest extends React.Component<{}, {}> {
    render() {
        return <SingleDatePicker id="SingleDatePickerInput"  />
    }
}

class SingleDatePickerFullTest extends React.Component<{}, {}> {
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
                    isDayBlocked={(day:any)=> false}
                    isOutsideRange={(day:any)=> false}
                    keepOpenOnDateSelect={true}
                    navNext="next"
                    navPrev="prev"
                    withPortal={false}
                    onDateChange={d => {}}
                    focused={false}
                    phrases={{closeDatePicker: <span>Close</span>}}
                    reopenPickerOnClearDates={true}
                    screenReaderInputMessage="arial-test"
                    withFullScreenPortal={true}
                    onFocusChange={arg => {}}
                    onNextMonthClick={e => {}}
                    onPrevMonthClick={e => {}}
                    numberOfMonths={2}
                    orientation="horizontal"
                    monthFormat="MM"
                    renderDay={day => day.toString()}
                    />
    }
}



class DayPickerRangeControllerMinimumTest extends React.Component<{}, {}> {
    render() {
        return <DayPickerRangeController  />
    }
}

class DayPickerRangeControllerFullTest extends React.Component<{}, {}> {
    render() {
        return <DayPickerRangeController
                    startDate={moment()} 
                    endDate={moment()} 
                    focusedInput="startDate"
                    initialVisibleMonth={() => moment()}
                    hidden={false}
                    isDayBlocked={(day:any)=> false}
                    isDayHighlighted={(day:any)=> false}
                    isOutsideRange={(day:any)=> false}
                    keepOpenOnDateSelect={true}
                    minimumNights={3}
                    navNext="next"
                    navPrev="prev"
                    withPortal={false}
                    onDatesChange={arg => {}}
                    onFocusChange={arg => {}}
                    onNextMonthClick={e => {}}
                    onPrevMonthClick={e => {}}
                    onOutsideClick={e => {}}
                    enableOutsideDays={true}
                    numberOfMonths={2}
                    orientation="horizontal"
                    monthFormat="MM"
                    renderDay={day => day.toString()}
                    />
    }
}


class DayPickerTest extends React.Component<{}, {}> {
    render() {
        return <DayPicker  />
    }
}

class DayPickerFullTest extends React.Component<{}, {}> {
    render() {
        return <DayPicker
                    onDayClick={(day,e)=> {}}
                    onDayMouseEnter={(day,e)=>{}}
                    onDayMouseLeave={(day,e)=>{}}
                    initialVisibleMonth={() => moment()}
                    hidden={false}
                    navNext="next"
                    navPrev="prev"
                    withPortal={false}
                    onNextMonthClick={e => {}}
                    onPrevMonthClick={e => {}}
                    onOutsideClick={e => {}}
                    enableOutsideDays={true}
                    numberOfMonths={2}
                    orientation="horizontal"
                    monthFormat="MM"
                    renderDay={day => day.toString()}
                    />
    }
}




class DateRangePickerInputMinimumTest extends React.Component<{}, {}> {
    render() {
        return <DateRangePickerInput startDateId="id1" endDateId="id2"  />
    }
}

class DateRangePickerInputFullTest extends React.Component<{}, {}> {
    render() {
        return <DateRangePickerInput
                    customArrowIcon="<"
                    customInputIcon=">"
                    disabled={false}
                    startDateId="id1" 
                    endDateId="id2"
                    startDateValue={"1.1.2020"}
                    endDateValue={"1.1.2020"}
                    startDatePlaceholderText="placeholder"
                    endDatePlaceholderText="placeholder"
                    isEndDateFocused={false}
                    isStartDateFocused={false}
                    onClearDates={e => {}}
                    onEndDateChange={e => {}}
                    onEndDateFocus={e => {}}
                    onEndDateTab={e => {}}
                    onStartDateChange={e => {}}
                    onStartDateFocus={e => {}}
                    onStartDateShiftTab={e => {}}
                    showDefaultInputIcon={true}
                    required={false}
                    screenReaderMessage="arial-test"
                    showCaret={true}
                    showClearDates={true}
                    phrases={{clearDates: "clear"}}
                    />
    }
}





class DateRangePickerInputControllerMinimumTest extends React.Component<{}, {}> {
    render() {
        return <DateRangePickerInputController startDateId="id1" endDateId="id2"  />
    }
}

class DateRangePickerInputControllerFullTest extends React.Component<{}, {}> {
    render() {
        return <DateRangePickerInput
                    customArrowIcon="<"
                    customInputIcon=">"
                    disabled={false}
                    startDateId="id1" 
                    endDateId="id2"
                    startDateValue={"1.1.2020"}
                    endDateValue={"1.1.2020"}
                    startDatePlaceholderText="placeholder"
                    endDatePlaceholderText="placeholder"
                    isEndDateFocused={false}
                    isStartDateFocused={false}
                    onClearDates={e => {}}
                    onEndDateChange={e => {}}
                    onEndDateFocus={e => {}}
                    onEndDateTab={e => {}}
                    onStartDateChange={e => {}}
                    onStartDateFocus={e => {}}
                    onStartDateShiftTab={e => {}}
                    showDefaultInputIcon={true}
                    required={false}
                    screenReaderMessage="arial-test"
                    showCaret={true}
                    showClearDates={true}
                    phrases={{clearDates: "clear"}}
                    startDate="1.1.2020"
                    endDate="1.1.2020"
                    />
    }
}











class DateRangePickerMinimumTest extends React.Component<{}, {}> {
    render() {
        return <DateRangePicker startDateId="id1" endDateId="id2"  />
    }
}

class DateRangePickerFullTest extends React.Component<{}, {}> {
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
                    phrases={{clearDates: "clear", closeDatePicker: "close"}}
                    startDate="1.1.2020"
                    endDate="1.1.2020"
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
                    numberOfMonths={2}
                    orientation="horizontal"
                    monthFormat="MM"
                    renderDay={day => day.toString()}
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
        
        