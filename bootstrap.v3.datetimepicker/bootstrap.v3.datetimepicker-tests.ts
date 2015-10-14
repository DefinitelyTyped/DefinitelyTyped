/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="bootstrap.v3.datetimepicker.d.ts" />

function test_cases() {
    $('#datetimepicker').datetimepicker();
    $('#datetimepicker').datetimepicker({
        pickDate: false
    });
    $('#datetimepicker').datetimepicker({
        pickTime: false
    });
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