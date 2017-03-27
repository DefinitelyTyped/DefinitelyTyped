import * as Flatpickr from 'flatpickr';

const picker1 = new Flatpickr('input');

const input = document.querySelector('input');
if (input != null) {
    const picker2 = new Flatpickr(input, {
        mode: 'range',
        onChange: dates => null
    });
    picker2.setDate(['2016-11-15T00:00:00.000Z', new Date()]);
}

picker1.destroy();
