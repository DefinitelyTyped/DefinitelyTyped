import * as React from "react";
import { Text, View } from "react-native";
import { Calendar, CalendarList, Agenda, LocaleConfig, Timeline } from "react-native-calendars";

declare const Arrow: React.FC<unknown>;

// this is copied directly from the documentation at https://github.com/wix/react-native-calendars#basic-parameters
// and then linting errors are addressed which is why formatting is slightly inconsistent
<Calendar
    // Initially visible month. Default = Date()
    current={"2012-03-01"}
    // Enable the option to swipe between months. Default = false
    enableSwipeMonths={true}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={"2012-05-10"}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={"2012-05-30"}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={day => {
        console.log("selected day", day);
    }}
    // Handler which gets executed on day long press. Default = undefined
    onDayLongPress={day => {
        console.log("selected day", day);
    }}
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat={"yyyy MM"}
    // Handler which gets executed when visible month changes in calendar. Default = undefined
    onMonthChange={month => {
        console.log("month changed", month);
    }}
    // Hide month navigation arrows. Default = false
    hideArrows={true}
    // Replace default arrows with custom ones (direction can be 'left' or 'right')
    renderArrow={direction => <Arrow />}
    // Do not show days of other months in month page. Default = false
    hideExtraDays={true}
    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
    // day from another month that is visible in calendar page. Default = false
    disableMonthChange={true}
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    firstDay={1}
    // Hide day names. Default = false
    hideDayNames={true}
    // Show week numbers to the left. Default = false
    showWeekNumbers={true}
    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
    onPressArrowLeft={substractMonth => substractMonth()}
    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
    onPressArrowRight={addMonth => addMonth()}
    // Disable left arrow. Default = false
    disableArrowLeft={true}
    // Disable right arrow. Default = false
    disableArrowRight={true}
/>;

<Calendar
    // Initially visible month. Default = Date()
    current={"2012-03-01"}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={"2012-05-10"}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={"2012-05-30"}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={date => {
        console.log("selected day", date.day);
    }}
    // Handler which gets executed on day long press. Default = undefined
    onDayLongPress={date => {
        console.log("selected day", date.day);
    }}
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat={"yyyy MM"}
    // Handler which gets executed when visible month changes in calendar. Default = undefined
    onMonthChange={date => {
        console.log("month changed", date.month);
    }}
    // Hide month navigation arrows. Default = false
    hideArrows={true}
    // Replace default arrows with custom ones (direction can be 'left' or 'right')
    renderArrow={direction => <View />}
    // Do not show days of other months in month page. Default = false
    hideExtraDays={true}
    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
    // day from another month that is visible in calendar page. Default = false
    disableMonthChange={true}
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    firstDay={1}
    // Hide day names. Default = false
    hideDayNames={true}
    // Show week numbers to the left. Default = false
    showWeekNumbers={true}
    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
    onPressArrowLeft={substractMonth => console.log(substractMonth)}
    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
    onPressArrowRight={addMonth => console.log(addMonth)}
    markedDates={{
        "2012-05-16": { selected: true, marked: true, selectedColor: "blue" },
        "2012-05-17": { marked: true },
        "2012-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2012-05-19": { disabled: true, disableTouchEvent: true },
    }}
/>;

const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
const workout = { key: "workout", color: "green" };

<Calendar
    markedDates={{
        "2017-10-25": {
            dots: [vacation, massage, workout],
            selected: true,
            selectedColor: "red",
        },
        "2017-10-26": { dots: [massage, workout], disabled: true },
    }}
    markingType={"multi-dot"}
/>;

<Calendar
    // Collection of dates that have to be colored in a special way. Default = {}
    markedDates={{
        "2012-05-20": { textColor: "green" },
        "2012-05-22": { startingDay: true, color: "green" },
        "2012-05-23": {
            selected: true,
            endingDay: true,
            color: "green",
            textColor: "gray",
        },
        "2012-05-04": {
            disabled: true,
            startingDay: true,
            color: "green",
            endingDay: true,
        },
    }}
    // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
    markingType={"period"}
/>;

