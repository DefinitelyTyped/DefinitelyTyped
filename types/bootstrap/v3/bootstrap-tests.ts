declare let aHtmlElement: HTMLElement;

// --------------------------------------------------------------------------------------
// Modal
// --------------------------------------------------------------------------------------

$(".modal").modal();

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

$(".dropdown").dropdown();

$(".dropdown").dropdown("toggle");

$(".dropdown").on("show.bs.dropdown", (e) => {
    aHtmlElement = e.relatedTarget;
});

// --------------------------------------------------------------------------------------
// Scrollspy
// --------------------------------------------------------------------------------------

$(".navbar").scrollspy();

$(".navbar").scrollspy("refresh");

$(".navbar").scrollspy({
    target: "#navbar-example",
    offset: 10,
});

$('.navbar').on("activate.bs.scrollspy", () => {
    // do something...
});

// --------------------------------------------------------------------------------------
// Togglable tabs
// --------------------------------------------------------------------------------------

$(".tab").tab();

$(".tab").tab("show");

$(".tab").on("shown.bs.tab", (e) => {
    aHtmlElement = e.target; // newly activated tab
    aHtmlElement = e.relatedTarget; // previous active tab
});

// --------------------------------------------------------------------------------------
// Tooltip
// --------------------------------------------------------------------------------------

$(".tooltip").tooltip();

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

$(".tooltip").on("hidden.bs.tooltip", () => {
    // do something...
});

// --------------------------------------------------------------------------------------
// Popover
// --------------------------------------------------------------------------------------

$(".popover").popover();

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

$(".popover").on("hidden.bs.popover", () => {
    // do something...
});

// --------------------------------------------------------------------------------------
// Alert
// --------------------------------------------------------------------------------------

$(".alert").alert();

$(".alert").alert("close");

$(".alert").on("closed.bs.alert", () => {
    // do something...
});

// --------------------------------------------------------------------------------------
// Button
// --------------------------------------------------------------------------------------

$(".btn").button();

$(".btn").button("toggle");

$(".btn").button("reset");

$(".btn").button("Swaps text to any data defined text state.");

// --------------------------------------------------------------------------------------
// Collapse
// --------------------------------------------------------------------------------------

$(".collapse").collapse();

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

$(".carousel").carousel();

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

$('#myCarousel').on('slide.bs.carousel', (e) => {
    const dir: "left" | "right" = e.direction;
    aHtmlElement = e.relatedTarget;
});

// --------------------------------------------------------------------------------------
// Affix
// --------------------------------------------------------------------------------------

$(".affix").affix();

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
            const that = this as BootstrapOffset;
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

console.log(($.support.transition as TransitionEventNames).end === "transitionend");
