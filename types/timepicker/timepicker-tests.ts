// test without options
$('#timepicker').timepicker({});

// test each option
$('#timepicker').timepicker({
    appendTo: '#timepicker',
});

$('#timepicker').timepicker({
    appendTo: clickedElement => clickedElement,
});

$('#timepicker').timepicker({
    appendTo: $('#timepicker'),
});

$('#timepicker').timepicker({
    className: 'timepicker',
});

$('#timepicker').timepicker({
    closeOnWindowScroll: true,
});

$('#timepicker').timepicker({
    disableTimeRanges: [
        ['3:00am', '4:30am'],
        ['5:00pm', '8:00pm'],
    ],
});

$('#timepicker').timepicker({
    disableTextInput: true,
});

$('#timepicker').timepicker({
    disableTouchKeyboard: true,
});

$('#timepicker').timepicker({
    durationTime: '8:00am',
});

$('#timepicker').timepicker({
    forceRoundTime: true,
});

$('#timepicker').timepicker({
    lang: { am: 'am', pm: 'pm', AM: 'AM', PM: 'PM', decimal: '.', mins: 'mins', hr: 'hr', hrs: 'hrs' },
});

$('#timepicker').timepicker({
    listWidth: 10,
});

$('#timepicker').timepicker({
    maxTime: '8:00pm',
});

$('#timepicker').timepicker({
    minTime: '8:00am',
});

$('#timepicker').timepicker({
    noneOption: true,
});

$('#timepicker').timepicker({
    noneOption: 'none',
});

$('#timepicker').timepicker({
    noneOption: {
        label: 'label',
        value: 'value',
        className: 'className',
    },
});

$('#timepicker').timepicker({
    noneOption: {
        label: 'label',
        value: 'value',
    },
});

$('#timepicker').timepicker({
    noneOption: [
        'none',
        {
            label: 'label',
            value: 'value',
            className: 'className',
        },
    ],
});

$('#timepicker').timepicker({
    orientation: 'l',
});

$('#timepicker').timepicker({
    roundingFunction: (seconds, {}) => (seconds && Number.isFinite(seconds) ? Number(seconds) : 0),
});

$('#timepicker').timepicker({
    scrollDefault: '8:00am',
});

$('#timepicker').timepicker({
    scrollDefault: new Date(),
});

$('#timepicker').timepicker({
    scrollDefault: 0,
});

$('#timepicker').timepicker({
    selectOnBlur: true,
});

$('#timepicker').timepicker({
    show2400: true,
});

$('#timepicker').timepicker({
    showDuration: true,
});

$('#timepicker').timepicker({
    showOn: ['focus'],
});

$('#timepicker').timepicker({
    showOn: null,
});

$('#timepicker').timepicker({
    step: 60,
});

$('#timepicker').timepicker({
    stopScrollPropagation: true,
});

$('#timepicker').timepicker({
    timeFormat: 'H:i',
});

$('#timepicker').timepicker({
    timeFormat: (date: Date) => `${date.getHours()}:${date.getMinutes()}`,
});

$('#timepicker').timepicker({
    typeaheadHighlight: true,
});

$('#timepicker').timepicker({
    useSelect: true,
});

$('#timepicker').timepicker({
    wrapHours: true,
});

// test each method
$('#timepicker').timepicker('getSecondsFromMidnight');

$('#timepicker').timepicker('getTime');
$('#timepicker').timepicker('getTime', new Date());

$('#timepicker').timepicker('hide');

$('#timepicker').timepicker('isVisible');

$('#timepicker').timepicker('option', {});
$('#timepicker').timepicker('option', { step: 60 });

$('#timepicker').timepicker('remove');

$('#timepicker').timepicker('setTime', new Date());

$('#timepicker').timepicker('show');
