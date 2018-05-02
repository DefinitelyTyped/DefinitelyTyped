import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Timepicker
const _timePicker = new M.Timepicker(elem);

// $ExpectType Timepicker
new materialize.Timepicker(elem);
// $ExpectType Timepicker
const timePicker = new materialize.Timepicker(elem, {
    defaultTime: "13:14"
});
// $ExpectType void
timePicker.open();
// $ExpectType void
timePicker.showView("hours");
// $ExpectType void
timePicker.destroy();
// $ExpectType TimepickerOptions
timePicker.options;
// $ExpectType Element
timePicker.el;
// $ExpectType boolean
timePicker.isOpen;

$(".whatever").timepicker();
$(".whatever").timepicker({ defaultTime: "13:14" });
$(".whatever").timepicker("open");
$(".whatever").timepicker("destroy");
$(".whatever").timepicker("showView", "hours");
