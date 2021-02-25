import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

/**
 * Alert
 */

// $ExpectType Alert
let instanceAlert = new Alert(element);

// $ExpectType Alert
instanceAlert = Alert.getInstance(element);

// $ExpectType string
Alert.VERSION;

element.addEventListener(Alert.Events.close, event => {
    // do something…
});

element.addEventListener(Alert.Events.closed, event => {
    // do something…
});

// $ExpectType void
$('.alert').alert();

// $ExpectType void
$('.alert').alert('close');

/**
 * Button
 */

// $ExpectType Button
const button = new Button(element);

// $ExpectType void
$('.alert').button();

// $ExpectType void
$('.alert').button('toggle');

/**
 * Carousel
 */

// $ExpectType Carousel
const carousel = new Carousel(element, { interval: 1000 });

// $ExpectType Carousel
const instanceCarousel = Carousel.getInstance(element);

// $ExpectType string
Carousel.VERSION;

// $ExpectType Record<string, any>
Carousel.Default;

element.addEventListener(Carousel.Events.slid, event => {
    // do something…
});

element.addEventListener(Carousel.Events.slide, event => {
    // do something…
});

// $ExpectType void
$('.alert').carousel();

// $ExpectType void
$('.alert').carousel({ interval: 1000 });

// $ExpectType void
$('.alert').carousel(0);

$('.alert').carousel('cycle'); // $ExpectType void
$('.alert').carousel('pause'); // $ExpectType void
$('.alert').carousel('prev'); // $ExpectType void
$('.alert').carousel('next'); // $ExpectType void
$('.alert').carousel('nextWhenVisible'); // $ExpectType void

/**
 * Collapse
 */

// $ExpectType Collapse
const collapse = new Collapse(element, { parent: '.parent' });

// $ExpectType Collapse
const instanceCollapse = Collapse.getInstance(element);

// $ExpectType string
Collapse.VERSION;

// $ExpectType Record<string, any>
Collapse.Default;

element.addEventListener(Collapse.Events.show, event => {
    // do something…
});

element.addEventListener(Collapse.Events.shown, event => {
    // do something…
});

element.addEventListener(Collapse.Events.hide, event => {
    // do something…
});

element.addEventListener(Collapse.Events.hidden, event => {
    // do something…
});

// $ExpectType void
$('.alert').collapse();

// $ExpectType void
$('.alert').collapse({ parent: '.parent' });

$('.alert').collapse('show'); // $ExpectType void
$('.alert').collapse('hide'); // $ExpectType void
$('.alert').collapse('toggle'); // $ExpectType void

/**
 * Dropdown
 */

// $ExpectType Dropdown
const dropdown = new Dropdown(element, { flip: true });

// $ExpectType Dropdown
const instanceDropdown = Dropdown.getInstance(element);

// $ExpectType string
Dropdown.VERSION;

// $ExpectType Record<string, any>
Dropdown.Default;

element.addEventListener(Dropdown.Events.show, event => {
    // do something…
});

element.addEventListener(Dropdown.Events.shown, event => {
    // do something…
});

element.addEventListener(Dropdown.Events.hide, event => {
    // do something…
});

element.addEventListener(Dropdown.Events.hidden, event => {
    // do something…
});

// $ExpectType void
$('.alert').dropdown();

// $ExpectType void
$('.alert').dropdown({ flip: true });

$('.alert').dropdown('show'); // $ExpectType void
$('.alert').dropdown('hide'); // $ExpectType void
$('.alert').dropdown('toggle'); // $ExpectType void
$('.alert').dropdown('update'); // $ExpectType void

/**
 * Modal
 */

// $ExpectType Modal
const modal = new Modal(element, { backdrop: 'static' });

// $ExpectType Modal
const instanceModal = Modal.getInstance(element);

// $ExpectType string
Modal.VERSION;

// $ExpectType Record<string, any>
Modal.Default;

element.addEventListener(Modal.Events.show, event => {
    // do something…
});

element.addEventListener(Modal.Events.shown, event => {
    // do something…
});

element.addEventListener(Modal.Events.hide, event => {
    // do something…
});

element.addEventListener(Modal.Events.hidden, event => {
    // do something…
});

element.addEventListener(Modal.Events.hidePrevented, event => {
    // do something…
});

// $ExpectType void
$('.alert').modal();

// $ExpectType void
$('.alert').modal({ backdrop: 'static' });

$('.alert').modal('show'); // $ExpectType void
$('.alert').modal('hide'); // $ExpectType void
$('.alert').modal('toggle'); // $ExpectType void
$('.alert').modal('handleUpdate'); // $ExpectType void

/**
 * Popover
 */

// $ExpectType Popover
const popover = new Popover(element, { delay: 0.5, animation: true });

// $ExpectType Popover
const instancePopover = Popover.getInstance(element);

// $ExpectType string
Popover.VERSION;

// $ExpectType Record<string, any>
Popover.Default;

element.addEventListener(Popover.Events.show, event => {
    // do something…
});

element.addEventListener(Popover.Events.shown, event => {
    // do something…
});

element.addEventListener(Popover.Events.hide, event => {
    // do something…
});

element.addEventListener(Popover.Events.hidden, event => {
    // do something…
});

