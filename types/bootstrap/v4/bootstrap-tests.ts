declare let aHtmlElement: HTMLElement;

// --------------------------------------------------------------------------------------
// Alert
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#alert").alert();

// $ExpectType JQuery<HTMLElement>
$("#alert").alert("close");

$("#alert").on("close.bs.alert", () => {});

// --------------------------------------------------------------------------------------
// Button
// --------------------------------------------------------------------------------------

// @ts-expect-error
$("#button").button();

// $ExpectType JQuery<HTMLElement>
$("#button").button("toggle");

// --------------------------------------------------------------------------------------
// Carousel
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#carousel").carousel();

// $ExpectType JQuery<HTMLElement>
$("#carousel").carousel("pause");

$("#carousel").carousel(100);

$("#carousel").on("slide.bs.carousel", function(e) {
    const that: HTMLElement = this;

    const data: undefined = e.data;
    const carousel: HTMLElement = e.target;

    const direction: string = e.direction;
    const relatedTarget: HTMLElement = e.relatedTarget;
    const from: number = e.from;
    const to: number = e.to;
});

$("#carousel").carousel({
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: "hover",
    ride: 'carousel',
    wrap: true,
    touch: false,
});

$("#carousel").carousel({
    slide: "prev",
});

$("#carousel").carousel({
    pause: false,
});

$("#carousel").carousel({
    interval: false,
});

// --------------------------------------------------------------------------------------
// Collapse
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#collapse").collapse();

// $ExpectType JQuery<HTMLElement>
$("#collapse").collapse("toggle");

$("#collapse").on("show.bs.collapse", () => {});

$("#collapse").collapse({
    parent: "#parent",
    toggle: true,
});

$("#collapse").collapse({
    parent: aHtmlElement,
});

$("#collapse").collapse({
    parent: $("#parent"),
});

$("#collapse").collapse({
    toggle: false,
});

// --------------------------------------------------------------------------------------
// Dropdown
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#dropdown").dropdown();

// $ExpectType JQuery<HTMLElement>
$("#dropdown").dropdown("update");

$("#dropdown").on("hide.bs.dropdown", (e) => {
    const data: undefined = e.data;
    const container: HTMLElement = e.target;
    const togglingAnchorElement: HTMLElement = e.relatedTarget;
});

$("#dropdown").dropdown({
    offset: 10,
    flip: false,
    boundary: "window",
    reference: "toggle",
    display: "dynamic",
});

$("#dropdown").dropdown({
    offset: "10px",
});

$("#dropdown").dropdown({
    offset(offsets: Bootstrap.OffsetsExtend) {
        if (!this.flip)
            return { popper: { left: 100 } };
        return {};
    },
});

$("#dropdown").dropdown({
    boundary: aHtmlElement,
});

$("#dropdown").dropdown({
    reference: aHtmlElement,
});

// --------------------------------------------------------------------------------------
// Modal
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#modal").modal();

// $ExpectType JQuery<HTMLElement>
$("#modal").modal("show");

$("#modal").on("show.bs.modal", (e) => {
    const data: undefined = e.data;
    const modal: HTMLElement = e.target;
    if (e.relatedTarget) {
        const clickedElement: HTMLElement = e.relatedTarget;
    }
});

$("#modal").modal({
    backdrop: false,
    focus: false,
    keyboard: false,
    show: false,
});

$("#modal").modal({
    backdrop: "static",
});

$("#modal").on('hidePrevented.bs.modal', e => {
    const {data, target: modal} = e;
});

// --------------------------------------------------------------------------------------
// Popover
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#popover").popover();

// $ExpectType JQuery<HTMLElement>
$("#popover").popover("toggle");

$("#popover").on("show.bs.popover", () => {});

$("#popover").popover({});

$("#popover").popover({
    animation: false,
    container: "#container",
    delay: {show: 500, hide: 100},
    html: true,
    placement: "auto",
    selector: "[rel=\"popover\"]",
    template: '<div class="popover empty" role="popover"></div>',
    title: "Hello world",
    trigger: "hover focus",
    offset: 10,
    fallbackPlacement: ["flip", "clockwise"],
    boundary: "scrollParent",
    sanitize: false,
    whiteList: {
        h1: [],
        img: ['src', 'alt', 'title', 'width', 'height'],
    },
    sanitizeFn: (x: string) => x.replace("<", ""),
});

