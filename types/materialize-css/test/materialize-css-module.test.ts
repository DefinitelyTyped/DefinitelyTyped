import * as materialize from "materialize-css";
const elem = document.querySelector('.foo') || document.createElement('div');

//
// AutoInit
//
// $ExpectType void
materialize.AutoInit(elem);

//
// Carousel
//
// $ExpectType Carousel
new materialize.Carousel(elem);
// $ExpectType Carousel
const carousel = new materialize.Carousel(elem, {
    duration: 200,
    dist: -200,
    shift: 0,
    padding: 0,
    numVisible: 5,
    fullWidth: false,
    indicators: false,
    noWrap: false,
    onCycleTo() { }
});
// $ExpectType Carousel
materialize.Carousel.getInstance(elem);
// $ExpectType void
carousel.next(1);
// $ExpectType void
carousel.prev(1);
// $ExpectType void
carousel.set(2);
// $ExpectType void
carousel.destroy();
// $ExpectType CarouselOptions
carousel.options;
// $ExpectType Element
carousel.el;
// $ExpectType boolean
carousel.pressed;
// $ExpectType boolean
carousel.dragged;
// $ExpectType number
carousel.center;

//
// Collapsible
//
// $ExpectType Collapsible
new materialize.Collapsible(elem);
// $ExpectType Collapsible
const collapsible = new materialize.Collapsible(elem, {
    accordion: true,
    onOpenStart: () => {},
    onOpenEnd: () => {},
    onCloseStart: () => {},
    onCloseEnd: () => {},
    inDuration: 300,
    outDuration: 300
});
// $ExpectType Collapsible
materialize.Collapsible.getInstance(elem);
// $ExpectType void
collapsible.open(1);
// $ExpectType void
collapsible.close(1);
// $ExpectType void
collapsible.destroy();
// $ExpectType CollapsibleOptions
collapsible.options;
// $ExpectType Element
collapsible.el;

//
// Dropdown
//
// $ExpectType Dropdown
new materialize.Dropdown(elem);
// $ExpectType Dropdown
const dropdown = new materialize.Dropdown(elem, {
    alignment: 'left',
    autoTrigger: true,
    constrainWidth: true,
    container: elem,
    coverTrigger: true,
    closeOnClick: true,
    hover: false,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: () => {},
    onOpenEnd: () => {},
    onCloseStart: () => {},
    onCloseEnd: () => {}
});
// $ExpectType Dropdown
materialize.Dropdown.getInstance(elem);
// $ExpectType void
dropdown.open();
// $ExpectType void
dropdown.close();
// $ExpectType void
dropdown.recalculateDimensions();
// $ExpectType void
dropdown.destroy();
// $ExpectType DropdownOptions
dropdown.options;
// $ExpectType Element
dropdown.el;
// $ExpectType string
dropdown.id;
// $ExpectType Element
dropdown.dropdownEl;
// $ExpectType boolean
dropdown.isOpen;
// $ExpectType boolean
dropdown.isScrollable;
// $ExpectType number
dropdown.focusedIndex;

//
// TapTarget
//
// $ExpectType TapTarget
new materialize.TapTarget(elem);
// $ExpectType TapTarget
const tapTarget = new materialize.TapTarget(elem, {
    onOpen: () => {},
    onClose: () => {}
});
// $ExpectType TapTarget
materialize.TapTarget.getInstance(elem);
// $ExpectType void
tapTarget.open();
// $ExpectType void
tapTarget.close();
// $ExpectType void
tapTarget.destroy();
// $ExpectType TapTargetOptions
tapTarget.options;
// $ExpectType Element
tapTarget.el;
// $ExpectType boolean
tapTarget.isOpen;

//
// Materialbox
//
// $ExpectType Materialbox
new materialize.Materialbox(elem);
// $ExpectType Materialbox
const materialbox = new materialize.Materialbox(elem, {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: () => {},
    onOpenEnd: () => {},
    onCloseStart: () => {},
    onCloseEnd: () => {}
});
// $ExpectType Materialbox
materialize.Materialbox.getInstance(elem);
// $ExpectType void
materialbox.open();
// $ExpectType void
materialbox.close();
// $ExpectType void
materialbox.destroy();
// $ExpectType MaterialboxOptions
materialbox.options;
// $ExpectType Element
materialbox.el;
// $ExpectType boolean
materialbox.overlayActive;
// $ExpectType boolean
materialbox.doneAnimating;
// $ExpectType string
materialbox.caption;
// $ExpectType number
materialbox.originalWidth;
// $ExpectType number
materialbox.originalHeight;

