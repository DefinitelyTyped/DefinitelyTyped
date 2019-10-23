declare let aHtmlElement: HTMLElement;

// --------------------------------------------------------------------------------------
// jQuery backward compatibility
// --------------------------------------------------------------------------------------

$(".dropdown").on("affixed.bs.affix", (e) => {
    e.stopPropagation();
});

// --------------------------------------------------------------------------------------
// Modal
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".modal").modal();

// $ExpectType JQuery<HTMLElement>
$(".modal").modal("show");

$(".modal").modal("toggle");

$(".modal").modal("handleUpdate");

$(".modal").modal({
    backdrop: "static",
    keyboard: false,
    show: true,
    remote: "remote.html",
});

$(".modal").modal({
    backdrop: false,
});

// --------------------------------------------------------------------------------------
// Dropdown
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".dropdown").dropdown();

// $ExpectType JQuery<HTMLElement>
$(".dropdown").dropdown("toggle");

$(".dropdown").on("show.bs.dropdown", (e) => {
    aHtmlElement = e.relatedTarget;
});

// --------------------------------------------------------------------------------------
// Scrollspy
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".navbar").scrollspy();

// $ExpectType JQuery<HTMLElement>
$(".navbar").scrollspy("refresh");

$(".navbar").scrollspy({
    target: "#navbar-example",
    offset: 10,
});

$(".navbar").on("activate.bs.scrollspy", () => {
    // do something...
});

// --------------------------------------------------------------------------------------
// Togglable tabs
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".tab").tab();

// $ExpectType JQuery<HTMLElement>
$(".tab").tab("show");

$(".tab").on("shown.bs.tab", (e) => {
    aHtmlElement = e.target; // newly activated tab
    aHtmlElement = e.relatedTarget; // previous active tab
});

// --------------------------------------------------------------------------------------
// Tooltip
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".tooltip").tooltip();

// $ExpectType JQuery<HTMLElement>
$(".tooltip").tooltip("show");

$(".tooltip").tooltip({
    animation: true,
    container: false,
    delay: 0,
    html: false,
    placement: "top",
    selector: ".selector",
    template: '<div class="tooltip" role="tooltip"></div>',
    title: "",
    trigger: "hover focus",
    viewport: { selector: "body", padding: 0 },
    sanitize: false,
    whiteList: {
        h1: [],
        img: ['src', 'alt', 'title', 'width', 'height'],
    },
    sanitizeFn: (x: string) => x.replace("<", ""),
});

$(".tooltip").tooltip({
    container: "body",
});

$(".tooltip").tooltip({
    delay: { show: 500, hide: 100 },
});

$(".tooltip").tooltip({
    placement() { return "top"; },
});

$(".tooltip").tooltip({
    placement(tooltip: HTMLElement, trigger: Element) {
        console.log(this.options.delay);
        return "top";
    },
});

$(".tooltip").tooltip({
    placement(tooltip: HTMLElement, trigger: Element) {
        // $ExpectError
        console.log(this.options.content); // only for PopoverOption, not TooltipOption
        return "top";
    },
});

$(".tooltip").tooltip({
    title() { return this.id; },
});

$(".tooltip").tooltip({
    viewport: "body",
});

$("#tooltip").tooltip({
    sanitizeFn: null,
});

$(".tooltip").on("hidden.bs.tooltip", () => {
    // do something...
});

// --------------------------------------------------------------------------------------
// Popover
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".popover").popover();

// $ExpectType JQuery<HTMLElement>
$(".popover").popover("show");

$(".popover").popover({
    animation: true,
    container: false,
    content: "content",
    delay: 0,
    html: false,
    placement: "top",
    selector: ".selector",
    template: '<div class="tooltip" role="tooltip"></div>',
    title: "",
    trigger: "hover focus",
    viewport: { selector: "body", padding: 0 },
    sanitize: false,
    whiteList: {
        h1: [],
        img: ['src', 'alt', 'title', 'width', 'height'],
    },
    sanitizeFn: (x: string) => x.replace("<", ""),
});

$(".popover").popover({
    container: "body",
});

$(".popover").popover({
    content() { return `Elem id: ${this.id}`; },
});

$(".popover").popover({
    delay: { show: 500, hide: 100 },
});

$(".popover").popover({
    placement() { return "top"; },
});

$(".popover").popover({
    placement(tooltip: HTMLElement, trigger: Element) {
        console.log(this.options.content);
        return "top";
    },
});

$(".popover").popover({
    title() { return `Elem id: ${this.id}`; },
});

$(".popover").popover({
    viewport: "body",
});

$(".popover").popover({
    sanitizeFn: null,
});

$(".popover").on("hidden.bs.popover", () => {
    // do something...
});

// --------------------------------------------------------------------------------------
// Alert
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".alert").alert();

// $ExpectType JQuery<HTMLElement>
$(".alert").alert("close");

$(".alert").on("closed.bs.alert", () => {
    // do something...
});

// --------------------------------------------------------------------------------------
// Button
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".btn").button("toggle");

$(".btn").button("reset");

$(".btn").button("Swaps text to any data defined text state.");

// --------------------------------------------------------------------------------------
// Collapse
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".collapse").collapse();

// $ExpectType JQuery<HTMLElement>
$(".collapse").collapse("toggle");

$(".collapse").collapse({
    parent: "#selector",
    toggle: false,
});

$(".collapse").on("hidden.bs.collapse", () => {
    // do something...
});

// --------------------------------------------------------------------------------------
// Carousel
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".carousel").carousel();

// $ExpectType JQuery<HTMLElement>
$(".carousel").carousel("cycle");

$(".carousel").carousel(200);

$(".carousel").carousel({
    interval: 2000,
    pause: "hover",
    wrap: true,
    keyboard: false,
});

$(".carousel").carousel({
    interval: false,
});

$(".carousel").carousel({
    pause: null,
});

$("#myCarousel").on("slide.bs.carousel", (e) => {
    const dir: "left" | "right" = e.direction;
    aHtmlElement = e.relatedTarget;
});

// --------------------------------------------------------------------------------------
// Affix
// --------------------------------------------------------------------------------------

// $ExpectType JQuery<HTMLElement>
$(".affix").affix();

// $ExpectType JQuery<HTMLElement>
$(".affix").affix("checkPosition");

$(".affix").affix({
    offset: 10,
    target: window,
});

$(".affix").affix({
    offset: { top: 10, bottom: 5 },
});

$(".affix").affix({
    offset: { top: 10 },
});

$(".affix").affix({
    offset: { bottom: () => 10 },
});

$(".affix").affix({
    offset: {
        top: 100,
        bottom() {
            const that = this as Bootstrap.Offset;
            return (that.bottom = $(".footer").outerHeight(true)!);
        },
    }
});

$(".affix").affix({
    target: ".selector",
});

$(".affix").affix({
    target: document.getElementById("id")!,
});

$(".affix").affix({
    target: $("#id"),
});

// --------------------------------------------------------------------------------------
// Transition
// --------------------------------------------------------------------------------------

$(".item").emulateTransitionEnd(2000);

$.support.transition = false;

console.log(($.support.transition as Bootstrap.TransitionEventNames).end === "transitionend");
