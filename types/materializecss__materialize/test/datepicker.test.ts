import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Datepicker
const _datePicker = new M.Datepicker(elem);
// $ExpectType Datepicker
const el = M.Datepicker.init(elem);
// $ExpectType Datepicker[]
const els = M.Datepicker.init(document.querySelectorAll('.whatever'));

// $ExpectType Datepicker
new materialize.Datepicker(elem);
// $ExpectType Datepicker
const datePicker = new materialize.Datepicker(elem, {
    defaultDate: new Date(),
    onSelect(date) {
        // $ExpectType Datepicker
        this;
        // $ExpectType Date
        date;
    }
});
// $ExpectType void
datePicker.open();
// $ExpectType void
datePicker.setDate(new Date());
// $ExpectType void
datePicker.destroy();
// $ExpectType DatepickerOptions
datePicker.options;
// $ExpectType Element
datePicker.el;
// $ExpectType boolean
datePicker.isOpen;

// $ExpectType Datepicker
const _datePickerWithNullableOptions = new materialize.Datepicker(elem, {
    defaultDate: null,
    minDate: null,
    maxDate: null,
    container: null,
    parse: null,
    disableDayFn: null,
    onSelect : null,
    onOpen : null,
    onClose : null,
    onDraw : null,
});

$(".whatever").datepicker();
$(".whatever").datepicker({ defaultDate: new Date() });
$(".whatever").datepicker({
    defaultDate: null,
    minDate: null,
    maxDate: null,
    container: null,
    parse: null,
    disableDayFn: null,
    onSelect : null,
    onOpen : null,
    onClose : null,
    onDraw : null,
});
$(".whatever").datepicker("open");
$(".whatever").datepicker("destroy");
$(".whatever").datepicker("setDate", new Date());
$(".whatever").datepicker("gotoDate", new Date());
