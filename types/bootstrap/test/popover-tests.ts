import { Popover } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Popover
new Popover(element, { delay: 0.5, animation: true });

// $ExpectType Popover | null
Popover.getInstance(element);
// $ExpectType Popover
Popover.getOrCreateInstance(element);

// $ExpectType string
Popover.VERSION;

Popover.Default.animation;
Popover.Default.container;
Popover.Default.content;
Popover.Default.delay;
Popover.Default.html;
Popover.Default.placement;
Popover.Default.selector;
Popover.Default.template;
Popover.Default.title;
Popover.Default.fallbackPlacement;
Popover.Default.boundary;
Popover.Default.customClass;
Popover.Default.sanitize;
Popover.Default.sanitizeFn;
Popover.Default.allowList;
Popover.Default.offset;
Popover.Default.popperConfig;

Popover.DefaultType.animation; // $ExpectType string
Popover.DefaultType.container; // $ExpectType string
Popover.DefaultType.content; // $ExpectType string
Popover.DefaultType.delay; // $ExpectType string
Popover.DefaultType.html; // $ExpectType string
Popover.DefaultType.placement; // $ExpectType string
Popover.DefaultType.selector; // $ExpectType string
Popover.DefaultType.template; // $ExpectType string
Popover.DefaultType.title; // $ExpectType string
Popover.DefaultType.fallbackPlacement; // $ExpectType string
Popover.DefaultType.boundary; // $ExpectType string
Popover.DefaultType.customClass; // $ExpectType string
Popover.DefaultType.sanitize; // $ExpectType string
Popover.DefaultType.sanitizeFn; // $ExpectType string
Popover.DefaultType.allowList; // $ExpectType string
Popover.DefaultType.offset; // $ExpectType string
Popover.DefaultType.popperConfig; // $ExpectType string

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