//
// Slider
//
// $ExpectType Slider
new materialize.Slider(elem);
// $ExpectType Slider
const slider = new materialize.Slider(elem, {
    indicators: true,
    height: 400,
    duration: 500,
    interval: 6000
});
// $ExpectType Slider
materialize.Slider.getInstance(elem);
// $ExpectType void
slider.pause();
// $ExpectType void
slider.start();
// $ExpectType void
slider.next();
// $ExpectType void
slider.prev();
// $ExpectType void
slider.destroy();
// $ExpectType SliderOptions
slider.options;
// $ExpectType Element
slider.el;
// $ExpectType number
slider.activeIndex;

//
// Modal
//
// $ExpectType Modal
new materialize.Modal(elem);
// $ExpectType Modal
const modal = new materialize.Modal(elem, {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: () => {},
    onOpenEnd: () => {},
    onCloseStart: () => {},
    onCloseEnd: () => {},
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
});
// $ExpectType Modal
materialize.Modal.getInstance(elem);
// $ExpectType void
modal.open();
// $ExpectType void
modal.close();
// $ExpectType void
modal.destroy();
// $ExpectType ModalOptions
modal.options;
// $ExpectType Element
modal.el;
// $ExpectType boolean
modal.isOpen;
// $ExpectType string
modal.id;

//
// Parallax
//
// $ExpectType Parallax
new materialize.Parallax(elem);
// $ExpectType Parallax
const parallax = new materialize.Parallax(elem, {
    responsiveThreshold: 0
});
// $ExpectType Parallax
materialize.Parallax.getInstance(elem);
// $ExpectType void
parallax.destroy();
// $ExpectType ParallaxOptions
parallax.options;
// $ExpectType Element
parallax.el;

//
// Pushpin
//
// $ExpectType Pushpin
new materialize.Pushpin(elem);
// $ExpectType Pushpin
const pushpin = new materialize.Pushpin(elem, {
    top: 0,
    bottom: Infinity,
    offset: 0,
    onPositionChange: (position) => {
        // $ExpectType "pinned" | "pin-top" | "pin-bottom"
        position;
    }
});
// $ExpectType Pushpin
materialize.Pushpin.getInstance(elem);
// $ExpectType void
pushpin.destroy();
// $ExpectType PushpinOptions
pushpin.options;
// $ExpectType Element
pushpin.el;
// $ExpectType number
pushpin.originalOffset;

//
// ScrollSpy
//
// $ExpectType ScrollSpy
new materialize.ScrollSpy(elem);
// $ExpectType ScrollSpy
const scrollSpy = new materialize.ScrollSpy(elem, {
    throttle: 100,
    scrollOffset: 200,
    activeClass: 'active',
    getActiveElement: (id) => {
        // $ExpectType string
        id;
        return '';
    }
});
// $ExpectType ScrollSpy
materialize.ScrollSpy.getInstance(elem);
// $ExpectType void
scrollSpy.destroy();
// $ExpectType ScrollSpyOptions
scrollSpy.options;
// $ExpectType Element
scrollSpy.el;

//
// Sidenav
//
// $ExpectType Sidenav
new materialize.Sidenav(elem);
// $ExpectType Sidenav
const sidenav = new materialize.Sidenav(elem, {
    edge: "left",
    draggable: true,
    inDuration: 300,
    outDuration: 200,
    onOpenStart(el) {
        // $ExpectType Element
        el;
    },
    onCloseStart(el) {
        // $ExpectType Element
        el;
    },
    onOpenEnd(el) {
        // $ExpectType Element
        el;
    },
    onCloseEnd(el) {
        // $ExpectType Element
        el;
    },
    preventScrolling: true
});
// $ExpectType Sidenav
materialize.Sidenav.getInstance(elem);
// $ExpectType void
sidenav.open();
// $ExpectType void
sidenav.close();
// $ExpectType void
sidenav.destroy();
// $ExpectType SidenavOptions
sidenav.options;
// $ExpectType Element
sidenav.el;
// $ExpectType boolean
sidenav.isOpen;
// $ExpectType boolean
sidenav.isFixed;
// $ExpectType boolean
sidenav.isDragged;

//
// Tabs
//
// $ExpectType Tabs
new materialize.Tabs(elem);
// $ExpectType Tabs
const tabs = new materialize.Tabs(elem, {
    duration: 200,
    onShow(content) {
        // $ExpectType Element
        content;
    },
    swipeable: false,
    responsiveThreshold: Infinity
});
// $ExpectType Tabs
materialize.Tabs.getInstance(elem);
// $ExpectType void
tabs.select("id");
// $ExpectType void
tabs.updateTabIndicator();
// $ExpectType void
tabs.destroy();
// $ExpectType TabsOptions
tabs.options;
// $ExpectType Element
tabs.el;
// $ExpectType number
tabs.index;

