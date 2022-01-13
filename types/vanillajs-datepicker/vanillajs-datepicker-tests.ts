import { Datepicker, DateRangePicker } from 'vanillajs-datepicker';

const HTMLDATERANGEELEMENT = `
<div>
    <input type="text" name="start">
    <input type="text" name="end">
</div>`;

const HTMLDATEELEMENT = '<div></div>';

const datePicker = new Datepicker(HTMLDATEELEMENT);
const dateRangePicker = new DateRangePicker(HTMLDATERANGEELEMENT);
