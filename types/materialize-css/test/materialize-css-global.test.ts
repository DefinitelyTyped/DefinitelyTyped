const elem = document.querySelector('.whatever')!;
// $ExpectType Sidenav
const sidenav = new M.Sidenav(elem);

// $ExpectType Tabs
const tabs = new M.Tabs(elem);

// $ExpectType Modal
const modal = new M.Modal(elem);

// $ExpectType Autocomplete
const autocomplete = new M.Autocomplete(elem);

// $ExpectType CharacterCounter
const characterCounter = new M.CharacterCounter(elem);

// $ExpectType Tooltip
const tooltips = new M.Tooltip(elem);

// $ExpectType FloatingActionButton
const fab = new M.FloatingActionButton(elem);

// $ExpectType Toast
const toast = M.toast({ html: 'I am a toast!' });

// $ExpectType DatePicker
const datePicker = new M.DatePicker(elem);

// $ExpectType TimePicker
const timePicker = new M.TimePicker(elem);
