import * as React from 'react';
import ReactInfiniteCalendar, {
    Calendar,
    withDateSelection,
    withKeyboardSupport,
    withMultipleDates,
    withRange,
} from 'react-infinite-calendar';

const test: React.FC = () => (
    <ReactInfiniteCalendar
        selected={new Date()}
        width={500}
        height={500}
        min={new Date()}
        max={new Date()}
        minDate={new Date()}
        maxDate={new Date()}
        disabledDays={[0, 6]}
        disabledDates={[new Date()]}
        display="years"
        displayOptions={{
            hideYearsOnSelect: true,
            layout: 'portrait',
            overscanMonthCount: 2,
            shouldHeaderAnimate: true,
            showHeader: true,
            showMonthsForYears: true,
            showOverlay: true,
            showTodayHelper: true,
            showWeekdays: true,
            todayHelperRowOffset: 4,
        }}
        locale={{
            locale: {
                distanceInWords: () => {},
                format: () => {},
            },
            blank: 'Select a date...',
            headerFormat: 'ddd, MMM Do',
            todayLabel: {
                long: 'Today',
            },
            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            weekStartsOn: 0,
        }}
        theme={{
            accentColor: '#448AFF',
            floatingNav: {
                background: 'rgba(56, 87, 138, 0.94)',
                chevron: '#FFA726',
                color: '#FFF',
            },
            headerColor: '#448AFF',
            selectionColor: '#559FFF',
            textColor: {
                active: '#FFF',
                default: '#333',
            },
            todayColor: '#FFA726',
            weekdayColor: '#559FFF',
        }}
        className="className"
        onSelect={() => {}}
        onScroll={(scrollTop: number) => {
            console.log(scrollTop);
        }}
        onScrollEnd={(scrollTop: number) => {
            console.log(scrollTop);
        }}
        rowHeight={40}
        autoFocus={false}
        tabIndex={1}
        interpolateSelection={(date: Date, selected: Date[]) => {
            console.log(date, selected);
            return [new Date()];
        }}
    />
);

const testWithDateSelectionArray: React.FC = () => (
    <ReactInfiniteCalendar
        selected={[new Date()]}
        width={500}
        height={500}
        min={new Date()}
        max={new Date()}
        minDate={new Date()}
        maxDate={new Date()}
        disabledDays={[0, 6]}
        disabledDates={[new Date()]}
        display="years"
        displayOptions={{
            hideYearsOnSelect: true,
            layout: 'portrait',
            overscanMonthCount: 2,
            shouldHeaderAnimate: true,
            showHeader: true,
            showMonthsForYears: true,
            showOverlay: true,
            showTodayHelper: true,
            showWeekdays: true,
            todayHelperRowOffset: 4,
        }}
        locale={{
            locale: {
                distanceInWords: () => {},
                format: () => {},
            },
            blank: 'Select a date...',
            headerFormat: 'ddd, MMM Do',
            todayLabel: {
                long: 'Today',
            },
            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            weekStartsOn: 0,
        }}
        theme={{
            accentColor: '#448AFF',
            floatingNav: {
                background: 'rgba(56, 87, 138, 0.94)',
                chevron: '#FFA726',
                color: '#FFF',
            },
            headerColor: '#448AFF',
            selectionColor: '#559FFF',
            textColor: {
                active: '#FFF',
                default: '#333',
            },
            todayColor: '#FFA726',
            weekdayColor: '#559FFF',
        }}
        className="className"
        onSelect={() => {}}
        onScroll={(scrollTop: number) => {
            console.log(scrollTop);
        }}
        onScrollEnd={(scrollTop: number) => {
            console.log(scrollTop);
        }}
        rowHeight={40}
        autoFocus={false}
        tabIndex={1}
        interpolateSelection={(date: Date, selected: Date[]) => {
            console.log(date, selected);
            return [new Date()];
        }}
    />
);

const testWithRange = withRange(Calendar);
const testWithDateSelection = withDateSelection(Calendar);
const testWithKeyboardSupport = withKeyboardSupport(Calendar);
const testWithMultipleDate = withMultipleDates(Calendar);
