import * as React from 'react';
import {
    Range,
    RangeKeyDict,
    Calendar,
    DateRange,
    StaticRange,
    InputRange,
    DefinedRange,
    DateRangePicker,
    defaultInputRanges,
    defaultStaticRanges,
} from 'react-date-range';

// =============================================================================
// Calendar Component
// =============================================================================

class ReactCalendar extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
    }

    handleChange(date: Date) {
        console.log(date);
    }

    render() {
        return (
            <div>
                <Calendar
                    ariaLabels={{ yearPicker: 'year-aria' }}
                    calendarFocus="backwards"
                    className="customClassName"
                    classNames={{ dateDisplay: 'dateDisplayCustom' }}
                    color="yellow"
                    date={new Date()}
                    dateDisplayFormat="MM/DD/YY"
                    dayContentRenderer={date => <span>{date.toISOString()}</span>}
                    dayDisplayFormat="dd"
                    direction="vertical"
                    disabledDates={[new Date('2021-10-16')]}
                    disabledDay={date => date.getDate() === 10}
                    displayMode="date"
                    dragSelectionEnabled
                    editableDateInputs
                    endDatePlaceholder="End Date"
                    fixedHeight={false}
                    focusedRange={[0, 0]}
                    initialFocusedRange={[0, 1]}
                    maxDate={new Date('2021-10-31')}
                    minDate={new Date('2021-10-01')}
                    monthDisplayFormat="MMM"
                    months={2}
                    navigatorRenderer={() => <span>Nav</span>}
                    onChange={this.handleChange}
                    onPreviewChange={preview => console.log(preview)}
                    onRangeFocusChange={focusedRange => console.log(focusedRange)}
                    onShownDateChange={date => console.log(date)}
                    preventSnapRefocus
                    preview={{ startDate: new Date('2021-10-01'), endDate: new Date('2021-10-31') }}
                    rangeColors={['red', 'blue', 'yellow']}
                    ranges={[]}
                    scroll={{ enabled: true }}
                    showDateDisplay
                    showMonthAndYearPickers
                    showMonthArrow
                    showPreview
                    shownDate={new Date('2021-10-10')}
                    startDatePlaceholder="Start Date"
                    updateRange={range => console.log(range)}
                    weekdayDisplayFormat="E"
                    weekStartsOn={3}
                />
            </div>
        );
    }
}

// =============================================================================
// DateRange Component
// =============================================================================

const range: Range = {
    startDate: new Date('2020-11-01'),
    endDate: new Date('2020-11-30'),
    key: 'selection',
};

class ReactDatePicker extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
    }

    handleChange(rangesByKey: RangeKeyDict) {
        console.log(rangesByKey);
    }

    render() {
        return (
            <div>
                <DateRange
                    ariaLabels={{ yearPicker: 'year-aria' }}
                    calendarFocus="backwards"
                    className="customClassName"
                    classNames={{ dateDisplay: 'dateDisplayCustom' }}
                    color="yellow"
                    date={new Date()}
                    dateDisplayFormat="MM/DD/YY"
                    dayContentRenderer={date => <span>{date.toISOString()}</span>}
                    dayDisplayFormat="dd"
                    direction="vertical"
                    disabledDates={[new Date('2021-10-16')]}
                    disabledDay={date => date.getDate() === 10}
                    displayMode="date"
                    dragSelectionEnabled
                    editableDateInputs
                    endDatePlaceholder="End Date"
                    fixedHeight={false}
                    focusedRange={[0, 0]}
                    initialFocusedRange={[0, 1]}
                    maxDate={new Date('2021-10-31')}
                    minDate={new Date('2021-10-01')}
                    monthDisplayFormat="MMM"
                    months={2}
                    navigatorRenderer={() => <span>Nav</span>}
                    onChange={this.handleChange}
                    onPreviewChange={preview => console.log(preview)}
                    onRangeFocusChange={focusedRange => console.log(focusedRange)}
                    onShownDateChange={date => console.log(date)}
                    preventSnapRefocus
                    preview={{ startDate: new Date('2021-10-01'), endDate: new Date('2021-10-31') }}
                    rangeColors={['red', 'blue', 'yellow']}
                    ranges={[range]}
                    scroll={{ enabled: true }}
                    showDateDisplay
                    showMonthAndYearPickers
                    showMonthArrow
                    showPreview
                    shownDate={new Date('2021-10-10')}
                    startDatePlaceholder="Start Date"
                    updateRange={range => console.log(range)}
                    weekdayDisplayFormat="E"
                    weekStartsOn={3}
                    moveRangeOnFirstSelection
                    retainEndDateOnFirstSelection
                />
            </div>
        );
    }
}

