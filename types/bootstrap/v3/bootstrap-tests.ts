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

// --------------------------------------------------------------------------------------
// Scrollspy
// --------------------------------------------------------------------------------------

$(".navbar").scrollspy();

$(".navbar").scrollspy("refresh");

$(".navbar").scrollspy({
    target: "#navbar-example",
    offset: 10,
});

// --------------------------------------------------------------------------------------
// Tooltip
// --------------------------------------------------------------------------------------

$("#element").tooltip();

$("#element").tooltip("show");

$("#element").tooltip({
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

$("#element").tooltip({
    container: "body",
});

$("#element").tooltip({
    delay: { show: 500, hide: 100 },
});

$("#element").tooltip({
    placement() { return "top"; },
});

$("#element").tooltip({
    placement(tooltip: HTMLElement, trigger: Element) {
        console.log(this.options.delay);
        return "top";
    },
});

$("#element").tooltip({
    placement(tooltip: HTMLElement, trigger: Element) {
        // $ExpectError
        console.log(this.options.content); // only for PopoverOption, not TooltipOption
        return "top";
    },
});

$("#element").tooltip({
    title() { return this.id; },
});

$("#element").tooltip({
    viewport: "body",
});

// --------------------------------------------------------------------------------------
// Popover
// --------------------------------------------------------------------------------------

$("#element").popover();

$("#element").popover("show");

$("#element").popover({
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

$("#element").popover({
    container: "body",
});

$("#element").popover({
    content() { return `Elem id: ${this.id}`; },
});

$("#element").popover({
    delay: { show: 500, hide: 100 },
});

$("#element").popover({
    placement() { return "top"; },
});

$("#element").popover({
    placement(tooltip: HTMLElement, trigger: Element) {
        console.log(this.options.content);
        return "top";
    },
});

$("#element").popover({
    title() { return `Elem id: ${this.id}`; },
});

$("#element").popover({
    viewport: "body",
});

// --------------------------------------------------------------------------------------
// Alert
// --------------------------------------------------------------------------------------

$(".alert").alert();

$(".alert").alert("close");

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
