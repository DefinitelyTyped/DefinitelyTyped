// Test with 'show' option
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-1').fdatepicker('show');

// Test with 'hide' option
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-2').fdatepicker('hide');

// Test with 'place' option
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-3').fdatepicker('place');

// Test with 'update' option using Date object
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-4').fdatepicker('update', new Date());

// Test with 'update' option using string
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-5').fdatepicker('update', '2000-01-01');

// Test without settings
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-6').fdatepicker();

// Test with empty settings
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-7').fdatepicker({});

// Test with settings
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-8').fdatepicker({
    initialDate: '02-12-1989',
    format: 'mm-dd-yyyy',
    disableDblClickSelection: true,
    leftArrow: '<<',
    rightArrow: '>>',
    closeIcon: 'X',
    closeButton: true
});

// Test 'show' event
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-9').fdatepicker({}).on('show', (event: FoundationDatepicker.Event) => {
    const date: Date = event.date;
});

// Test 'hide' event
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-10').fdatepicker({}).on('hide', (event: FoundationDatepicker.Event) => {
    const date: Date = event.date;
});

// Test 'changeDate' event
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-11').fdatepicker({}).on('changeDate', (event: FoundationDatepicker.Event) => {
    const date: Date = event.date;
});

// Test 'outOfRange' event
// $ExpectType JQuery<HTMLElement>
jQuery('.fd-12').fdatepicker({}).on('outOfRange', (event: FoundationDatepicker.OutOfRangeEvent) => {
    const date: Date = event.date;
    const startDate: Date = event.startDate;
    const endDate: Date = event.endDate;
});
