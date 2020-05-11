import * as moment from 'moment';
import * as Lightpick from 'lightpick';

const inputField = new HTMLInputElement();
const inputDate = moment();

// Required options
{
    const options: Lightpick.Options = { field: inputField };
    new Lightpick(options);
}

// All options
{
    const options: Lightpick.Options = { field: inputField };
    options.autoclose = true;
    options.disabledDatesInRange = true;
    options.disableDates = [inputDate, [inputDate, inputDate]];
    options.disableWeekends = true;
    options.dropdowns = true;
    options.dropdowns = {};
    options.dropdowns.months = true;
    options.dropdowns.years = true;
    options.dropdowns.years = {};
    options.dropdowns.years.max = 1;
    options.dropdowns.years.min = 1;
    options.endDate = inputDate;
    options.startDate = inputDate;
    options.field = inputField;
    options.secondField = inputField;
    options.firstDay = 1;
    options.footer = true;
    options.footer = '<div style="background:red">FOOTER</div>';
    options.format = 'DD/MM/YYYY';
    options.hideOnBodyClick = true;
    options.hoveringTooltip = true;
    options.inline = true;
    options.lang = 'US';
    options.locale = {};
    options.locale.buttons = {};
    options.locale.buttons.apply = 'Apply';
    options.locale.buttons.close = 'Close';
    options.locale.buttons.next = 'Next';
    options.locale.buttons.prev = 'Previous';
    options.locale.buttons.reset = 'Reset';
    options.locale.tooltip = {};
    options.locale.tooltip.one = 'One';
    options.locale.tooltip.other = 'Other';
    options.locale.tooltipOnDisabled = 'Disabled';
    options.locale.pluralize = (i, locale) => 'plural';
    options.maxDate = inputDate;
    options.minDate = inputDate;
    options.maxDays = 1;
    options.minDays = 1;
    options.numberOfMonths = 1;
    options.numberOfColumns = 1;
    options.orientation = 'top right';
    options.parentEl = 'body';
    options.parentEl = document.body;
    options.repick = true;
    options.selectForward = true;
    options.selectBackward = true;
    options.separator = ' - ';
    options.singleDate = true;
    options.tooltipNights = true;
    options.weekdayStyle = 'short';
    options.onOpen = () => console.log('open event');
    options.onClose = () => console.log('close event');
    options.onError = (errorMsg: string) => console.log(`error event: ${errorMsg}`);
    options.onSelect = (from: Lightpick.OutputDate, to: Lightpick.OutputDate) => {
        let str = '';
        str += from ? from.format('Do MMMM YYYY') + ' to ' : '';
        str += to ? to.format('Do MMMM YYYY') : '...';
        console.log(`str: ${str}`);
    };
    options.onSelectStart = (from: Lightpick.OutputDate) => {
        let str = '';
        str += from ? from.format('Do MMMM YYYY') + ' to ' : '';
        console.log(`str: ${str}`);
    };
    options.onSelectEnd = (to: Lightpick.OutputDate) => {
        let str = '';
        str += to ? to.format('Do MMMM YYYY') : '...';
        console.log(`str: ${str}`);
    };
    options.onMonthsChange = (month: number) => console.log(`changing to month ${month} event`);
    options.onYearsChange = (year: number) => console.log(`changing to year ${year} event`);

    new Lightpick(options);
}

// Methods
{
    const options: Lightpick.Options = { field: inputField };
    const picker = new Lightpick(options);
    picker.getDate();
    picker.getEndDate();
    picker.getStartDate();
    picker.gotoToday();
    picker.gotoDate(inputDate);
    picker.gotoYear(2019);
    picker.gotoMonth(1);
    picker.nextMonth();
    picker.prevMonth();
    picker.reloadOptions(options);
    picker.setDate(inputDate);
    picker.setDate(inputDate, true);
    picker.setEndDate(inputDate);
    picker.setEndDate(inputDate, true);
    picker.setStartDate(inputDate);
    picker.setStartDate(inputDate, true);
    picker.setDateRange(inputDate, inputDate);
    picker.setDateRange(inputDate, inputDate, true);
    picker.toString('YYYY-MM-DD');
    picker.reset();
    picker.show();
    picker.hide();
    picker.destroy();
}

// Fields
{
    const options: Lightpick.Options = { field: inputField };
    const picker = new Lightpick(options);
    console.log(picker.isShowing ? 'is open' : 'is closed');
    picker.el.onclick = console.log;
}
