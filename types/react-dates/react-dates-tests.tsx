import * as React from 'react';
import moment = require('moment');

import {
    SingleDatePicker,
    DateRangePicker,
    DayPickerRangeController,
    DayPickerSingleDateController,
    isInclusivelyAfterDay,
    isInclusivelyBeforeDay,
    isNextDay,
    isSameDay,
    toISODateString,
    toLocalizedDateString,
    toMomentObject,
} from 'react-dates';

class SingleDatePickerMinimumTest extends React.Component {
    render() {
        return <SingleDatePicker id="SingleDatePickerInput" onDateChange={d => {}} onFocusChange={arg => {}} />;
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
                enableOutsideDays={true}
                horizontalMargin={20}
                initialVisibleMonth={() => moment()}
                placeholder="test"
                required={false}
                showClearDate={true}
                noBorder={true}
                block={false}
                isDayBlocked={(day: any) => false}
                isOutsideRange={(day: any) => false}
                keepOpenOnDateSelect={true}
                navNext="next"
                navPrev="prev"
                hideKeyboardShortcutsPanel={true}
                withPortal={false}
                onDateChange={d => {}}
                focused={false}
                reopenPickerOnClearDate={true}
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
                navPosition="navPositionTop"
                dayPickerNavigationInlineStyles={{ width: '10' }}
            />
        );
    }
}

class DateRangePickerMinimumTest extends React.Component {
    render() {
        return (
            <DateRangePicker
                startDateId="startDateId"
                endDateId="endDateId"
                onDatesChange={arg => {}}
                onFocusChange={arg => {}}
            />
        );
    }
}

class DateRangePickerFullTest extends React.Component {
    render() {
        return (
            <DateRangePicker
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
                onDatesChange={arg => {
                    arg.startDate;
                    arg.endDate;
                }}
                displayFormat="dd.mm.yyyy"
                enableOutsideDays={true}
                horizontalMargin={20}
                initialVisibleMonth={() => moment()}
                isDayBlocked={(day: any) => false}
                isOutsideRange={(day: any) => false}
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
                onClose={(final: any) => {}}
                navPosition="navPositionTop"
                dayPickerNavigationInlineStyles={{ width: '10' }}
            />
        );
    }
}

class DayPickerRangeControllerMinimumTest extends React.Component {
    render() {
        return <DayPickerRangeController />;
    }
}

class DayPickerSingleDateControllerMinimumTest extends React.Component {
    render() {
        return <DayPickerSingleDateController />;
    }
}

const isInclusivelyAfterDayResult: boolean = isInclusivelyAfterDay(moment(), moment());
const isInclusivelyBeforeDayResult: boolean = isInclusivelyBeforeDay(moment(), moment());
const isNextDayDayResult: boolean = isNextDay(moment(), moment());
const isSameDayResult: boolean = isSameDay(moment(), moment());
const toISODateStringResult: string | null = toISODateString(moment(), 'dd.mm.yyyy');
const toISODateStringResultFromString: string | null = toISODateString('January 1, 2020', 'dd.mm.yyyy');
const toISODateStringResultFromDate: string | null = toISODateString(new Date(), 'dd.mm.yyyy');
const toLocalizedDateStringResult: string | null = toLocalizedDateString(moment(), 'dd.mm.yyyy');
const toLocalizedDateStringResultFromString: string | null = toLocalizedDateString('January 1, 2020', 'dd.mm.yyyy');
const toLocalizedDateStringResultFromDate: string | null = toLocalizedDateString(new Date(), 'dd.mm.yyyy');
const toMomentObjectResult: moment.Moment | null = toMomentObject(moment(), 'dd.mm.yyyy');
const toMomentObjectResultFromString: moment.Moment | null = toMomentObject('January 1, 2020', 'dd.mm.yyyy');
const toMomentObjectResultFromDate: moment.Moment | null = toMomentObject(new Date(), 'dd.mm.yyyy');
