const elem = document.querySelector('.foo')!;

// $ExpectType void
M.AutoInit();

// $ExpectType Carousel
const carousel = M.Carousel.init(elem, {});

// $ExpectType Collapsible
const collapsible = M.Collapsible.init(elem, {});

// $ExpectType Dropdown
const dropdown = M.Dropdown.init(elem, {});

// $ExpectType TapTarget
const tapTarget = M.TapTarget.init(elem, {});

// $ExpectType Materialbox
const materialbox = M.Materialbox.init(elem, {});

// $ExpectType Slider
const slider = M.Slider.init(elem, {});

// $ExpectType Modal
const modal = M.Modal.init(elem, {});

// $ExpectType Parallax
const parallax = M.Parallax.init(elem, {});

// $ExpectType Pushpin
const pushpin = M.Pushpin.init(elem, {});

// $ExpectType ScrollSpy
const scrollSpy = M.ScrollSpy.init(elem, {});

// $ExpectType Sidenav
const sidenav = M.Sidenav.init(elem, {});

// $ExpectType Tabs
const tabs = M.Tabs.init(elem, {});

// $ExpectType Toast
const toast = M.toast({ html: 'I am a toast!' });

// $ExpectType Tooltip
const tooltips = M.Tooltip.init(elem, {});

// $ExpectType FloatingActionButton
const fab = M.FloatingActionButton.init(elem, {});

// $ExpectType Autocomplete
const autocomplete = M.Autocomplete.init(elem, {});

// $ExpectType Chips
const chips = M.Chips.init(elem, {});

// $ExpectType DatePicker
const datePicker = M.DatePicker.init(elem, {});

// $ExpectType TimePicker
const timePicker = M.TimePicker.init(elem, {});

// $ExpectType FormSelect
const formSelect = M.FormSelect.init(elem, {});

// $ExpectType CharacterCounter
const characterCounter = M.CharacterCounter.init(elem);
