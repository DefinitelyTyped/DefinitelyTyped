/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery.ui.datetimepicker.d.ts" />

// basic no options
$('#datetimepicker').datetimepicker({
    
});

// basic with some options
$('#datetimepicker').datetimepicker({
    dateFormat: "yy-mm-dd",
    timeFormat: 'HH:mm',
    nextText: "",
    prevText: ""
});

// function within the plugin
$('#datetimepicker').datetimepicker('formatTime', {
    format: "HH:mm",
    time: { hours: 1, minutes: 1, seconds: 1 }
});

