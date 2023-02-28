import * as React from 'react';
import * as moment from 'moment';

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
    RenderMonthProps,
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

const onlyRenderText: RenderMonthProps = {
    renderMonthText: month => month.format('MMMM'),
};
const onlyRenderElement: RenderMonthProps = {
    renderMonthElement: ({ isVisible, month, onMonthSelect, onYearSelect }) => month.format('MMMM'),
};
// @ts-expect-error
const bothRenderMethods: RenderMonthProps = {
    renderMonthText: month => month.format('MMMM'),
    renderMonthElement: ({ isVisible, month, onMonthSelect, onYearSelect }) => month.format('MMMM'),
};

const CalendarDayMinimumTest: React.FC = () => <CalendarDay />;

const CalendarDayFullTest: React.FC = () => (
    <CalendarDay
        ariaLabelFormat="MM d"
        day={moment()}
        daySize={50}
        isFocused={false}
        isOutsideDay={false}
        modifiers={new Set(['selected-span'])}
        onDayClick={(day, event) => {}}
        onDayMouseEnter={(day, event) => {}}
        onDayMouseLeave={(day, event) => {}}
        phrases={{
            chooseAvailableDate({ date }) {
                return date;
            },
        }}
        renderDayContents={(day, modifiers) => day.format('d')}
        tabIndex={0}
    />
);

const CalendarMonthMinimumTest: React.FC = () => <CalendarMonth />;

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
        modifiers={{ date: new Set(['selected-span']) }}
        month={moment()}
        monthFormat="MM"
        onDayClick={(day, event) => {}}
        onDayMouseEnter={(day, event) => {}}
        onDayMouseLeave={(day, event) => {}}
        onMonthSelect={(currentMonth, newMonthVal) => {}}
        onYearSelect={(currentMonth, newMonthVal) => {}}
        orientation="vertical"
        phrases={{
            dateIsSelected(phraseArg) {
                return phraseArg.date;
            },
        }}
        renderCalendarDay={props => <CalendarDay {...props} />}
        renderDayContents={(day, modifiers) => modifiers.size}
        renderMonthText={month => month.format('MMMM')}
        setMonthTitleHeight={height => {}}
        verticalBorderSpacing={5}
    />
);

const CalendarMonthGridMinimumTest: React.FC = () => <CalendarMonthGrid />;

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
        modifiers={{ month: { date: new Set(['selected-span']) } }}
        monthFormat="MM"
        numberOfMonths={3}
        onDayClick={(day, event) => {}}
        onDayMouseEnter={(day, event) => {}}
        onDayMouseLeave={(day, event) => {}}
        onMonthChange={newMonth => {}}
        onMonthTransitionEnd={event => {}}
        onYearChange={newMonth => {}}
        orientation="vertical"
        phrases={{
            dateIsSelected(phraseArg) {
                return phraseArg.date;
            },
        }}
        renderCalendarDay={props => <CalendarDay {...props} />}
        renderDayContents={(day, modifiers) => modifiers.size}
        renderMonthElement={({ isVisible, month, onMonthSelect, onYearSelect }) => month.format('MMMM')}
        setMonthTitleHeight={height => {}}
        transitionDuration={75}
        translationValue={46}
        verticalBorderSpacing={5}
    />
);

