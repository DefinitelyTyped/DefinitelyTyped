import Alert from 'bootstrap/js/dist/alert';
import BaseComponent from 'bootstrap/js/dist/base-component';
import Button from 'bootstrap/js/dist/button';
import Carousel from 'bootstrap/js/dist/carousel';
import Collapse from 'bootstrap/js/dist/collapse';
import Dropdown from 'bootstrap/js/dist/dropdown';
import Modal from 'bootstrap/js/dist/modal';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import Popover from 'bootstrap/js/dist/popover';
import ScrollSpy from 'bootstrap/js/dist/scrollspy';
import Tab from 'bootstrap/js/dist/tab';
import Toast from 'bootstrap/js/dist/toast';
import Tooltip from 'bootstrap/js/dist/tooltip';

declare const relatedTarget: HTMLElement;

// $ExpectType typeof Alert
Alert;
Alert.getInstance('#alert'); // $ExpectType Alert | null
// $ExpectType typeof BaseComponent
BaseComponent;
// $ExpectType string
BaseComponent.VERSION;
// $ExpectType typeof Button
Button;
Button.getInstance('#button'); // $ExpectType Button | null
// $ExpectType typeof Carousel
Carousel;
Carousel.getInstance('#carousel'); // $ExpectType Carousel | null
// $ExpectType typeof Collapse
Collapse;
Collapse.getInstance('#collapse'); // $ExpectType Collapse | null
// $ExpectType typeof Dropdown
Dropdown;
Dropdown.getInstance('#dropdown'); // $ExpectType Dropdown | null
// $ExpectType typeof Modal
Modal;
Modal.getInstance('#modal'); // $ExpectType Modal | null
Modal.getInstance('#modal')!.toggle(); // $ExpectType void
Modal.getInstance('#modal')!.toggle(relatedTarget); // $ExpectType void
Modal.getInstance('#modal')!.show(); // $ExpectType void
Modal.getInstance('#modal')!.show(relatedTarget); // $ExpectType void

// $ExpectType typeof Offcanvas
Offcanvas;
Offcanvas.getInstance('#offcanvas'); // $ExpectType Offcanvas | null
Offcanvas.getInstance('#offcanvas')?.toggle();
Offcanvas.getInstance('#offcanvas')?.toggle(relatedTarget);
Offcanvas.getInstance('#offcanvas')?.show();
Offcanvas.getInstance('#offcanvas')?.show(relatedTarget);

// $ExpectType typeof Popover
Popover;
Popover.getInstance('#popover'); // $ExpectType Popover | null
// $ExpectType typeof ScrollSpy
ScrollSpy;
ScrollSpy.getInstance('#scrollspy'); // $ExpectType ScrollSpy | null
// $ExpectType typeof Tab
Tab;
Tab.getInstance('#tab'); // $ExpectType Tab | null
// $ExpectType typeof Toast
Toast;
Toast.getInstance('#toast'); // $ExpectType Toast | null
// $ExpectType typeof Tooltip
Tooltip;
Tooltip.getInstance('#tooltip'); // $ExpectType Tooltip | null