//
// Toast
//
// $ExpectType Toast
const toast = materialize.toast({
    html: 'I am a toast!',
    displayLength: 4000,
    inDuration: 300,
    outDuration: 375,
    classes: '',
    completeCallback: () => {},
    activationPercent: 0.8
});
// $ExpectType ToastOptions
toast.options;
// $ExpectType boolean
toast.panning;
// $ExpectType number
toast.timeRemaining;
// $ExpectType void
toast.dismiss();
// $ExpectType void
materialize.Toast.dismissAll();

//
// Tooltip
//
// $ExpectType Tooltip
new materialize.Tooltip(elem);
// $ExpectType Tooltip
const tooltip = new materialize.Tooltip(elem, {
    exitDelay: 0,
    enterDelay: 200,
    html: '',
    margin: 5,
    inDuration: 300,
    outDuration: 250,
    position: 'right',
    transitionMovement: 10
});
// $ExpectType Tooltip
materialize.Tooltip.getInstance(elem);
// $ExpectType void
tooltip.open();
// $ExpectType void
tooltip.close();
// $ExpectType void
tooltip.destroy();
// $ExpectType TooltipOptions
tooltip.options;
// $ExpectType Element
tooltip.el;
// $ExpectType boolean
tooltip.isOpen;
// $ExpectType boolean
tooltip.isHovered;

//
// FloatingActionButton
//
// $ExpectType FloatingActionButton
new materialize.FloatingActionButton(elem);
// $ExpectType FloatingActionButton
const fab = new materialize.FloatingActionButton(elem, {
    direction: 'left',
    hoverEnabled: true,
    toolbarEnabled: false
});
// $ExpectType FloatingActionButton
materialize.FloatingActionButton.getInstance(elem);
// $ExpectType void
fab.open();
// $ExpectType void
fab.close();
// $ExpectType void
fab.destroy();
// $ExpectType FloatingActionButtonOptions
fab.options;
// $ExpectType Element
fab.el;
// $ExpectType boolean
fab.isOpen;

//
// Autocomplete
//
// $ExpectType Autocomplete
new materialize.Autocomplete(elem);
// $ExpectType Autocomplete
const autocomplete = new materialize.Autocomplete(elem, {
    data: {
        Apple: null,
        Google: "https://placehold.it/250x250"
    },
    limit: Infinity,
    onAutocomplete(text) {
        // $ExpectType string
        text;
    },
    minLength: 3,
    sortFunction(a, b, input) {
        // $ExpectType string
        a;
        // $ExpectType string
        b;
        // $ExpectType string
        input;
        return 0;
    }
});
// $ExpectType Autocomplete
materialize.Autocomplete.getInstance(elem);
// $ExpectType void
autocomplete.updateData({ Microsoft: null });
// $ExpectType void
autocomplete.destroy();
// $ExpectType void
autocomplete.selectOption(elem);
// $ExpectType AutocompleteOptions
autocomplete.options;
// $ExpectType Element
autocomplete.el;
// $ExpectType boolean
autocomplete.isOpen;
// $ExpectType number
autocomplete.count;
// $ExpectType number
autocomplete.activeIndex;
// $ExpectType Dropdown
autocomplete.dropdown;

//
// Chips
//
// $ExpectType Chips
new materialize.Chips(elem);
// $ExpectType Chips
const chips = new materialize.Chips(elem, {
    data: [{
        tag: '',
        image: ''
    }],
    placeholder: '',
    secondaryPlaceholder: '',
    autocompleteOptions: {
        data: {
            Apple: null,
            Google: "https://placehold.it/250x250"
        },
        limit: Infinity,
        onAutocomplete(text) {
            // $ExpectType string
            text;
        },
        minLength: 3,
        sortFunction(a, b, input) {
            // $ExpectType string
            a;
            // $ExpectType string
            b;
            // $ExpectType string
            input;
            return 0;
        }
    },
    limit: Infinity,
    onChipAdd: () => {},
    onChipSelect: () => {},
    onChipDelete: () => {}
});
// $ExpectType Chips
materialize.Chips.getInstance(elem);
// $ExpectType void
chips.addChip({
    tag: '',
    image: ''
});
// $ExpectType void
chips.selectChip(1);
// $ExpectType void
chips.deleteChip(1);
// $ExpectType void
chips.destroy();
// $ExpectType ChipsOptions
chips.options;
// $ExpectType Element
chips.el;
// $ExpectType Chip[]
chips.chipsData;
// $ExpectType boolean
chips.hasAutocomplete;
// $ExpectType Autocomplete
chips.autocomplete;