class DateRangePickerMinimumTest extends React.Component {
    render() {
        return (
            <DateRangePicker
                endDate={moment()}
                endDateId="endDateId"
                focusedInput="startDate"
                onDatesChange={({ endDate, startDate }) => {}}
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
                calendarInfoPosition="after"
                customArrowIcon={<span>-&gt;</span>}
                customCloseIcon="X"
                customInputIcon={
                    <React.Fragment>
                        Input <input />
                    </React.Fragment>
                }
                dayAriaLabelFormat="dd"
                dayPickerNavigationInlineStyles={{ width: '10' }}
                daySize={50}
                disabled={false}
                disableScroll={true}
                displayFormat="dd.mm.yyyy"
                enableOutsideDays={true}
                endDate={moment().add(5, 'days')}
                endDateAriaLabel="dd"
                endDateId="id2"
                endDateOffset={day => day.add(5, 'days')}
                endDatePlaceholderText="placeholder"
                firstDayOfWeek={0}
                focusedInput="startDate"
                hideKeyboardShortcutsPanel={false}
                horizontalMargin={20}
                horizontalMonthPadding={20}
                initialVisibleMonth={() => moment().set('year', 2020)}
                inputIconPosition="before"
                isDayBlocked={day => false}
                isDayHighlighted={day => true}
                isOutsideRange={day => false}
                isRTL={false}
                keepFocusOnInput={true}
                keepOpenOnDateSelect={true}
                maxDate={moment()}
                minDate={moment()}
                minimumNights={2}
                monthFormat="MM"
                navNext={<React.Fragment>Next</React.Fragment>}
                navPosition="navPositionTop"
                navPrev={<div>Prev</div>}
                noBorder={true}
                numberOfMonths={2}
                onClose={({ endDate, startDate }) => {}}
                onDatesChange={({ endDate, startDate }) => {}}
                onFocusChange={arg => {}}
                onNextMonthClick={e => {}}
                onPrevMonthClick={e => {}}
                openDirection="up"
                orientation="horizontal"
                phrases={{
                    closeDatePicker: 'Close',
                }}
                readOnly={false}
                regular={true}
                renderCalendarDay={props => <CalendarDay {...props} />}
                renderCalendarInfo={() => <div>Hello</div>}
                renderDayContents={day => day.toString()}
                renderMonthText={month => month.format('MMM')}
                renderNavNextButton={({ ariaLabel, disabled, onClick, onKeyUp, onMouseUp }) => <div>Next</div>}
                renderNavPrevButton={({ ariaLabel, disabled, onClick, onKeyUp, onMouseUp }) => <div>Next</div>}
                renderWeekHeaderElement={day => <span>{day}</span>}
                reopenPickerOnClearDates={true}
                required={false}
                screenReaderInputMessage="arial-test"
                showClearDates={true}
                showDefaultInputIcon={true}
                small={false}
                startDate={moment().add(3, 'days')}
                startDateAriaLabel="dd"
                startDateId="id1"
                startDateOffset={day => day.subtract(3, 'days')}
                startDatePlaceholderText="placeholder"
                transitionDuration={5}
                verticalHeight={20}
                verticalSpacing={12}
                weekDayFormat="ddd"
                withFullScreenPortal={true}
                withPortal={false}
            />
        );
    }
}

const DateRangePickerInputMinimumTest: React.FC = () => <DateRangePickerInput />;

const DateRangePickerInputFullTest: React.FC = () => (
    <DateRangePickerInput
        block={false}
        customArrowIcon={<span>-&gt;</span>}
        customCloseIcon="X"
        customInputIcon={
            <React.Fragment>
                Input <input />
            </React.Fragment>
        }
        disabled={false}
        endDate="2020-01-01"
        endDateAriaLabel="dd"
        endDateId="end"
        endDatePlaceholderText="End"
        inputIconPosition="before"
        isEndDateFocused={false}
        isFocused={true}
        isRTL={false}
        isStartDateFocused={true}
        noBorder={false}
        onClearDates={event => {}}
        onEndDateChange={dateString => {}}
        onEndDateFocus={event => {}}
        onEndDateTab={event => {}}
        onKeyDownArrowDown={event => {}}
        onKeyDownQuestionMark={event => {}}
        onStartDateChange={dateString => {}}
        onStartDateFocus={event => {}}
        onStartDateShiftTab={event => {}}
        openDirection="down"
        phrases={{
            keyboardForwardNavigationInstructions: 'Forward',
        }}
        readOnly={false}
        regular={true}
        required={false}
        screenReaderMessage="DateRangePickerInput"
        showCaret={true}
        showClearDates={true}
        showDefaultInputIcon={true}
        small={false}
        startDate="2019-12-01"
        startDateAriaLabel="dd"
        startDateId="start"
        startDatePlaceholderText="Start"
        verticalSpacing={20}
    />
);

