import * as materialize from "materializecss__materialize";

const elem = document.querySelector(".whatever")!;

// $ExpectType Timepicker
const _timePicker = new M.Timepicker(elem);
// $ExpectType Timepicker
const el = M.Timepicker.init(elem);
// $ExpectType Timepicker[]
const els = M.Timepicker.init(document.querySelectorAll(".whatever"));

// $ExpectType Timepicker
new materialize.Timepicker(elem);
// $ExpectType Timepicker
const timePicker = new materialize.Timepicker(elem, {
    duration: 1,
    container: "selector",
    showClearBtn: true,
    defaultTime: "13:14",
    fromNow: 1,
    i18n: { done: "Ok, Mate" },
    autoClose: true,
    twelveHour: true,
    vibrate: true,
    onOpenStart(el) {
        // $ExpectType Element
        el;
    },
    onOpenEnd(el) {
        // $ExpectType Element
        el;
    },
    onCloseStart(el) {
        // $ExpectType Element
        el;
    },
    onCloseEnd(el) {
        // $ExpectType Element
        el;
    },
    onSelect(hour, minute) {
        // $ExpectType number
        hour;
        // $ExpectType number
        minute;
    },
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
// $ExpectType "AM" | "PM"
timePicker.amOrPm;
// $ExpectType Views
timePicker.currentView;
// $ExpectType "vibrate" | "webkitVibrate" | null
timePicker.vibrate;

$(".whatever").timepicker();
$(".whatever").timepicker({ defaultTime: "13:14" });
$(".whatever").timepicker("open");
$(".whatever").timepicker("destroy");
$(".whatever").timepicker("showView", "hours");
