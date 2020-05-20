var beforeShowCallback, onSelectCallback, onCloseCallback, onHourShow, onMinuteShow;
$('#timepicker').timepicker({
    timeSeparator: ':',
    showLeadingZero: true,
    showMinutesLeadingZero: true,
    showPeriod: false,
    showPeriodLabels: true,
    periodSeparator: ' ',
    altField: '#alternate_input',
    defaultTime: '12:34',
    showOn: 'focus',
    button: null,
    hourText: 'Hour',
    minuteText: 'Minute',
    amPmText: ['AM', 'PM'],

    myPosition: 'left top',
    atPosition: 'left bottom',
    beforeShow: beforeShowCallback,
    onSelect: onSelectCallback,
    onClose: onCloseCallback,
    onHourShow: onHourShow,
    onMinuteShow: onMinuteShow,
    hours: {
        starts: 0,
        ends: 23
    },
    minutes: {
        starts: 0,
        ends: 55,
        interval: 5
    },
    rows: 4,
    showHours: true,
    showMinutes: true,
    showCloseButton: false,
    closeButtonText: 'Done',
    showNowButton: false,
    nowButtonText: 'Now',
    showDeselectButton: false,
    deselectButtonText: 'Deselect'
});

$().timepicker('getTime');
$().timepicker('setTime', new Date());
