import { Datepicker, DateRangePicker } from "vanillajs-datepicker";

const container = document.createElement("div");
const datePicker = new Datepicker(container);

// test dateRangePicker
const start = document.createElement("input");
start.setAttribute("name", "start");
start.setAttribute("type", "text");

const end = document.createElement("input");
end.setAttribute("name", "end");
end.setAttribute("type", "text");

container.appendChild(start);
container.appendChild(end);

const dateRangePicker = new DateRangePicker(container, {
    allowOneSidedRange: false,
    autohide: false,
    orientation: "middle center",
    todayHighlight: true,
});

const datePickerWithCustomOptions = new Datepicker(container, {
    autohide: false,
    buttonClass: "btn",
    calendarWeeks: true,
    clearButton: true,
    enableOnReadonly: false,
    nextArrow: ">",
    orientation: "middle center",
    prevArrow: "<",
    shortcutKeys: {
        show: {
            key: "ArrowDown",
        },
        prevButton: {
            key: "ArrowLeft",
            ctrlOrMetaKey: true,
        },
    },
    todayButton: true,
    weekNumbers: 1,
});
