import * as moment from 'moment';
import * as EonasdanBootstrapDatetimepicker from './index';

// Minimum Setup
$("#datetimepicker1").datetimepicker();

// Using Locales
$("#datetimepicker2").datetimepicker({
    locale: "ru"
});

// Custom Formats
$("#datetimepicker3").datetimepicker({
    format: "LT"
});

// Enabled/Disabled Dates
$("#datetimepicker5").datetimepicker({
    defaultDate: "11/1/2013",
    disabledDates: [
        moment("12/25/2013"),
        new Date(2013, 11 - 1, 21),
        "11/22/2013 00:53"
    ]
});

// Enabled/Disabled Hours
$("#datetimepicker").datetimepicker({
    format: "LT",
    enabledHours: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
});

// Linked Pickers
$("#datetimepicker7").datetimepicker({
    useCurrent: false
});
$("#datetimepicker6").on("dp.change", function (e) {
    $("#datetimepicker7").data("DateTimePicker").minDate(e.date);
});
$("#datetimepicker7").on("dp.change", function (e) {
    $("#datetimepicker6").data("DateTimePicker").maxDate(e.date);
});

// Custom Icons
$("#datetimepicker8").datetimepicker({
    icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down"
    }
});

// Min View Mode
$("#datetimepicker10").datetimepicker({
    viewMode: "years",
    format: "MM/YYYY"
});

// Disabled Days of the Week
$("#datetimepicker11").datetimepicker({
    daysOfWeekDisabled: [0, 6, EonasdanBootstrapDatetimepicker.DayOfWeek.Thursday]
});

// Inline
$("#datetimepicker12").datetimepicker({
    inline: true,
    sideBySide: true
});

// Functions
$("#dtpFrom").datetimepicker({
    useCurrent: true,
    format: "DD/MM/YYYY",
    showTodayButton: true,
    showClear: true,
    showClose: true,
    maxDate: new Date(),
    toolbarPlacement: "top"
});
$("#dtpFrom").data("DateTimePicker").date(moment(new Date()).format("DD/MM/YYYY"));

// Event
var datepicker = $("#datepicker").parent();
datepicker.datetimepicker({
    locale: "pl",
    format: "YYYY-MM-DD",
    minDate: new Date(1900, 0, 1),
    showTodayButton: true,
    toolbarPlacement: "top",
    widgetPositioning: {
        horizontal: "right"
    }
});
datepicker.on("dp.change", function (e) {
    alert("e.date=" + e.date);
});
