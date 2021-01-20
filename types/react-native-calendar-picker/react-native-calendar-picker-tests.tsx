import * as React from 'react';
import { View, TextInput } from 'react-native';

import CalendarPicker, {
    DateChangedCallback,
    CustomDateStyle,
    DisabledDatesFunc,
    CustomDatesStylesFunc,
    CustomDayHeaderStylesFunc,
} from 'react-native-calendar-picker';

const TestSimpleProps = () => (
    <CalendarPicker
        weekdays={['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']}
        months={[
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ]}
        startFromMonday
        showDayStragglers
        allowRangeSelection
        allowBackwardRangeSelect
        previousTitle="string"
        nextTitle="string"
        selectedDayColor="string"
        selectedDayStyle={{ flex: 1 }}
        selectedDayTextColor="string"
        selectedRangeStartStyle={{ flex: 1 }}
        selectedRangeEndStyle={{ flex: 1 }}
        selectedRangeStyle={{ flex: 1 }}
        disabledDates={[new Date(), new Date()]}
        disabledDatesTextStyle={{ fontSize: 10 }}
        selectedStartDate={new Date()}
        selectedEndDate={new Date()}
        minRangeDuration={1}
        maxRangeDuration={2}
        todayBackgroundColor="string"
        todayTextStyle={{ fontSize: 10 }}
        textStyle={{ fontSize: 10 }}
        scrollable
        horizontal={false}
        scaleFactor={3}
        minDate={new Date()}
        maxDate={new Date()}
        initialDate={new Date()}
        width={3}
        height={3}
        enableDateChange
        restrictMonthNavigation
        dayShape="circle"
        headingLevel={3}
        previousTitleStyle={{ fontSize: 10 }}
        nextTitleStyle={{ fontSize: 10 }}
        dayLabelsWrapper={{ flex: 1 }}
        monthYearHeaderWrapperStyle={{ flex: 1 }}
    />
);

const TestRangeDurations = () => {
    return (
        <CalendarPicker
            minRangeDuration={[
                { date: new Date(), minDuration: 4 },
                { date: new Date(), minDuration: 3 },
            ]}
            maxRangeDuration={[
                { date: new Date(), maxDuration: 4 },
                { date: new Date(), maxDuration: 3 },
            ]}
        />
    );
};

const TestDisabledDates = () => {
    const isDateDisabled: DisabledDatesFunc = date => date.day() % 2 === 1;
    return <CalendarPicker disabledDates={isDateDisabled} />;
};

const TestCustomDateStyle = () => {
    const customStyles: CustomDateStyle[] = [
        {
            date: new Date(),
            containerStyle: { flex: 1 },
            style: { flex: 1 },
            textStyle: { fontSize: 10 },
        },
        {
            date: '2020-10-10',
            style: { flex: 1 },
        },
    ];

    return <CalendarPicker customDatesStyles={customStyles} />;
};

const TestCustomDateFuncs = () => {
    const customDatesStylesFn: CustomDatesStylesFunc = date => {
        if (date.weekday() === 0) {
            return {
                containerStyle: {
                    backgroundColor: 'red',
                },
                textStyle: {
                    color: 'black',
                },
            };
        } else {
            return {
                containerStyle: {
                    backgroundColor: 'white',
                },
                style: {
                    alignContent: 'center',
                },
                textStyle: {
                    color: 'black',
                },
            };
        }
    };

    const customDayHeaderStylesFn: CustomDayHeaderStylesFunc = (date: {
        dayOfWeek: number;
        year: number;
        month: number;
    }) => {
        return {
            textStyle: {
                color: date.year === 2020 ? 'red' : 'blue',
            },
            style: {
                backgroundColor: 'yellow',
            },
        };
    };
    return <CalendarPicker customDatesStyles={customDatesStylesFn} customDayHeaderStyles={customDayHeaderStylesFn} />;
};

const TestCallbacks = () => {
    const onDateChange: DateChangedCallback = date => console.log(date.day());

    return <CalendarPicker onDateChange={onDateChange} onMonthChange={onDateChange} />;
};

const TestRef = () => {
    const ref = React.useRef<CalendarPicker>();
    ref.current!.handleOnPressNext();
    ref.current!.handleOnPressPrevious();
    ref.current!.handleOnPressDay({
        day: 5,
        month: 6,
        year: 2020
    });
    ref.current!.resetSelections();
};

const TestDayOfWeekStyles = () => {
    return (
        <CalendarPicker
            allowRangeSelection
            previousTitle="<"
            previousTitleStyle={{ color: '#fff' }}
            nextTitle=">"
            nextTitleStyle={{ color: '#f00' }}
            dayLabelsWrapper={{
                borderBottomWidth: 0,
                borderTopWidth: 0,
            }}
        />
    );
};

const TestCustomComponents = () => {
    return <CalendarPicker nextComponent={<View></View>} previousComponent={[<TextInput />]} />;
};
