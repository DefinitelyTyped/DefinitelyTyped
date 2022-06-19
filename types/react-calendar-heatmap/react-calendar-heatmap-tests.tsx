import * as React from 'react';
import CalendarHeatmap = require('react-calendar-heatmap');

const basic = (
    <CalendarHeatmap
        startDate={new Date('2016-01-01')}
        endDate={new Date('2016-04-01')}
        values={[
            { date: '2016-01-01', count: 12 },
            { date: '2016-01-22', count: 122 },
            { date: '2016-01-30', count: 38 },
        ]}
    />
);

const classForValue = (
    <CalendarHeatmap
        values={[
            { date: '2016-01-01', count: 0 },
            { date: '2016-01-22', count: 1 },
        ]}
        endDate={'2016-01-22'}
        startDate={'2016-01-01'}
        titleForValue={value => (value ? value.count : null)}
        classForValue={value => {
            if (!value) {
                return null;
            }
            return value.count > 0 ? 'red' : 'white';
        }}
    />
);

const transformDayElement = () => {
    const transform = (rect: React.FunctionComponentElement<{ 'data-test': string }>) =>
        React.cloneElement(rect, { 'data-test': 'ok' });
    const today = new Date();
    const expectedStartDate = new Date();
    return (
        <CalendarHeatmap
            values={[
                { date: '2016-01-01', count: 0 },
                { date: '2016-01-22', count: 1 },
            ]}
            endDate={today}
            startDate={expectedStartDate}
            transformDayElement={transform}
        />
    );
};

const configuringColors = (
    <CalendarHeatmap
        values={[
            { date: '2016-01-01', count: 1 },
            { date: '2016-01-03', count: 4 },
            { date: '2016-01-06', count: 2 },
        ]}
        classForValue={value => {
            if (!value) {
                return 'color-empty';
            }
            return `color-scale-${value.count}`;
        }}
    />
);

const tooltipDataAttrs = (
    <CalendarHeatmap
        values={[
            { date: '2016-01-01', count: 1 },
            { date: '2016-01-06', count: 0 },
        ]}
        endDate={'2016-01-06'}
        startDate={'2016-01-01'}
        tooltipDataAttrs={({ count }) => ({
            'data-tooltip': `Count: ${count}`,
        })}
    />
);