const DateRangePickerInputControllerMinimumTest: React.FC = () => <DateRangePickerInputController />;

const DateRangePickerInputControllerFullTest: React.FC = () => (
    <DateRangePickerInputController
        block={false}
        customArrowIcon={<span>-&gt;</span>}
        customCloseIcon="X"
        customInputIcon={
            <React.Fragment>
                Input <input />
            </React.Fragment>
        }
        disabled={false}
        displayFormat="dddd, YYY"
        endDate={moment()}
        endDateAriaLabel="dd"
        endDateId="end"
        endDatePlaceholderText="End"
        inputIconPosition="before"
        isEndDateFocused={false}
        isFocused={true}
        isOutsideRange={day => false}
        isRTL={false}
        isStartDateFocused={true}
        keepOpenOnDateSelect={true}
        minimumNights={5}
        noBorder={false}
        onClose={({ endDate, startDate }) => {}}
        onDatesChange={({ endDate, startDate }) => {}}
        onFocusChange={arg => {}}
        onKeyDownArrowDown={event => {}}
        onKeyDownQuestionMark={event => {}}
        openDirection="down"
        phrases={{
            keyboardForwardNavigationInstructions: 'Forward',
        }}
        readOnly={false}
        regular={true}
        reopenPickerOnClearDates={true}
        required={false}
        screenReaderMessage="DateRangePickerInput"
        showCaret={true}
        showClearDates={true}
        showDefaultInputIcon={true}
        small={false}
        startDate={moment()}
        startDateAriaLabel="dd"
        startDateId="start"
        startDatePlaceholderText="Start"
        verticalSpacing={20}
        withFullScreenPortal={false}
    />
);

const DayPickerMinimumTest: React.FC = () => <DayPicker />;

const DayPickerFullTest: React.FC = () => (
    <DayPicker
        calendarInfoPosition="bottom"
        dayAriaLabelFormat="dd"
        dayPickerNavigationInlineStyles={{ width: '10' }}
        daySize={50}
        disableNext={false}
        disablePrev={false}
        enableOutsideDays={true}
        firstDayOfWeek={5}
        getFirstFocusableDay={month => month.startOf('month')}
        hidden={false}
        hideKeyboardShortcutsPanel={true}
        horizontalMonthPadding={20}
        initialVisibleMonth={() => moment('2020')}
        isFocused={true}
        isRTL={false}
        modifiers={{ month: { day: new Set(['span-selected']) } }}
        monthFormat="MMM"
        navNext={<div>Next</div>}
        navPosition="navPositionTop"
        navPrev={<button>Previous</button>}
        noBorder={false}
        noNavButtons={false}
        noNavNextButton={true}
        noNavPrevButton={false}
        numberOfMonths={2}
        onBlur={event => {}}
        onDayClick={(day, event) => {}}
        onDayMouseEnter={(day, event) => {}}
        onDayMouseLeave={(day, event) => {}}
        onGetNextScrollableMonths={event => {}}
        onGetPrevScrollableMonths={event => {}}
        onMonthChange={newMonth => {}}
        onNextMonthClick={newCurrentMonth => {}}
        onOutsideClick={event => {}}
        onPrevMonthClick={newCurrentMonth => {}}
        onShiftTab={() => {}}
        onTab={event => {}}
        onYearChange={newMonth => {}}
        orientation="verticalScrollable"
        phrases={{
            enterKey: 'Enter',
        }}
        renderCalendarDay={props => <CalendarDay {...props} />}
        renderCalendarInfo={() => <span>Info</span>}
        renderDayContents={day => day.format('dd')}
        renderKeyboardShortcutsButton={({ ariaLabel, onClick, ref }) => <button>shortcuts</button>}
        renderKeyboardShortcutsPanel={({
            closeButtonAriaLabel,
            keyboardShortcuts,
            onCloseButtonClick,
            onKeyDown,
            title,
        }) => <div>panel</div>}
        renderMonthText={month => month.format('MMM')}
        renderNavNextButton={({ ariaLabel, disabled, onClick, onKeyUp, onMouseUp }) => <div>Next</div>}
        renderNavPrevButton={({ ariaLabel, disabled, onClick, onKeyUp, onMouseUp }) => <div>Next</div>}
        renderWeekHeaderElement={day => <span>{day}</span>}
        showKeyboardShortcuts={false}
        transitionDuration={5}
        verticalBorderSpacing={20}
        verticalHeight={15}
        weekDayFormat="dd"
        withPortal={false}
    />
);