//
// DatePicker
//
// $ExpectType DatePicker
new materialize.DatePicker(elem);
// $ExpectType DatePicker
const datePicker = new materialize.DatePicker(elem, {
    autoClose: false,
    format: 'mmm dd, yyyy',
    parse: (value, format) => {
        // $ExpectType string
        value;
        // $ExpectType string
        format;
        return new Date();
    },
    defaultDate: new Date(),
    setDefaultDate: false,
    disableWeekends: false,
    disableDayFn(day) {
        // $ExpectType Date
        day;
        return true;
    },
    firstDay: 0,
    minDate: new Date(),
    maxDate: new Date(),
    yearRange: 10,
    isRTL: false,
    showMonthAfterYear: false,
    showDaysInNextAndPreviousMonths: false,
    container: elem,
    showClearBtn: false,
    i18n: {
        cancel: '',
        clear: '',
        done: '',
        previousMonth: '',
        nextMonth: '',
        months: [''],
        monthsShort: [''],
        weekdays: [''],
        weekdaysShort: [''],
        weekdaysAbbrev: ['']
    },
    events: [''],
    onSelect(selectedDate) {
        // $ExpectType Date
        selectedDate;
    },
    onOpen: () => {},
    onClose: () => {},
    onDraw: () => {}
});
// $ExpectType DatePicker
materialize.DatePicker.getInstance(elem);
// $ExpectType void
datePicker.open();
// $ExpectType void
datePicker.close();
// $ExpectType string
datePicker.toString();
// $ExpectType void
datePicker.setDate(new Date());
// $ExpectType void
datePicker.gotoDate(new Date());
// $ExpectType void
datePicker.destroy();
// $ExpectType DatePickerOptions
datePicker.options;
// $ExpectType Element
datePicker.el;
// $ExpectType boolean
datePicker.isOpen;
// $ExpectType Date
datePicker.date;

//
// TimePicker
//
// $ExpectType TimePicker
new materialize.TimePicker(elem);
// $ExpectType TimePicker
const timePicker = new materialize.TimePicker(elem, {
    duration: 350,
    container: '',
    showClearBtn: false,
    defaultTime: 'now',
    fromnow: 0,
    i18n: {
        cancel: '',
        clear: '',
        done: ''
    },
    autoClose: false,
    twelveHour: true,
    vibrate: true,
    onOpenStart: () => {},
    onOpenEnd: () => {},
    onCloseStart: () => {},
    onCloseEnd: () => {},
    onSelect: () => {},
});
// $ExpectType TimePicker
materialize.TimePicker.getInstance(elem);
// $ExpectType void
timePicker.open();
// $ExpectType void
timePicker.close();
// $ExpectType void
timePicker.showView("hours");
// $ExpectType void
timePicker.destroy();
// $ExpectType TimePickerOptions
timePicker.options;
// $ExpectType Element
timePicker.el;
// $ExpectType boolean
timePicker.isOpen;
// $ExpectType string
timePicker.time;

//
// FormSelect
//
// $ExpectType FormSelect
new materialize.FormSelect(elem);
// $ExpectType FormSelect
const formSelect = new materialize.FormSelect(elem, {
    classes: '',
    dropdownOptions: {
        alignment: 'left',
        autoTrigger: true,
        constrainWidth: true,
        container: elem,
        coverTrigger: true,
        closeOnClick: true,
        hover: false,
        inDuration: 150,
        outDuration: 250,
        onOpenStart: () => {},
        onOpenEnd: () => {},
        onCloseStart: () => {},
        onCloseEnd: () => {}
    }
});
// $ExpectType FormSelect
materialize.FormSelect.getInstance(elem);
// $ExpectType string[]
formSelect.getSelectedValues();
// $ExpectType void
formSelect.destroy();
// $ExpectType FormSelectOptions
formSelect.options;
// $ExpectType Element
formSelect.el;
// $ExpectType boolean
formSelect.isMultiple;
// $ExpectType Element
formSelect.wrapper;
// $ExpectType Element
formSelect.dropdownOptions; // yes, this is an Element in 1.0.0-beta
// $ExpectType Dropdown
formSelect.dropdown;
// $ExpectType Element
formSelect.input;

//
// CharacterCounter
//
// $ExpectType CharacterCounter
const characterCounter = new materialize.CharacterCounter(elem);
// $ExpectType CharacterCounter
materialize.CharacterCounter.getInstance(elem);
// $ExpectType void
characterCounter.destroy();
// $ExpectType Element
characterCounter.el;
