import { Datepicker, DateRangePicker } from 'vanillajs-datepicker';

const container = document.createElement('div');
const datePicker = new Datepicker(container);

// test dateRangePicker
const start = document.createElement('input');
start.setAttribute('name', 'start');
start.setAttribute('type', 'text');

const end = document.createElement('input');
end.setAttribute('name', 'end');
end.setAttribute('type', 'text');

container.appendChild(start);
container.appendChild(end);

const dateRangePicker = new DateRangePicker(container);

const datePickerWithCustomPrevArrow = new Datepicker(container, { prevArrow: '<' });
