/// <reference types="jquery" />

import * as Pikaday from "pikaday";
import * as moment from "moment";

new Pikaday({field: document.getElementById('datepicker')});
new Pikaday({field: $('#datepicker')[0]});

(() => {
    var field:HTMLInputElement = <HTMLInputElement>document.getElementById('datepicker');
    var picker = new Pikaday({
        onSelect: function (date:Date) {
            field.value = picker.toString();
            console.log(date.toISOString());
        }
    });
    field.parentNode.insertBefore(picker.el, field.nextSibling);
})();

(() => {
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'D MMM YYYY',
        onSelect: function () {
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
    picker.setMinDate(new Date);
    picker.setMaxDate(new Date);
    picker.setStartRange(new Date);
    picker.setEndRange(new Date);
    picker.isVisible();
    picker.show();
    picker.adjustPosition();
    picker.hide();
    picker.destroy();
})();

(() => {
    var i18n: Pikaday.PikadayI18nConfig = {
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    };
    new Pikaday({i18n});
})();

(() => {
    new Pikaday(
        {
            field: document.getElementById('datepicker'),
            firstDay: 1,
            minDate: new Date('2000-01-01'),
            maxDate: new Date('2020-12-31'),
            yearRange: [2000, 2020]
        });
})();

(() => {
    new Pikaday(
        {
            field: document.getElementById('datepicker'),
            firstDay: 1,
            minDate: new Date('2000-01-01'),
            maxDate: new Date('2020-12-31'),
            showDaysInNextAndPreviousMonths: true
        });
})();
