import { MiddlewareReturn, MiddlewareState } from "@floating-ui/react";
import { enGB } from "date-fns/locale/en-GB";
import { enUS } from "date-fns/locale/en-US";
import * as React from "react";
import DatePicker, {
    CalendarContainer,
    // @ts-expect-error The library is not exporting the component as a named export
    ReactDatePicker as _MissingNamedExport,
    ReactDatePickerCustomHeaderProps,
    ReactDatePickerProps,
    registerLocale,
} from "react-datepicker";

registerLocale("en-GB", { ...enGB, options: { weekStartsOn: 1 } });

const topLogger = {
    name: "topLogger",
    options: {
        enabled: true,
    },
    fn(state: MiddlewareState): MiddlewareReturn {
        if (state.placement === "top") {
            console.log("Popper is on the top");
        }
        return state;
    },
};

<DatePicker
    adjustDateOnChange
    allowSameDay
    ariaDescribedBy=""
    ariaInvalid=""
    ariaLabelledBy=""
    ariaRequired=""
    ariaLabelClose=""
    autoComplete=""
    autoFocus
    calendarClassName=""
    calendarContainer={(props) => <div />}
    calendarIconClassname=""
    calendarStartDay={0}
    className=""
    clearButtonClassName=""
    clearButtonTitle=""
    // closeOnScroll={false} // Or as function:
    closeOnScroll={(e) => e.target === document}
    customInput={<input />}
    customInputRef=""
    chooseDayAriaLabelPrefix=""
    customTimeInput={<input />}
    dateFormat=""
    dateFormatCalendar=""
    dayClassName={(date) => ""}
    weekDayClassName={(date) => ""}
    monthClassName={(date) => ""}
    timeClassName={(date) => ""}
    disabledDayAriaLabelPrefix=""
    disabled
    disabledKeyboardNavigation
    dropdownMode="scroll"
    endDate={new Date()}
    excludeDates={[new Date()]}
    excludeDateIntervals={[{ start: new Date(), end: new Date() }]}
    excludeTimes={[new Date()]}
    filterDate={(date) => true}
    filterTime={(date) => true}
    fixedHeight
    forceShowMonthNavigation
    formatWeekDay={(day) => day[0]}
    formatWeekNumber={(date) => 0}
    highlightDates={[{ someClassName: [new Date()] }]}
    holidays={[{ date: "", holidayName: "" }]}
    icon=""
    id=""
    includeDates={[new Date()]}
    includeDateIntervals={[{ start: new Date(), end: new Date() }]}
    includeTimes={[new Date()]}
    injectTimes={[new Date()]}
    inline
    focusSelectedMonth={false}
    isClearable
    locale=""
    maxDate={new Date()}
    maxTime={new Date()}
    minDate={new Date()}
    minTime={new Date()}
    monthsShown={1}
    name=""
    nextMonthAriaLabel=""
    nextMonthButtonLabel=""
    nextYearAriaLabel=""
    nextYearButtonLabel=""
    onBlur={(event) => null}
    onCalendarClose={() => null}
    onCalendarOpen={() => null}
    onChange={(date: Date | [Date | null, Date | null] | null) => {}}
    onChangeRaw={(event) => null}
    onClickOutside={(event) => null}
    onDayMouseEnter={(date: Date) => {}}
    onFocus={(event) => null}
    onInputClick={() => null}
    onInputError={(err) => err.code + err.msg}
    onKeyDown={(event) => null}
    onMonthChange={(date) => null}
    onMonthMouseLeave={() => {}}
    onSelect={(date, event) => null}
    onWeekSelect={(firstDayOfWeek, weekNumber, event) => null}
    onYearChange={(date: Date) => {}}
    open
    openToDate={new Date()}
    peekNextMonth
    placeholderText=""
    popperClassName=""
    popperContainer={(props) => <div />}
    popperModifiers={[
        {
            name: "offset",
            options: {
                offset: [5, 10],
            },
            fn() {
                return { x: 5, y: 10 };
            },
        },
        {
            name: "preventOverflow",
            options: {
                rootBoundary: "viewport",
                tether: false,
                altAxis: true,
            },
            fn() {
                return { reset: { placement: "bottom-start" } };
            },
        },
    ]}
    popperPlacement="bottom-start"
    popperProps={{}}
    preventOpenOnFocus
    previousMonthAriaLabel=""
    previousMonthButtonLabel=""
    previousYearAriaLabel=""
    previousYearButtonLabel=""
    readOnly
    ref={(instance) => {
        if (instance !== null) {
            // $ExpectType ReactDatePicker<true, undefined>
            instance;
        }
    }}
    renderCustomHeader={({
        monthDate,
        date,
        changeYear,
        changeMonth,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
        decreaseYear,
        increaseYear,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
        prevYearButtonDisabled,
        nextYearButtonDisabled,
    }) => <div />}
    renderDayContents={(dayOfMonth, date) => <div />}
    renderQuarterContent={(quarter, shortQuarter) => <div />}
    renderMonthContent={(monthIndex, shortMonth, longMonth) => <div />}
    renderYearContent={(year) => <div />}
    required
    scrollableMonthYearDropdown
    scrollableYearDropdown
    selected={new Date()}
    selectsEnd
    selectsStart
    selectsRange
    shouldCloseOnSelect
    showDisabledMonthNavigation
    showMonthDropdown
    showFullMonthYearPicker
    showMonthYearDropdown
    showMonthYearPicker
    showPopperArrow
    showPreviousMonths
    showQuarterYearPicker
    showTimeSelect
    showTimeSelectOnly
    showTwoColumnMonthYearPicker
    showFourColumnMonthYearPicker
    showWeekNumbers
    showWeekPicker
    showYearDropdown
    showYearPicker
    startDate={new Date()}
    startOpen
    tabIndex={1}
    timeCaption=""
    timeFormat=""
    timeInputLabel=""
    timeIntervals={1}
    title=""
    showIcon
    toggleCalendarOnIconClick
    todayButton={<div />}
    useShortMonthInDropdown
    useWeekdaysShort
    value=""
    weekLabel=""
    withPortal
    portalId=""
    portalHost={document.body.shadowRoot!}
    wrapperClassName=""
    weekAriaLabelPrefix=""
    monthAriaLabelPrefix=""
    excludeScrollbar={false}
    enableTabLoop={false}
    yearDropdownItemNumber={1}
