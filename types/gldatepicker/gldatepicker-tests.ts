$('input').glDatePicker();
$('#example2').glDatePicker(
{
    showAlways: true,
    allowMonthSelect: false,
    allowYearSelect: false,
    prevArrow: '',
    nextArrow: '',
    selectedDate: new Date(2013, 8, 5),
    selectableDateRange: [
        {
            from: new Date(2013, 8, 1),
            to: new Date(2013, 8, 10)
        },
        {
            from: new Date(2013, 8, 19),
            to: new Date(2013, 8, 22)
        },
    ],
    selectableDates: [
        { date: new Date(2013, 8, 24) },
        { date: new Date(2013, 8, 30) }
    ]
});

$('#example3').glDatePicker(
{
    showAlways: true,
    cssName: 'darkneon',
    selectedDate: new Date(2013, 0, 5),
    specialDates: [
        {
            date: new Date(2013, 0, 8),
            data: { message: 'Meeting every day 8 of the month' },
            repeatMonth: true
        },
        {
            date: new Date(0, 0, 1),
            data: { message: 'Happy New Year!' },
            repeatMonth: false,
            repeatYear: true
        },
    ],
    onClick: function (target, cell, date, data) {
        target.val(date.getFullYear() + ' - ' +
                    date.getMonth() + ' - ' +
                    date.getDate());

        if (data != null) {
            alert(data.message + '\n' + date);
        }
    }
});

$('#example4').glDatePicker(
{
    showAlways: true,
    selectedDate: new Date(2013, 8, 5),
    dowOffset: 3,
    selectableYears: [2012, 2013, 2014],
    selectableMonths: [8, 11],
    selectableDOW: [1, 4, 6]
});

// Doing it in a single pass
var myDatePicker = $('#example1').glDatePicker(
{
    showAlways: true,
    selectableDOW: [0, 2, 3]
}).glDatePicker(true);

// Or you can do it with multiple calls
$('example1').glDatePicker(
{
    showAlways: true,
    selectableDOW: [0, 2, 3]
});

// This example updates some options (calling render will re-generate the calendar)
$.extend(myDatePicker.options,
{
    cssName: 'darkneon',
    allowMonthSelect: false,
    allowYearSelect: false
});
myDatePicker.render();
myDatePicker.show();
