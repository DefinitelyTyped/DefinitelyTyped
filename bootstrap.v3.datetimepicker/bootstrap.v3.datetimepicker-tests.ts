/// <reference types="jquery"/>

import * as moment from 'moment';

function test_cases() {
    $('#datetimepicker').datetimepicker();
    $('#datetimepicker').datetimepicker({
        minDate: '2012-12-31'
    });

    $('#datetimepicker').data("DateTimePicker").maxDate('2012-12-31');

    var startDate = moment(new Date(2012, 1, 20));
    var endDate = moment(new Date(2012, 1, 25));
    $('#datetimepicker2')
        .datetimepicker()
        .on("dp.change", function (ev) {
            if (ev.date.valueOf() > endDate.valueOf()) {
                $('#alert').show().find('strong').text('The start date must be before the end date.');
            } else {
                $('#alert').hide();
                startDate = ev.date;
                $('#date-start-display').text($('#date-start').data('date'));
            }
        });
}