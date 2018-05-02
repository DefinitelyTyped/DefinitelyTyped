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
const tooltip = new M.Tooltip(elem);

// $ExpectType FloatingActionButton
const fab = new M.FloatingActionButton(elem);

// $ExpectType Toast
const toast = M.toast({ html: 'I am a toast!' });

// $ExpectType Datepicker
const datePicker = new M.Datepicker(elem);

// $ExpectType Timepicker
const timePicker = new M.Timepicker(elem);

// $ExpectType Dropdown
const dropdown = new M.Dropdown(elem);

// $ExpectType FormSelect
const formselect = new M.FormSelect(elem);

// $ExpectType Carousel
const carousel = new M.Carousel(elem);

// $ExpectType Chips
const chips = new M.Chips(elem);

// $ExpectType Collapsible
const collapsible = new M.Collapsible(elem);

// $ExpectType Materialbox
const materialbox = new M.Materialbox(elem);

// $ExpectType Parallax
const parallax = new M.Parallax(elem);

// $ExpectType Pushpin
const pushpin = new M.Pushpin(elem);

// $ExpectType Range
const range = new M.Range(elem);

// $ExpectType ScrollSpy
const scrollspy = new M.ScrollSpy(elem);

// $ExpectType Slider
const slider = new M.Slider(elem);

// $ExpectType TapTarget
const taptarget = new M.TapTarget(elem);