<Calendar
    markedDates={{
        "2017-12-14": {
            periods: [
                { startingDay: false, endingDay: true, color: "#5f9ea0" },
                { startingDay: false, endingDay: true, color: "#ffa500" },
                { startingDay: true, endingDay: false, color: "#f0e68c" },
            ],
            selected: true,
        },
        "2017-12-15": {
            periods: [
                { startingDay: true, endingDay: false, color: "#ffa500" },
                { color: "transparent" },
                { startingDay: false, endingDay: false, color: "#f0e68c" },
            ],
            disabled: true,
        },
    }}
    // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
    markingType="multi-period"
/>;

<Calendar
    // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
    markingType="custom"
    markedDates={{
        "2018-03-28": {
            customStyles: {
                container: {
                    backgroundColor: "green",
                },
                text: {
                    color: "black",
                    fontWeight: "bold",
                },
            },
        },
        "2018-03-29": {
            customStyles: {
                container: {
                    backgroundColor: "white",
                    elevation: 2,
                },
                text: {
                    color: "blue",
                },
            },
        },
    }}
/>;

<Calendar
    // Specify style for calendar container element. Default = {}
    style={{
        borderWidth: 1,
        borderColor: "gray",
        height: 350,
    }}
    // Specify theme properties to override specific styles for calendar parts. Default = {}
    theme={{
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#00adf5",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        dotColor: "#00adf5",
        selectedDotColor: "#ffffff",
        arrowColor: "orange",
        monthTextColor: "blue",
        textDayFontFamily: "monospace",
        textMonthFontFamily: "monospace",
        textDayHeaderFontFamily: "monospace",
        textMonthFontWeight: "bold",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
        textDayStyle: {
            fontSize: 20,
        },
        dotStyle: {
            backgroundColor: "white",
        },
        arrowStyle: {
            padding: 0,
        },
    }}
/>;

<Calendar
    style={[{}, { height: 300 }]}
    dayComponent={({ date, state }) => {
        return (
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        textAlign: "center",
                        color: state === "disabled" ? "gray" : "black",
                    }}
                >
                    {date.day}
                </Text>
            </View>
        );
    }}
/>;

<CalendarList
    // Callback which gets executed when visible months change in scroll view. Default = undefined
    onVisibleMonthsChange={months => {
        console.log("now these months are visible", months);
    }}
    // Max amount of months allowed to scroll to the past. Default = 50
    pastScrollRange={50}
    // Horizontal
    horizontal={true}
    // Max amount of months allowed to scroll to the future. Default = 50
    futureScrollRange={50}
    // Enable or disable scrolling of calendar list
    scrollEnabled={true}
    // Enable or disable vertical scroll indicator. Default = false
    showScrollIndicator={true}
    // Initially visible month. Default = Date()
    current={"2012-03-01"}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={"2012-05-10"}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={"2012-05-30"}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={day => {
        console.log("selected day", day);
    }}
    // Handler which gets executed on day long press. Default = undefined
    onDayLongPress={day => {
        console.log("selected day", day);
    }}
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat={"yyyy MM"}
    // Handler which gets executed when visible month changes in calendar. Default = undefined
    onMonthChange={month => {
        console.log("month changed", month);
    }}
    // Hide month navigation arrows. Default = false
    hideArrows={true}
    // Replace default arrows with custom ones (direction can be 'left' or 'right')
    renderArrow={direction => <View />}
    // Do not show days of other months in month page. Default = false
    hideExtraDays={true}
    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
    // day from another month that is visible in calendar page. Default = false
    disableMonthChange={true}
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    firstDay={1}
    // Hide day names. Default = false
    hideDayNames={true}
    // Show week numbers to the left. Default = false
    showWeekNumbers={true}
    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
    onPressArrowLeft={substractMonth => console.log(substractMonth)}
    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
    onPressArrowRight={addMonth => console.log(addMonth)}
    // Disable days by default. Default = false
    disabledByDefault={true}
    // Display loading indicator. Default = false
    displayLoadingIndicator={true}
    // When true, the calendar list scrolls to top when the status bar is tapped. Default = true
    scrollsToTop={true}
    // Enable paging on horizontal, default = false
    pagingEnabled={true}
    // Provide custom day rendering component.
    dayComponent={({ date, state }) => {
        return (
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        textAlign: "center",
                        color: state === "disabled" ? "gray" : "black",
                    }}
                >
                    {date.day}
                </Text>
            </View>
        );
    }}
