// without options
$('#timepicker').timepicker({});

// with options
$('#timepicker').timepicker({
    step: 60,
});

// with timeFormat string
$('#timepicker').timepicker({
    timeFormat: "H:i",
});

// with timeFormat function
$('#timepicker').timepicker({
    timeFormat: (date: Date) =>
        `${date.getHours()}:${date.getMinutes()}`,
});
