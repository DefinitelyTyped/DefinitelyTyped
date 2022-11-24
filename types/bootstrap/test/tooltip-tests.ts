import { Tooltip } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Tooltip
new Tooltip(element, {
    delay: 0.5,
    title: () => 'foo',
    customClass: () => 'custom-class',
    placement: () => 'auto',
});

// $ExpectType Tooltip | null
Tooltip.getInstance(element);
// $ExpectType Tooltip
Tooltip.getOrCreateInstance(element);

// $ExpectType string
Tooltip.VERSION;

Tooltip.Default.animation;
Tooltip.Default.container;
Tooltip.Default.delay;
Tooltip.Default.html;
Tooltip.Default.placement;
Tooltip.Default.selector;
Tooltip.Default.template;
Tooltip.Default.title;
Tooltip.Default.fallbackPlacements;
Tooltip.Default.boundary;
Tooltip.Default.customClass;
Tooltip.Default.sanitize;
Tooltip.Default.sanitizeFn;
Tooltip.Default.allowList;
Tooltip.Default.offset;
Tooltip.Default.popperConfig;

Tooltip.Default.allowList['*'];
Tooltip.Default.allowList['*'].push(/^data-my-app-[\w-]+/);
Tooltip.Default.allowList['td'];

Tooltip.DefaultType.animation; // $ExpectType string
Tooltip.DefaultType.container; // $ExpectType string
Tooltip.DefaultType.delay; // $ExpectType string
Tooltip.DefaultType.html; // $ExpectType string
Tooltip.DefaultType.placement; // $ExpectType string
Tooltip.DefaultType.selector; // $ExpectType string
Tooltip.DefaultType.template; // $ExpectType string
Tooltip.DefaultType.title; // $ExpectType string
Tooltip.DefaultType.fallbackPlacements; // $ExpectType string
Tooltip.DefaultType.boundary; // $ExpectType string
Tooltip.DefaultType.customClass; // $ExpectType string
Tooltip.DefaultType.sanitize; // $ExpectType string
Tooltip.DefaultType.sanitizeFn; // $ExpectType string
Tooltip.DefaultType.allowList; // $ExpectType string
Tooltip.DefaultType.offset; // $ExpectType string
Tooltip.DefaultType.popperConfig; // $ExpectType string

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

// $ExpectType JQuery<HTMLElement>
$('.alert').tooltip();

// $ExpectType JQuery<HTMLElement>
$('.alert').tooltip({ delay: 0.5, title: () => 'foo', customClass: () => 'custom-class' });

$('.alert').tooltip('hide'); // $ExpectType JQuery<HTMLElement>
$('.alert').tooltip('show'); // $ExpectType JQuery<HTMLElement>
$('.alert').tooltip('toggle'); // $ExpectType JQuery<HTMLElement>
$('.alert').tooltip('enable'); // $ExpectType JQuery<HTMLElement>
$('.alert').tooltip('disable'); // $ExpectType JQuery<HTMLElement>
$('.alert').tooltip('toggleEnabled'); // $ExpectType JQuery<HTMLElement>
$('.alert').tooltip('update'); // $ExpectType JQuery<HTMLElement>
$('.alert').tooltip('setContent'); // $ExpectType JQuery<HTMLElement>