// @ts-expect-error
const DayPickerNoOrientationError: React.FC = () => <DayPicker onGetPrevScrollableMonths={event => {}} />;
const DayPickerWrongOrientationError: React.FC = () => (
    // @ts-expect-error
    <DayPicker orientation="horizontal" onGetNextScrollableMonths={event => {}} />
);

class DayPickerRangeControllerMinimumTest extends React.Component {
    render() {
        return (
            <DayPickerRangeController
                startDate={moment()}
                endDate={moment()}
                onDatesChange={({ endDate, startDate }) => {}}
                focusedInput="startDate"
                onFocusChange={arg => {}}
                initialVisibleMonth={() => moment().add(2, 'months')}
            />
        );
    }
}

const DayPickerRangeControllerFullTest: React.FC = () => (
    <DayPickerRangeController
        calendarInfoPosition="top"
        dayAriaLabelFormat="dd"
        dayPickerNavigationInlineStyles={{ width: '10' }}
        daySize={50}
        daysViolatingMinNightsCanBeClicked={false}
        disabled={false}
        enableOutsideDays={true}
        endDate={moment()}
        endDateOffset={day => day.add(5, 'days')}
        firstDayOfWeek={1}
        focusedInput="startDate"
        getMinNightsForHoverDate={day => 5}
        hideKeyboardShortcutsPanel={false}
        horizontalMonthPadding={20}
        initialVisibleMonth={() => moment().add(2, 'months')}
        isDayBlocked={day => false}
        isDayHighlighted={day => true}
        isFocused={true}
        isOutsideRange={day => false}
        isRTL={false}
        keepOpenOnDateSelect={true}
        minimumNights={2}
        monthFormat="MMM"
        navNext={<div>Next</div>}
        navPosition="navPositionTop"
        navPrev={<button>Previous</button>}
        noBorder={false}
        noNavButtons={false}
        noNavNextButton={true}
        noNavPrevButton={false}
        numberOfMonths={2}
        onBlur={event => {}}
        onClose={({ endDate, startDate }) => {}}
        onDatesChange={({ endDate, startDate }) => {}}
        onFocusChange={arg => {}}
        onNextMonthClick={newCurrentMonth => {}}
        onOutsideClick={event => {}}
        onPrevMonthClick={newCurrentMonth => {}}
        onShiftTab={() => {}}
        onTab={event => {}}
        orientation="verticalScrollable"
        phrases={{
            calendarLabel: 'Calendar',
        }}
        renderCalendarDay={props => <CalendarDay {...props} />}
        renderCalendarInfo={() => <div>Info</div>}
        renderDayContents={day => day.format('d')}
        renderKeyboardShortcutsButton={({ ariaLabel, onClick, ref }) => <button>shortcuts</button>}
        renderKeyboardShortcutsPanel={({
            closeButtonAriaLabel,
            keyboardShortcuts,
            onCloseButtonClick,
            onKeyDown,
            title,
        }) => <div>panel</div>}
        renderMonthText={month => month.format('MMM')}
        renderNavNextButton={({ ariaLabel, disabled, onClick, onKeyUp, onMouseUp }) => <div>Next</div>}
        renderNavPrevButton={({ ariaLabel, disabled, onClick, onKeyUp, onMouseUp }) => <div>Next</div>}
        renderWeekHeaderElement={day => <span>{day}</span>}
        showKeyboardShortcuts={false}
        startDate={moment()}
        minDate={moment()}
        maxDate={moment().add(30, 'days')}
        startDateOffset={day => day.subtract(3, 'days')}
        transitionDuration={5}
        verticalBorderSpacing={5}
        verticalHeight={20}
        weekDayFormat="DDD"
        withPortal={false}
    />
);

