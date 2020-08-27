import * as React from 'react';
import moment = require('moment');

import {
    CalendarDay,
    CalendarMonth,
    CalendarMonthGrid,
    DateRangePicker,
    DateRangePickerInput,
    DateRangePickerInputController,
    DayPicker,
    DayPickerRangeController,
    DayPickerSingleDateController,
    SingleDatePicker,
    SingleDatePickerInput,
    isInclusivelyAfterDay,
    isInclusivelyBeforeDay,
    isNextDay,
    isSameDay,
    toISODateString,
    toLocalizedDateString,
    toMomentObject,
} from 'react-dates';

const CalendarDayMinimumTest: React.FC = () => (
    <CalendarDay />
);

const CalendarDayFullTest: React.FC = () => (
    <CalendarDay
        ariaLabelFormat="MM d"
        day={moment()}
        daySize={50}
        isFocused={false}
        isOutsideDay={false}
        modifiers={new Set(['selected-span'])}
        onDayClick={(day, e) => {}}
        onDayMouseEnter={(day, e) => {}}
        onDayMouseLeave={(day, e) => {}}
        phrases={{
            chooseAvailableDate(phraseArg) {return phraseArg.date;}
        }}
        renderDayContents={(day, modifiers) => day.format('d')}
        tabIndex={0}
    />
)

const CalendarMonthMinimumTest: React.FC = () => (
    <CalendarMonth />
);

const CalendarMonthFullTest: React.FC = () => (
    <CalendarMonth
        dayAriaLabelFormat="MM d"
        daySize={50}
        enableOutsideDays={true}
        firstDayOfWeek={5}
        focusedDate={moment()}
        horizontalMonthPadding={5}
        isFocused={false}
        isVisible={true}
        modifiers={{'date': new Set(['selected-span'])}}
        month={moment()}
        monthFormat="MM"
        onDayClick={(day, e) => {}}
        onDayMouseEnter={(day, e) => {}}
        onDayMouseLeave={(day, e) => {}}
        onMonthSelect={(currentMonth, newMonthVal) => {}}
        onYearSelect={(currentMonth, newMonthVal) => {}}
        orientation="vertical"
        phrases={{
            dateIsSelected(phraseArg) { return phraseArg.date; }
        }}
        renderCalendarDay={props => <CalendarDay {...props} />}
        renderDayContents={(day, modifiers) => modifiers.size}
        renderMonthText={month => month.format('MMMM')}
        setMonthTitleHeight={height => {}}
        verticalBorderSpacing={5}
    />
);

const CalendarMonthGridMinimumTest: React.FC = () => (
    <CalendarMonthGrid />
);

const CalendarMonthGridFullTest: React.FC = () => (
    <CalendarMonthGrid
        dayAriaLabelFormat="MM d"
        daySize={50}
        enableOutsideDays={true}
        firstDayOfWeek={5}
        firstVisibleMonthIndex={7}
        focusedDate={moment()}
        horizontalMonthPadding={5}
        initialMonth={moment()}
        isAnimating={true}
        isFocused={false}
        isRTL={false}
        modifiers={{'month': {'date':  new Set(['selected-span'])}}}
        monthFormat="MM"
        numberOfMonths={3}
        onDayClick={(day, e) => {}}
        onDayMouseEnter={(day, e) => {}}
        onDayMouseLeave={(day, e) => {}}
        onMonthChange={(newMonth) => {}}
        onMonthTransitionEnd={(event) => {}}
        onYearChange={(newMonth) => {}}
        orientation="vertical"
        phrases={{
            dateIsSelected(phraseArg) { return phraseArg.date; }
        }}
        renderCalendarDay={props => <CalendarDay {...props} />}
        renderDayContents={(day, modifiers) => modifiers.size}
        renderMonthElement={({ isVisible, month, onMonthSelect, onYearSelect }) => null}
        setMonthTitleHeight={height => {}}
        transitionDuration={75}
        translationValue={46}
        verticalBorderSpacing={5}
    />
)

class DateRangePickerMinimumTest extends React.Component {
    render() {
        return (
            <DateRangePicker
                endDate={moment()}
                endDateId="endDateId"
                focusedInput="startDate"
                onDatesChange={arg => {}}
                onFocusChange={arg => {}}
                startDate={moment()}
                startDateId="startDateId"
            />
        );
    }
}

class DateRangePickerFullTest extends React.Component {
    render() {
        return (
            <DateRangePicker
                anchorDirection="left"
                appendToBody={false}
                block={false}
                disabled={false}
                displayFormat="dd.mm.yyyy"
                enableOutsideDays={true}
                endDate={moment().add(5, 'days')}
                endDateId="id2"
                endDatePlaceholderText="placeholder"
                focusedInput="startDate"
                horizontalMargin={20}
                initialVisibleMonth={() => moment().set('year', 2020)}
                isDayBlocked={day => false}
                isOutsideRange={day => false}
                keepOpenOnDateSelect={true}
                minimumNights={2}
                noBorder={true}
                onDatesChange={({ endDate, startDate }) => {
                }}
                onFocusChange={arg => {}}
                onNextMonthClick={e => {}}
                onPrevMonthClick={e => {}}
                reopenPickerOnClearDates={true}
                required={false}
                screenReaderInputMessage="arial-test"
                showClearDates={true}
                showDefaultInputIcon={true}
                startDateId="id1"
                startDatePlaceholderText="placeholder"
                startDate={moment().add(3, 'days')}
                withFullScreenPortal={true}
                withPortal={false}

                firstDayOfWeek={0}
                numberOfMonths={2}
                orientation="horizontal"
                monthFormat="MM"
                renderDayContents={day => day.toString()}
                onClose={final => {}}
                navPosition="navPositionTop"
                dayPickerNavigationInlineStyles={{ width: '10' }}
            />
        );
    }
}

