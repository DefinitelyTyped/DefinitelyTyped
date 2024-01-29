import * as React from "react";
import { TextInput, View } from "react-native";

import CalendarPicker, {
    ChangedDate,
    CustomDatesStylesFunc,
    CustomDateStyle,
    CustomDayHeaderStylesFunc,
    DateChangedCallback,
    DisabledDatesFunc,
    MonthChangedCallback,
} from "react-native-calendar-picker";

const TestSimpleProps = () => (
    <CalendarPicker
        weekdays={["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]}
        months={[
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
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
        selectedDayTextStyle={{ color: "#000" }}
        selectedRangeStartTextStyle={{ fontSize: 12 }}
        selectedRangeEndTextStyle={{ color: "#8dafee" }}
        selectedRangeStartStyle={{ flex: 1 }}
        selectedRangeEndStyle={{ flex: 1 }}
        selectedRangeStyle={{ flex: 1 }}
        selectedDisabledDatesTextStyle={{ color: "#efefef" }}
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
        selectMonthTitle="Choose month"
        selectYearTitle="Choose year"
        previousTitleStyle={{ fontSize: 10 }}
        headerWrapperStyle={{ flex: 1 }}
        monthTitleStyle={{ textTransform: "uppercase" }}
        yearTitleStyle={{ color: "#f04" }}
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
    const isDateDisabled: DisabledDatesFunc = (date: Date) => date.getDate() % 2 === 1;
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
            date: "2020-10-10",
            style: { flex: 1 },
        },
    ];

    return <CalendarPicker customDatesStyles={customStyles} />;
};

const TestCustomDateFuncs = () => {
    const customDatesStylesFn: CustomDatesStylesFunc = (date: Date) => {
        if (date.getDay() === 0) {
            return {
                containerStyle: {
                    backgroundColor: "red",
                },
                textStyle: {
                    color: "black",
                },
            };
        } else {
            return {
                containerStyle: {
                    backgroundColor: "white",
                },
                style: {
                    alignContent: "center",
                },
                textStyle: {
                    color: "black",
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
                color: date.year === new Date().getFullYear() ? "red" : "blue",
            },
            style: {
                backgroundColor: "yellow",
            },
        };
    };
    return <CalendarPicker customDatesStyles={customDatesStylesFn} customDayHeaderStyles={customDayHeaderStylesFn} />;
};

const TestCallbacks = () => {
    const onDateChange: DateChangedCallback = (date: Date, changedDate: ChangedDate) =>
        `Updated ${changedDate} to ${date.toDateString()}`;

    const onMonthChange: MonthChangedCallback = (date: Date) => `Updated month to ${date.getMonth()}`;

    return <CalendarPicker onDateChange={onDateChange} onMonthChange={onMonthChange} />;
};

const TestRef = () => {
    const ref = React.useRef<CalendarPicker>();
    const today = new Date();
    ref.current!.handleOnPressNext();
    ref.current!.handleOnPressPrevious();
    ref.current!.handleOnPressDay({
        day: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear(),
    });
    ref.current!.resetSelections();
};

const TestDayOfWeekStyles = () => {
    return (
        <CalendarPicker
            allowRangeSelection
            previousTitle="<"
            previousTitleStyle={{ color: "#fff" }}
            nextTitle=">"
            nextTitleStyle={{ color: "#f00" }}
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

const TestInitialViewValues = () => {
    return (
        <>
            <CalendarPicker initialView={"days"} />
            <CalendarPicker initialView={"months"} />
            <CalendarPicker initialView={"years"} />
            <CalendarPicker initialView={undefined} />
        </>
    );
};

const TestParsableDateValues = () => {
    const today = new Date();
    const inTwoWeeks = new Date(today.setDate(today.getDate() + 14));
    return (
        <>
            <CalendarPicker minDate={today} maxDate={inTwoWeeks} />
            <CalendarPicker minDate={today.valueOf()} maxDate={inTwoWeeks.valueOf()} />
            <CalendarPicker minDate={today.toISOString()} maxDate={inTwoWeeks.toISOString()} />
        </>
    );
};