>
    <div />
    <span />
</DatePicker>;

<DatePicker minDate={null} maxDate={null} startDate={null} endDate={null} locale={enUS} onChange={() => null} />;

<DatePicker formatWeekDay={() => <div />} onChange={() => null} />;

function handleRef(ref: DatePicker | null) {
    if (ref) {
        ref.setBlur();
        ref.setFocus();
        if (ref.isCalendarOpen()) {
            ref.setOpen(false);
        }
    }
}

<CalendarContainer className="">
    <div />
    <span />
</CalendarContainer>;

<CalendarContainer />;

const props: ReactDatePickerProps = {
    onChange: () => {},
};

<DatePicker
    onChange={() => {}}
    popperModifiers={[
        {
            name: "arrow",
            options: { padding: 5 },
            fn(s) {
                return s;
            },
        },
        topLogger,
    ]}
    ref={(instance: DatePicker | null) => {}}
/>;

const DatePickerCustomHeader = ({
    monthDate,
    date,
    changeYear,
    changeMonth,
    customHeaderCount,
    decreaseMonth,
    increaseMonth,
    decreaseYear,
    increaseYear,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    prevYearButtonDisabled,
    nextYearButtonDisabled,
}: ReactDatePickerCustomHeaderProps) => <div></div>;

<DatePicker onChange={() => {}} renderCustomHeader={(props) => <DatePickerCustomHeader {...props} />} />;

<DatePicker
    excludeDates={[{ date: new Date(), message: "Exclude today" }]}
    selectsRange
    onChange={([start]) => start?.getHours()}
/>;

<DatePicker onChange={(date) => date?.toISOString()} />;

<DatePicker {...props} ref={handleRef} />;

<DatePicker
    selectsMultiple
    onChange={(dates) => dates?.[0].getHours()}
    ref={(instance) => {
        if (instance !== null) {
            // $ExpectType ReactDatePicker<undefined, true>
            instance;
        }
    }}
/>;