$("#popover").popover({
    placement(this, popover, trigger) {
        console.log(this.tip === popover);
        console.log(this.element === trigger);
        console.log(this.config.content);
        return "left";
    },
});

$("#popover").popover({
    sanitizeFn: null,
});

$("#popover").popover({
    content: document.createElement('p'),
});

$("#popover").popover({
    content: () => document.createElement('p'),
});

$("#popover").popover({
    content: $('<p>Content</p>'),
});

$("#popover").popover({
    content: () => $('<p>Content</p>'),
});

// --------------------------------------------------------------------------------------
// Scrollspy
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#scrollspy").scrollspy();

// $ExpectType JQuery<HTMLElement>
$("#scrollspy").scrollspy("refresh");

$("#scrollspy").on("activate.bs.scrollspy", () => {});

$("#scrollspy").scrollspy({
    offset: 100,
    target: "#navbar-example2",
    method: "offset",
});

$("#scrollspy").scrollspy({
    target: document.getElementById("navbar-example2") as HTMLElement
});

$("#scrollspy").scrollspy({
    target: $("#navbar-example2"),
});

$("#scrollspy").scrollspy({
    method: "position"
});

// --------------------------------------------------------------------------------------
// Tab
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#someListItem").tab("show");

$("a[data-toggle=\"list\"]").on("shown.bs.tab", (e) => {
    const data: undefined = e.data;
    const newlyActivatedTab: HTMLElement = e.target;
    const previousActiveTab: HTMLElement = e.relatedTarget;
});

// --------------------------------------------------------------------------------------
// Toast
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#toast").toast();

// $ExpectType JQuery<HTMLElement>
$("#toast").toast("show");

$("#toast").on("shown.bs.toast", () => {});

$("#toast").toast({
    animation: false,
    autohide: false,
    delay: 100,
});

$("#toast").toast({});

// --------------------------------------------------------------------------------------
// Tooltip
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$("#tooltip").tooltip();

// $ExpectType JQuery<HTMLElement>
$("#tooltip").tooltip("show");

$("#tooltip").on("hide.bs.tooltip", () => {});

$("#tooltip").tooltip({
    animation: false,
    container: "#container",
    customClass: 'custom-class',
    delay: {show: 500, hide: 100},
    html: true,
    placement: "auto",
    selector: "[rel=\"tooltip\"]",
    template: '<div class="tooltip empty" role="tooltip"></div>',
    title: "Hello world",
    trigger: "hover focus",
    offset: 10,
    fallbackPlacement: ["flip", "clockwise"],
    boundary: "scrollParent",
    sanitize: false,
    whiteList: {
        h1: [],
        img: ['src', 'alt', 'title', 'width', 'height'],
    },
    sanitizeFn: (x: string) => x.replace("<", ""),
    popperConfig: {
        placement: 'bottom',
    },
});

$("#tooltip").tooltip({
    container: document.getElementById("#container") as HTMLElement,
    customClass: () => 'a b',
});

$("#tooltip").tooltip({
    container: false,
});

$("#tooltip").tooltip({
    delay: 250,
});

$("#tooltip").tooltip({
    placement(this, tooltip, trigger) {
        console.log(this.tip === tooltip);
        console.log(this.element === trigger);
        console.log(this.config.html);
        return "left";
    },
});

$("#tooltip").tooltip({
    placement(this, tooltip, trigger) {
        // @ts-expect-error
        console.log(this.config.content); // only for PopoverOption, not TooltipOption
        return "left";
    },
});

$("#tooltip").tooltip({
    selector: false,
});

$("#tooltip").tooltip({
    title: document.getElementById("title-element") as HTMLElement,
});

$("#tooltip").tooltip({
    title(this: Element) {
        return this.textContent as string;
    },
});

$("#tooltip").tooltip({
    offset: "10px",
});

$("#tooltip").tooltip({
    fallbackPlacement: "clockwise",
});

$("#tooltip").tooltip({
    boundary: aHtmlElement,
});

$("#tooltip").tooltip({
    sanitizeFn: null,
});

$("#tooltip").tooltip({
    title: document.createElement('p'),
});

$("#tooltip").tooltip({
    title: () => document.createElement('p'),
});

$("#tooltip").tooltip({
    title: $('<p>Title</p>'),
});

$("#tooltip").tooltip({
    title: () => $('<p>Title</p>'),
});