class DayPickerSingleDateControllerMinimumTest extends React.Component {
    render() {
        return (
            <DayPickerSingleDateController
                date={moment()}
                focused={true}
                initialVisibleMonth={() => moment().subtract(1, 'day')}
                onDateChange={arg => {}}
                onFocusChange={({ focused }) => {}}
            />
        );
    }
}

const DayPickerSingleDateControllerFullTest: React.FC = () => (
    <DayPickerSingleDateController
        calendarInfoPosition="top"
        date={moment()}
        minDate={moment()}
        maxDate={moment().add(30, 'days')}
        dayAriaLabelFormat="dd"
        dayPickerNavigationInlineStyles={{ width: '10' }}
        daySize={50}
        enableOutsideDays={true}
        firstDayOfWeek={1}
        focused={true}
        hideKeyboardShortcutsPanel={false}
        horizontalMonthPadding={20}
        initialVisibleMonth={() => moment().subtract(1, 'day')}
        isDayBlocked={day => false}
        isDayHighlighted={day => true}
        isFocused={true}
        isOutsideRange={day => false}
        isRTL={false}
        keepOpenOnDateSelect={true}
        monthFormat="MMM"
        navNext={<div>Next</div>}
        navPosition="navPositionTop"
        navPrev={<button>Previous</button>}
        noBorder={false}
        noNavButtons={false}
        noNavNextButton={true}
        noNavPrevButton={false}
        numberOfMonths={2}
        onBlur={event => {}}
        onClose={({ date }) => {}}
        onDateChange={arg => {}}
        onFocusChange={({ focused }) => {}}
        onNextMonthClick={newCurrentMonth => {}}
        onOutsideClick={event => {}}
        onPrevMonthClick={newCurrentMonth => {}}
        onShiftTab={() => {}}
        onTab={event => {}}
        orientation="verticalScrollable"
        phrases={{
            calendarLabel: 'Calendar',
        }}
        renderCalendarDay={props => <CalendarDay {...props} />}
        renderCalendarInfo={() => <div>Info</div>}
        renderDayContents={day => day.format('d')}
        renderMonthText={month => month.format('MMM')}
        renderNavNextButton={({ ariaLabel, disabled, onClick, onKeyUp, onMouseUp }) => <div>Next</div>}
        renderNavPrevButton={({ ariaLabel, disabled, onClick, onKeyUp, onMouseUp }) => <div>Next</div>}
        renderWeekHeaderElement={day => <span>{day}</span>}
        showKeyboardShortcuts={false}
        transitionDuration={5}
        verticalBorderSpacing={5}
        verticalHeight={20}
        weekDayFormat="DDD"
        withPortal={false}
    />
);

class SingleDatePickerMinimumTest extends React.Component {
    render() {
        return (
            <SingleDatePicker
                date={moment()}
                focused={false}
                id="SingleDatePicker"
                onDateChange={date => {}}
                onFocusChange={({ focused }) => {}}
            />
        );
    }
}

