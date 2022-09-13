function tests_simple() {
    $('#datepicker').datepicker();
    $('#datepicker').datepicker({
        format: 'mm-dd-yyyy'
    });
    $('#datepicker').datepicker('setStartDate');
    $('#datepicker').datepicker('setStartDate', null);
    $('#datepicker').datepicker('setEndDate', '2012-12-31');
    $('#date-end')
        .datepicker()
        .on('changeDate', function (ev) { ev; });
    var startDate = new Date(2012, 1, 20);
    var endDate = new Date(2012, 1, 25);
    $('#date-start')
        .datepicker()
        //.on("changeDate", function (ev) {        // bug https://typescript.codeplex.com/workitem/1976
        .on("changeDate", function (ev: DatepickerEventObject) {
            if (ev.date.valueOf() > endDate.valueOf()) {
                $('#alert').show().find('strong').text('The start date must be before the end date.');
            } else {
                $('#alert').hide();
                startDate = ev.date;
                $('#date-start-display').text($('#date-start').data('date'));
            }
            $('#date-start').datepicker('hide');
        });
    $('#date-end')
        .datepicker()
        //.on('changeDate', function (ev) {        // bug https://typescript.codeplex.com/workitem/1976
        .on('changeDate', function (ev: DatepickerEventObject) {
            if (ev.date.valueOf() < startDate.valueOf()) {
                $('#alert').show().find('strong').text('The end date must be after the start date.');
            } else {
                $('#alert').hide();
                endDate = ev.date;
                $('#date-end-display').text($('#date-end').data('date'));
            }
            $('#date-end').datepicker('hide');
        });
}

$(function () {
    $('#dp1').datepicker({
        format: 'mm-dd-yyyy'
    });
    $('#dp2').datepicker();
    $('#dp3').datepicker();
    $('#dp3').datepicker();
    $('#dpYears').datepicker();
    $('#dpMonths').datepicker();


    var startDate = new Date(2012, 1, 20);
    var endDate = new Date(2012, 1, 25);
    $('#dp4').datepicker()
        //.on('changeDate', function (ev) {        // bug https://typescript.codeplex.com/workitem/1976
        .on('changeDate', function (ev: DatepickerEventObject) {
            if (ev.date.valueOf() > endDate.valueOf()) {
                $('#alert').show().find('strong').text('The start date can not be greater then the end date');
            } else {
                $('#alert').hide();
                startDate = ev.date;
                $('#startDate').text($('#dp4').data('date'));
            }
            $('#dp4').datepicker('hide');
        });
    $('#dp5').datepicker()
        //.on('changeDate', function (ev) {        // bug https://typescript.codeplex.com/workitem/1976
        .on('changeDate', function (ev: DatepickerEventObject) {
            if (ev.date.valueOf() < startDate.valueOf()) {
                $('#alert').show().find('strong').text('The end date can not be less then the start date');
            } else {
                $('#alert').hide();
                endDate = ev.date;
                $('#endDate').text($('#dp5').data('date'));
            }
            $('#dp5').datepicker('hide');
        });
});

$("#dp6").datepicker({
    startView: "days",
    daysOfWeekDisabled: "12345"
})
$("#dp6").datepicker({
    startView: "months",
    daysOfWeekDisabled: [1, 2, 3, 4, 5]
})
$("#dp6").datepicker({
    startView: "years",
    daysOfWeekDisabled: "12345"
})
$("#dp6").datepicker({
    startView: "decades",
    daysOfWeekDisabled: "12345"
})
$("#dp6").datepicker({
    startView: "centuries",
    daysOfWeekDisabled: "12345"
})
$("#dp6").datepicker({
    startView: "millenium",
    daysOfWeekDisabled: "12345"
})