const DateRangePickerInputMinimumTest: React.FC = () => (
    <DateRangePickerInput />
);

const DateRangePickerInputControllerMinimumTest: React.FC = () => (
    <DateRangePickerInputController />
);

const DayPickerMinimumTest: React.FC = () => (
    <DayPicker />
);

class DayPickerRangeControllerMinimumTest extends React.Component {
    render() {
        return (
            <DayPickerRangeController
                startDate={moment()}
                endDate={moment()}
                onDatesChange={arg => {}}
                focusedInput="startDate"
                onFocusChange={arg => {}}
                initialVisibleMonth={() => moment().add(2, 'months')}
            />
        );
    }
}

class DayPickerSingleDateControllerMinimumTest extends React.Component {
    render() {
        return (
            <DayPickerSingleDateController
                date={moment()}
                onDateChange={arg => {}}
                focused
                onFocusChange={arg => {}}
                initialVisibleMonth={() => moment().subtract(1, 'day')}
            />
        );
    }
}

class SingleDatePickerMinimumTest extends React.Component {
    render() {
        return (
            <SingleDatePicker
                id="SingleDatePickerInput"
                date={moment()}
                onDateChange={d => {}}
                focused={false}
                onFocusChange={arg => {}}
            />
        );
    }
}

class SingleDatePickerFullTest extends React.Component {
    render() {
        return (
            <SingleDatePicker
                id="SingleDatePickerInput"
                disabled={false}
                displayFormat="dd.mm.yyyy"
                anchorDirection="right"
                date={moment()}
                enableOutsideDays
                horizontalMargin={20}
                initialVisibleMonth={() => moment('January 1, 2020')}
                placeholder="test"
                required={false}
                showClearDate
                noBorder
                block={false}
                isDayBlocked={day => false}
                isOutsideRange={day => false}
                keepOpenOnDateSelect
                navNext="next"
                navPrev="prev"
                hideKeyboardShortcutsPanel
                withPortal={false}
                onDateChange={d => {}}
                focused={false}
                reopenPickerOnClearDate
                screenReaderInputMessage="arial-test"
                withFullScreenPortal
                onFocusChange={arg => {}}
                onNextMonthClick={e => {}}
                onPrevMonthClick={e => {}}
                firstDayOfWeek={0}
                numberOfMonths={2}
                orientation="horizontal"
                monthFormat="MM"
                renderDayContents={day => day.toString()}
                verticalSpacing={4}
                keepFocusOnInput
                verticalHeight={5}
                regular
                small
                navPosition="navPositionTop"
                dayPickerNavigationInlineStyles={{ width: '10' }}
            />
        );
    }
}

const SingleDatePickerInputMinimumTest: React.FC = () => (
    <SingleDatePickerInput id="SingleDatePickerInput" />
);

const isInclusivelyAfterDayResult: boolean = isInclusivelyAfterDay(moment(), moment());
// $ExpectError
const isInclusivelyAfterDayResultError: boolean = isInclusivelyAfterDay(moment(), 5);
const isInclusivelyBeforeDayResult: boolean = isInclusivelyBeforeDay(moment(), moment());
// $ExpectError
const isInclusivelyBeforeDayResultError: boolean = isInclusivelyBeforeDay(new Date(), moment());
const isNextDayDayResult: boolean = isNextDay(moment(), moment());
// $ExpectError
const isNextDayDayResultError: boolean = isNextDay(moment());
const isSameDayResult: boolean = isSameDay(moment(), moment());
// $ExpectError
const isSameDayResultError: boolean = isSameDay('January 1, 2020', moment());
const toISODateStringResult: string | null = toISODateString(moment(), 'dd.mm.yyyy');
const toISODateStringResultFromString: string | null = toISODateString('January 1, 2020');
const toISODateStringResultFromDate: string | null = toISODateString(new Date(), 'dd.mm.yyyy');
const toLocalizedDateStringResult: string | null = toLocalizedDateString(moment(), 'dd.mm.yyyy');
const toLocalizedDateStringResultFromString: string | null = toLocalizedDateString('January 1, 2020', 'dd.mm.yyyy');
const toLocalizedDateStringResultFromDate: string | null = toLocalizedDateString(new Date());
const toMomentObjectResult: moment.Moment | null = toMomentObject(moment());
const toMomentObjectResultFromString: moment.Moment | null = toMomentObject('January 1, 2020', 'dd.mm.yyyy');
const toMomentObjectResultFromDate: moment.Moment | null = toMomentObject(new Date(), 'dd.mm.yyyy');