class SingleDatePickerFullTest extends React.Component {
    render() {
        return (
            <SingleDatePicker
                anchorDirection="left"
                appendToBody={false}
                ariaLabel="dd"
                block={false}
                calendarInfoPosition="after"
                customCloseIcon="X"
                customInputIcon={
                    <React.Fragment>
                        Input <input />
                    </React.Fragment>
                }
                date={moment()}
                dayAriaLabelFormat="dd"
                dayPickerNavigationInlineStyles={{ width: '10' }}
                daySize={50}
                disabled={false}
                disableScroll={true}
                displayFormat="dd.mm.yyyy"
                enableOutsideDays={true}
                firstDayOfWeek={0}
                focused={false}
                hideKeyboardShortcutsPanel={false}
                horizontalMargin={20}
                horizontalMonthPadding={20}
                id="SingleDatePicker"
                initialVisibleMonth={() => moment().set('year', 2020)}
                inputIconPosition="before"
                isDayBlocked={day => false}
                isDayHighlighted={day => true}
                isOutsideRange={day => false}
                isRTL={false}
                keepFocusOnInput={true}
                keepOpenOnDateSelect={true}
                monthFormat="MM"
                navNext={<React.Fragment>Next</React.Fragment>}
                navPosition="navPositionTop"
                navPrev={<div>Prev</div>}
                noBorder={true}
                numberOfMonths={2}
                onClose={({ date }) => {}}
                onDateChange={date => {}}
                onFocusChange={({ focused }) => {}}
                onNextMonthClick={e => {}}
                onPrevMonthClick={e => {}}
                openDirection="up"
                orientation="horizontal"
                phrases={{
                    closeDatePicker: 'Close',
                }}
                placeholder="test"
                readOnly={false}
                regular={true}
                renderCalendarDay={props => <CalendarDay {...props} />}
                renderCalendarInfo={() => <div>Hello</div>}
                renderDayContents={day => day.toString()}
                renderMonthText={month => month.format('MMM')}
                renderNavNextButton={({ ariaLabel, disabled, onClick, onKeyUp, onMouseUp }) => <div>Next</div>}
                renderNavPrevButton={({ ariaLabel, disabled, onClick, onKeyUp, onMouseUp }) => <div>Next</div>}
                renderWeekHeaderElement={day => <span>{day}</span>}
                reopenPickerOnClearDate
                required={false}
                screenReaderInputMessage="arial-test"
                showClearDate={true}
                showDefaultInputIcon={true}
                small={false}
                transitionDuration={5}
                verticalHeight={20}
                verticalSpacing={12}
                weekDayFormat="ddd"
                withFullScreenPortal={true}
                withPortal={false}
            />
        );
    }
}

const SingleDatePickerInputMinimumTest: React.FC = () => <SingleDatePickerInput id="SingleDatePickerInput" />;

const SingleDatePickerInputFullTest: React.FC = () => (
    <SingleDatePickerInput
        ariaLabel="dd"
        block={false}
        customCloseIcon="X"
        customInputIcon={
            <React.Fragment>
                Input <input />
            </React.Fragment>
        }
        disabled={false}
        displayValue="Day"
        focused={true}
        id="SingleDatePickerInput"
        inputIconPosition="before"
        isFocused={true}
        isRTL={false}
        noBorder={false}
        onChange={dateString => {}}
        onClearDate={event => {}}
        onFocus={event => {}}
        onKeyDownArrowDown={event => {}}
        onKeyDownQuestionMark={event => {}}
        onKeyDownShiftTab={event => {}}
        onKeyDownTab={event => {}}
        openDirection="down"
        phrases={{
            keyboardForwardNavigationInstructions: 'Forward',
        }}
        placeholder="test"
        readOnly={false}
        regular={true}
        required={false}
        screenReaderMessage="DateRangePickerInput"
        showCaret={true}
        showClearDate={true}
        showDefaultInputIcon={true}
        small={false}
        verticalSpacing={20}
    />
);

const isInclusivelyAfterDayResult: boolean = isInclusivelyAfterDay(moment(), moment());
// @ts-expect-error
const isInclusivelyAfterDayResultError: boolean = isInclusivelyAfterDay(moment(), 5);
const isInclusivelyBeforeDayResult: boolean = isInclusivelyBeforeDay(moment(), moment());
// @ts-expect-error
const isInclusivelyBeforeDayResultError: boolean = isInclusivelyBeforeDay(new Date(), moment());
const isNextDayDayResult: boolean = isNextDay(moment(), moment());
// @ts-expect-error
const isNextDayDayResultError: boolean = isNextDay(moment());
const isSameDayResult: boolean = isSameDay(moment(), moment());
// @ts-expect-error
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
