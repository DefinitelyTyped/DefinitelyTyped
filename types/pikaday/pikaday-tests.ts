/// <reference types="jquery" />

import * as Pikaday from "pikaday";
import * as moment from "moment";

new Pikaday({field: document.getElementById('datepicker')});
new Pikaday({field: $('#datepicker')[0]});

(() => {
    const field: HTMLInputElement = <HTMLInputElement> document.getElementById('datepicker');
    const picker = new Pikaday({
        onSelect: (date: Date) => {
            field.value = picker.toString();
            console.log(date.toISOString());
        }
    });
    field.parentNode.insertBefore(picker.el, field.nextSibling);
})();

(() => {
    const picker = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'D MMM YYYY',
        onSelect: () => {
            console.log(this.getMoment().format('Do MMMM YYYY'));
        }
    });

    picker.toString();
    picker.toString('YYYY-MM-DD');
    picker.getDate();
    picker.setDate('2015-01-01');
    picker.getMoment();
    picker.setMoment(moment('14th February 2014', 'DDo MMMM YYYY'));
    picker.gotoDate(new Date(2014, 1));
    picker.gotoToday();
    picker.gotoMonth(2);
    picker.nextMonth();
    picker.prevMonth();
    picker.gotoYear(2015);
    picker.setMinDate(new Date());
    picker.setMaxDate(new Date());
    picker.setStartRange(new Date());
    picker.setEndRange(new Date());
    picker.isVisible();
    picker.show();
    picker.adjustPosition();
    picker.hide();
    picker.destroy();
})();

(() => {
    const i18n: Pikaday.PikadayI18nConfig = {
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    };
    new Pikaday({i18n});
})();

(() => {
    new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'YYYY-MM-DD',
        trigger: document.getElementById('datepicker'),
        bound: false,
        position: 'top right',
        reposition: false,
        container: document.getElementById('myTag'),
        defaultDate: new Date(),
        setDefaultDate: true,
        firstDay: 1,
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        disableWeekends: true,
        disableDayFn: (date) => true,
        yearRange: [2000, 2020],
        showWeekNumber: true,
        isRTL: true,
        yearSuffix: 'r',
        showMonthAfterYear: false,
        showDaysInNextAndPreviousMonths: true,
        numberOfMonths: 2,
        mainCalendar: 'right',
        theme: 'myTheme',
        formatStrict: true,
        parse: () => new Date('2017-08-23'),
        onSelect: () => {},
        onOpen: () => {},
        onClose: () => {},
        onDraw: () => {}
    });
})();

(() => {
    new Pikaday({
        yearRange: 5
    });
})();