element.addEventListener(Popover.Events.inserted, event => {
    // do something…
});

// $ExpectType void
$('.alert').popover();

// $ExpectType void
$('.alert').popover({ delay: 0.5, animation: true });

$('.alert').popover('show'); // $ExpectType void
$('.alert').popover('hide'); // $ExpectType void
$('.alert').popover('toggle'); // $ExpectType void
$('.alert').popover('enable'); // $ExpectType void
$('.alert').popover('disable'); // $ExpectType void
$('.alert').popover('toggleEnable'); // $ExpectType void
$('.alert').popover('update'); // $ExpectType void

/**
 * ScrollSpy
 */

// $ExpectType ScrollSpy
const scrollSpy = new ScrollSpy(element, { offset: 10 });

// $ExpectType ScrollSpy
const instanceScrollSpy = ScrollSpy.getInstance(element);

// $ExpectType string
ScrollSpy.VERSION;

// $ExpectType Record<string, any>
ScrollSpy.Default;

element.addEventListener(ScrollSpy.Events.activate, event => {
    // do something…
});

// $ExpectType void
$('.alert').scrollspy();

// $ExpectType void
$('.alert').scrollspy({ offset: 10 });

$('.alert').scrollspy('refresh'); // $ExpectType void

/**
 * Tab
 */

// $ExpectType Tab
const tab = new Tab(element);

// $ExpectType Tab
const instanceTab = Tab.getInstance(element);

element.addEventListener(Tab.Events.hidden, event => {
    // do something…
});

element.addEventListener(Tab.Events.hide, event => {
    // do something…
});

element.addEventListener(Tab.Events.show, event => {
    // do something…
});

element.addEventListener(Tab.Events.shown, event => {
    // do something…
});

// $ExpectType void
$('.alert').tab();

$('.alert').tab('show'); // $ExpectType void

/**
 * Toast
 */

// $ExpectType Toast
const toast = new Toast(element, { animation: false });

// $ExpectType Toast
const instanceToast = Toast.getInstance(element);

// $ExpectType string
Toast.VERSION;

// $ExpectType Record<string, any>
Toast.Default;

element.addEventListener(Toast.Events.hidden, event => {
    // do something…
});

element.addEventListener(Toast.Events.hide, event => {
    // do something…
});

element.addEventListener(Toast.Events.show, event => {
    // do something…
});

element.addEventListener(Toast.Events.shown, event => {
    // do something…
});

// $ExpectType void
$('.alert').toast();

// $ExpectType void
$('.alert').toast({ animation: false });

$('.alert').toast('hide'); // $ExpectType void
$('.alert').toast('show'); // $ExpectType void

/**
 * Tooltip
 */

// $ExpectType Tooltip
const tooltip = new Tooltip(element, { delay: 0.5, title: () => 'foo', customClass: () => 'custom-class' });

// $ExpectType Tooltip
const instanceTooltip = Tooltip.getInstance(element);

// $ExpectType string
Tooltip.VERSION;

// $ExpectType Record<string, any>
Tooltip.Default;

element.addEventListener(Tooltip.Events.hidden, event => {
    // do something…
});

element.addEventListener(Tooltip.Events.hide, event => {
    // do something…
});

element.addEventListener(Tooltip.Events.show, event => {
    // do something…
});

element.addEventListener(Tooltip.Events.shown, event => {
    // do something…
});

// $ExpectType void
$('.alert').tooltip();

// $ExpectType void
$('.alert').tooltip({ delay: 0.5, title: () => 'foo', customClass: () => 'custom-class' });

$('.alert').tooltip('hide'); // $ExpectType void
$('.alert').tooltip('show'); // $ExpectType void
$('.alert').tooltip('toggle'); // $ExpectType void
$('.alert').tooltip('enable'); // $ExpectType void
$('.alert').tooltip('disable'); // $ExpectType void
$('.alert').tooltip('toggleEnabled'); // $ExpectType void
$('.alert').tooltip('update'); // $ExpectType void

import DistAlert from 'bootstrap/js/dist/alert';
import DistButton from 'bootstrap/js/dist/button';
import DistCarousel from 'bootstrap/js/dist/carousel';
import DistCollapse from 'bootstrap/js/dist/collapse';
import DistDropdown from 'bootstrap/js/dist/dropdown';
import DistModal from 'bootstrap/js/dist/modal';
import DistPopover from 'bootstrap/js/dist/popover';
import DistScrollSpy from 'bootstrap/js/dist/scrollspy';
import DistTab from 'bootstrap/js/dist/tab';
import DistToast from 'bootstrap/js/dist/toast';
import DistTooltip from 'bootstrap/js/dist/tooltip';

// $ExpectType typeof Alert
DistAlert;
// $ExpectType typeof Button
DistButton;
// $ExpectType typeof Carousel
DistCarousel;
// $ExpectType typeof Collapse
DistCollapse;
// $ExpectType typeof Dropdown
DistDropdown;
// $ExpectType typeof Modal
DistModal;
// $ExpectType typeof Popover
DistPopover;
// $ExpectType typeof ScrollSpy
DistScrollSpy;
// $ExpectType typeof Tab
DistTab;
// $ExpectType typeof Toast
DistToast;
// $ExpectType typeof Tooltip
DistTooltip;
