import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap';

const element = new Element();

/**
 * Alert
 */

// $ExpectType Alert
let instanceAlert = new Alert(element);

// $ExpectType Alert
instanceAlert = Alert.getInstance(element);

element.addEventListener(Alert.Events.close, event => {
    // do something…
});

element.addEventListener(Alert.Events.closed, event => {
    // do something…
});

/**
 * Button
 */

// $ExpectType Button
const button = new Button(element);

/**
 * Carousel
 */

// $ExpectType Carousel
const carousel = new Carousel(element, { interval: 1000 });

// $ExpectType Carousel
const instanceCarousel = Carousel.getInstance(element);

element.addEventListener(Carousel.Events.slid, event => {
    // do something…
});

element.addEventListener(Carousel.Events.slide, event => {
    // do something…
});

/**
 * Collapse
 */

// $ExpectType Collapse
const collapse = new Collapse(element, { parent: '.parent' });

// $ExpectType Collapse
const instanceCollapse = Collapse.getInstance(element);

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

/**
 * Dropdown
 */

// $ExpectType Dropdown
const dropdown = new Dropdown(element, { offset: 10 });

// $ExpectType Dropdown
const instanceDropdown = Dropdown.getInstance(element);

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

/**
 * Modal
 */

// $ExpectType Modal
const modal = new Modal(element, { backdrop: 'static' });

// $ExpectType Modal
const instanceModal = Modal.getInstance(element);

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

/**
 * Popover
 */

// $ExpectType Popover
const popover = new Popover(element, { animation: true });

// $ExpectType Popover
const instancePopover = Popover.getInstance(element);

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

/**
 * ScrollSpy
 */

// $ExpectType ScrollSpy
const scrollSpy = new ScrollSpy(element, { offset: 10 });

// $ExpectType ScrollSpy
const instanceScrollSpy = ScrollSpy.getInstance(element);

element.addEventListener(ScrollSpy.Events.activate, event => {
    // do something…
});

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

/**
 * Toast
 */

// $ExpectType Toast
const toast = new Toast(element);

// $ExpectType Toast
const instanceToast = Toast.getInstance(element);

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

/**
 * Tooltip
 */

// $ExpectType Tooltip
const tooltip = new Tooltip(element);

// $ExpectType Tooltip
const instanceTooltip = Tooltip.getInstance(element);

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
