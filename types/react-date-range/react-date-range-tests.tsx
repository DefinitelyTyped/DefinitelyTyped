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
                    date={new Date()}
                    onChange={this.handleChange}
                    classNames={{
                        dateDisplay: 'dateDisplayCustom',
                    }}
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
                    ranges={[range]}
                    onChange={this.handleChange}
                    classNames={{
                        dateDisplay: 'dateDisplayCustom',
                    }}
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
                    ranges={[customizedKeyRange]}
                    scroll={{ enabled: true }}
                    onChange={this.handleChange}
                    editableDateInputs={true}
                    showMonthArrow={true}
                    months={1}
                    moveRangeOnFirstSelection={false}
                    direction="horizontal"
                    weekStartsOn={1}
                    classNames={{
                        dateDisplay: 'dateDisplayCustom',
                    }}
                />
            </div>
        );
    }
}
