import { Tooltip } from "bootstrap";
import * as $ from "jquery";

const element = new Element();

// $ExpectType Tooltip
new Tooltip(element, { delay: 0.5, title: () => "foo", customClass: () => "custom-class" });

// $ExpectType Tooltip
Tooltip.getInstance(element);

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
Tooltip.Default.fallbackPlacement;
Tooltip.Default.boundary;
Tooltip.Default.customClass;
Tooltip.Default.sanitize;
Tooltip.Default.sanitizeFn;
Tooltip.Default.allowList;
Tooltip.Default.offset;
Tooltip.Default.popperConfig;

Tooltip.DefaultType.animation; // $ExpectType string
Tooltip.DefaultType.container; // $ExpectType string
Tooltip.DefaultType.delay; // $ExpectType string
Tooltip.DefaultType.html; // $ExpectType string
Tooltip.DefaultType.placement; // $ExpectType string
Tooltip.DefaultType.selector; // $ExpectType string
Tooltip.DefaultType.template; // $ExpectType string
Tooltip.DefaultType.title; // $ExpectType string
Tooltip.DefaultType.fallbackPlacement; // $ExpectType string
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

// $ExpectType void
$(".alert").tooltip();

// $ExpectType void
$(".alert").tooltip({ delay: 0.5, title: () => "foo", customClass: () => "custom-class" });

$(".alert").tooltip("hide"); // $ExpectType void
$(".alert").tooltip("show"); // $ExpectType void
$(".alert").tooltip("toggle"); // $ExpectType void
$(".alert").tooltip("enable"); // $ExpectType void
$(".alert").tooltip("disable"); // $ExpectType void
$(".alert").tooltip("toggleEnabled"); // $ExpectType void
$(".alert").tooltip("update"); // $ExpectType void