/>;

<Agenda
    // the list of items that have to be displayed in agenda. If you want to render item as empty date
    // the value of date key kas to be an empty array []. If there exists no value for date key it is
    // considered that the date in question is not yet loaded
    items={{
        "2012-05-22": [{ text: "item 1 - any js object" }],
        "2012-05-23": [{ text: "item 2 - any js object" }],
        "2012-05-24": [],
        "2012-05-25": [{ text: "item 3 - any js object" }, { text: "any js object" }],
    }}
    // callback that gets called when items for a certain month should be loaded (month became visible)
    loadItemsForMonth={month => {
        console.log("trigger items loading");
    }}
    // callback that fires when the calendar is opened or closed
    onCalendarToggled={calendarOpened => {
        console.log(calendarOpened);
    }}
    // callback that gets called on day press
    onDayPress={day => {
        console.log("day pressed");
    }}
    // callback that gets called when day changes while scrolling agenda list
    onDayChange={day => {
        console.log("day changed");
    }}
    // initially selected day
    selected={"2012-05-16"}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={"2012-05-10"}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={"2012-05-30"}
    // Max amount of months allowed to scroll to the past. Default = 50
    pastScrollRange={50}
    // Max amount of months allowed to scroll to the future. Default = 50
    futureScrollRange={50}
    // specify how each item should be rendered in agenda
    renderItem={(item, firstItemInDay) => {
        return firstItemInDay ? <View /> : <View />;
    }}
    // specify how each date should be rendered. day can be undefined if the item is not first in that day.
    renderDay={(day, item) => {
        return <View />;
    }}
    // specify how empty date content with no items should be rendered
    renderEmptyDate={() => {
        return <View />;
    }}
    // specify how agenda knob should look like
    renderKnob={() => {
        return <View />;
    }}
    // specify what should be rendered instead of ActivityIndicator
    renderEmptyData={() => {
        return <View />;
    }}
    // specify your item comparison function for increased performance
    rowHasChanged={(r1, r2) => {
        return r1.text !== r2.text;
    }}
    // Hide knob button. Default = false
    hideKnob={true}
    // By default, agenda dates are marked if they have at least one item, but you can override this if needed
    markedDates={{
        "2012-05-16": { selected: true, marked: true },
        "2012-05-17": { marked: true },
        "2012-05-18": { disabled: true },
    }}
    // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
    onRefresh={() => console.log("refreshing...")}
    // Set this true while waiting for new data from a refresh
    refreshing={false}
    // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
    refreshControl={null}
    // agenda theme
    theme={{
        agendaDayTextColor: "yellow",
        agendaDayNumColor: "green",
        agendaTodayColor: "red",
        agendaKnobColor: "blue",
    }}
    // agenda container style
    style={{}}
    // Display loading indicator. Default = false
    displayLoadingIndicator={true}
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    firstDay={1}
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat={"yyyy MM"}
/>;

<Calendar
    renderHeader={date => (
        <View>
            <Text>{date.toISOString()}</Text>
        </View>
    )}
/>;

LocaleConfig.locales["fr"] = {
    monthNames: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
    ],
    monthNamesShort: [
        "Janv.",
        "Févr.",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juil.",
        "Août",
        "Sept.",
        "Oct.",
        "Nov.",
        "Déc.",
    ],
    dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
    today: "Aujourd'hui",
};

const events = [
    {
        start: "2020-03-26 12:30:00",
        end: "2020-03-26 13:30:00",
        title: "Lunch with Taro",
        summary: "At Tokyo Grand Hotel",
        color: "#e6add8",
    },
    {
        start: "2020-03-26 17:00:00",
        end: "2020-03-26 18:00:00",
        title: "Walk a dog",
        summary: "On the riverline",
        color: "#ade6d8",
    },
];

<Timeline
    // Start time of the timeline
    start={5}
    // End time of the timeline
    end={22}
    // Format time 24h style or AM/PM style
    format24h={true}
    // Array of events to render
    events={events}
    // Handler which gets executed when event tap
    eventTapped={event => console.log("event tapped", event)}
/>;