// =============================================================================
// DefinedRange Component
// =============================================================================

const staticRange: StaticRange = {
    range: () => ({ startDate: new Date('2021-10-01'), endDate: new Date('2021-10-31') }),
    isSelected: range => range?.key === 'selected',
    label: 'Example static range',
    hasCustomRendering: true,
};

const inputRange: InputRange = {
    range: () => ({ startDate: new Date('2021-10-01'), endDate: new Date('2021-10-31') }),
    getCurrentValue: range => range?.startDate?.getTime() || '',
    label: 'Example static range',
};

class ReactDefinedDateRange extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
    }

    handleChange(rangesByKey: RangeKeyDict) {
        console.log(rangesByKey);
    }

    render() {
        return (
            <div>
                <DefinedRange
                    className="customClassName"
                    focusedRange={[0, 1]}
                    footerContent={<footer>Footer</footer>}
                    headerContent={<header>Header</header>}
                    inputRanges={[inputRange, defaultInputRanges[0]]}
                    onChange={this.handleChange}
                    onPreviewChange={preview => console.log(preview)}
                    rangeColors={['red', 'blue', 'yellow']}
                    ranges={[range]}
                    renderStaticRangeLabel={staticRange => <span>{staticRange?.label}</span>}
                    staticRanges={[staticRange, defaultStaticRanges[0]]}
                />
            </div>
        );
    }
}

// =============================================================================
// DateRangePicker Component
// =============================================================================

const customizedKeyRange: Range = {
    startDate: new Date('2020-11-01'),
    endDate: new Date('2020-11-30'),
    key: 'customizedKey',
};

class ReactDateRangePicker extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
    }

    handleChange(rangesByKey: RangeKeyDict) {
        console.log(rangesByKey);
    }

    render() {
        return (
            <div>
                <DateRangePicker
                    ariaLabels={{ yearPicker: 'year-aria' }}
                    calendarFocus="backwards"
                    className="customClassName"
                    classNames={{ dateDisplay: 'dateDisplayCustom' }}
                    color="yellow"
                    date={new Date()}
                    dateDisplayFormat="MM/DD/YY"
                    dayContentRenderer={date => <span>{date.toISOString()}</span>}
                    dayDisplayFormat="dd"
                    direction="vertical"
                    disabledDates={[new Date('2021-10-16')]}
                    disabledDay={date => date.getDate() === 10}
                    displayMode="date"
                    dragSelectionEnabled
                    editableDateInputs
                    endDatePlaceholder="End Date"
                    fixedHeight={false}
                    focusedRange={[0, 0]}
                    initialFocusedRange={[0, 1]}
                    maxDate={new Date('2021-10-31')}
                    minDate={new Date('2021-10-01')}
                    monthDisplayFormat="MMM"
                    months={2}
                    navigatorRenderer={() => <span>Nav</span>}
                    onChange={this.handleChange}
                    onPreviewChange={preview => console.log(preview)}
                    onRangeFocusChange={focusedRange => console.log(focusedRange)}
                    onShownDateChange={date => console.log(date)}
                    preventSnapRefocus
                    preview={{ startDate: new Date('2021-10-01'), endDate: new Date('2021-10-31') }}
                    rangeColors={['red', 'blue', 'yellow']}
                    ranges={[customizedKeyRange]}
                    scroll={{ enabled: true }}
                    showDateDisplay
                    showMonthAndYearPickers
                    showMonthArrow
                    showPreview
                    shownDate={new Date('2021-10-10')}
                    startDatePlaceholder="Start Date"
                    updateRange={range => console.log(range)}
                    weekdayDisplayFormat="E"
                    weekStartsOn={3}
                    moveRangeOnFirstSelection
                    retainEndDateOnFirstSelection
                    footerContent={<footer>Footer</footer>}
                    headerContent={<header>Header</header>}
                    inputRanges={[inputRange, defaultInputRanges[0]]}
                    renderStaticRangeLabel={staticRange => <span>{staticRange?.label}</span>}
                    staticRanges={[staticRange, defaultStaticRanges[0]]}
                />
            </div>
        );
    }
}
