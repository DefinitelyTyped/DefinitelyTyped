import moment = require('moment');
import daterangepicker = require('daterangepicker');

import { DateRangePicker } from 'daterangepicker';

function tests_simple() {
    $('#daterange').daterangepicker();
    $('#daterange').daterangepicker({
        drops: 'auto',
    });
    $('input[name="daterange"]')
        .daterangepicker({
            timePicker: true,
            timePickerIncrement: 30,
            locale: {
                format: 'MM/DD/YYYY h:mm A',
            },
            maxSpan: { days: 10 },
            applyButtonClasses: 'my-apply-class',
            cancelButtonClasses: 'my-cancel-class',
            showDropdowns: true,
            maxYear: 3000,
            minYear: 2000,
        })
        .data('daterangepicker')
        .remove();

    $('#reportrange').daterangepicker({
        ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [
                moment().subtract(1, 'month').startOf('month'),
                moment().subtract(1, 'month').endOf('month'),
            ],
        },
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', (_event: Event, _picker: DateRangePicker) => {});

    $('input[name="datefilter"]').on('cancel.daterangepicker', (_event: Event, _picker: DateRangePicker) => {});

    $('input[name="datefilter"]').on('showCalendar.daterangepicker', (_event: Event, picker: DateRangePicker) => {
        picker.startDate; // $ExpectType Moment
        picker.endDate; // $ExpectType Moment
        picker.minDate; // $ExpectType Moment
        picker.maxDate; // $ExpectType Moment
        picker.showDropdowns; // $ExpectType boolean
        picker.minYear; // $ExpectType number
        picker.maxYear; // $ExpectType number
        picker.showWeekNumbers; // $ExpectType boolean
        picker.showISOWeekNumbers; // $ExpectType boolean
        picker.timePicker; // $ExpectType boolean
        picker.timePickerIncrement; // $ExpectType number
        picker.timePicker24Hour; // $ExpectType boolean
        picker.timePickerSeconds; // $ExpectType boolean
        picker.ranges; // $ExpectType { [name: string]: [DateOrString, DateOrString]; }
        picker.showCustomRangeLabel; // $ExpectType boolean
        picker.alwaysShowCalendars; // $ExpectType boolean
        picker.opens; // $ExpectType "left" | "right" | "center" || "center" | "left" | "right"
        picker.drops; // $ExpectType "down" | "up" || "up" | "down"
        picker.buttonClasses; // $ExpectType string[]
        picker.applyButtonClasses; // $ExpectType string
        picker.cancelButtonClasses; // $ExpectType string
        picker.locale; // $ExpectType Required<Locale>
        picker.singleDatePicker; // $ExpectType boolean
        picker.autoApply; // $ExpectType boolean
        picker.linkedCalendars; // $ExpectType boolean
        picker.autoUpdateInput; // $ExpectType boolean
        picker.parentEl; // $ExpectType JQuery<HTMLElement>
        picker.element; // $ExpectType JQuery<HTMLElement>
        picker.container; // $ExpectType JQuery<HTMLElement>
        picker.isShowing; // $ExpectType boolean
        picker.chosenLabel; // $ExpectType string
        picker.previousRightTime; // $ExpectType Moment
        picker.oldStartDate; // $ExpectType Moment
        picker.oldEndDate; // $ExpectType Moment
        picker.leftCalendar; // $ExpectType Calendar
        picker.rightCalendar; // $ExpectType Calendar
    });

    $('#demo').daterangepicker(
        {
            startDate: '05/06/2016',
            endDate: '05/12/2016',
        },
        (_start: moment.Moment, _end: moment.Moment, _label: string) => {
            console.log(
                "New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')",
            );
        },
    );

    $(() => {
        function cb(start: moment.Moment, end: moment.Moment) {
            $('#reportrange span').html(`${start.format('MMMM D, YYYY')} - ${end.format('MMMM D, YYYY')}`);
        }
        cb(moment().subtract(29, 'days'), moment());

        $('#reportrange').daterangepicker(
            {
                ranges: {
                    Today: [moment(), moment()],
                    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [
                        moment().subtract(1, 'month').startOf('month'),
                        moment().subtract(1, 'month').endOf('month'),
                    ],
                },
            },
            cb,
        );

        $('#reportrange').daterangepicker(
            {
                ranges: {
                    Today: [moment(), moment()],
                    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                },
                showCustomRangeLabel: false,
            },
            cb,
        );

        $('#endDate').daterangepicker({
            singleDatePicker: true,
            startDate: moment(),
        });
    });
}

declare const host: HTMLElement;
function test_from_amd() {
    const picker = new daterangepicker(host);
    console.log(picker.startDate.format('YYYY-MM-DD'));
}
