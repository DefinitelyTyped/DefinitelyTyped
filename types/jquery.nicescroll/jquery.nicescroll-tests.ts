// cases from documentation
// 1. Simple mode, it styles document scrollbar:
$(() => {
    $("body").niceScroll();
});

// 2. Instance with object returned:
let nice;
$(() => {
    nice = $("body").niceScroll();
});

// 3. Style a DIV and change cursor color:
$(() => {
    $("#thisdiv").niceScroll({cursorcolor: "#00F"});
});

// 4. DIV with "wrapper", formed by two divs, the first is the vieport, the latter is the content:
$(() => {
    $("#viewportdiv").niceScroll("#wrapperdiv", {cursorcolor: "#00F"});
});

// 5. Get nicescroll object:
nice = $("#mydiv").getNiceScroll();

// 6. Hide scrollbars:
$("#mydiv").getNiceScroll().hide();

// 7. Check for scrollbars resize (when content or position have changed):
$("#mydiv").getNiceScroll().resize();

// 8. Scrolling to a position:
$("#mydiv").getNiceScroll(0).doScrollLeft(1, 2); // Scroll X Axis
$("#mydiv").getNiceScroll(0).doScrollTop(1, 14); // Scroll Y Axis

// other cases
$(".ui-grid-viewport").niceScroll({
    cursorcolor: "#fff",
    cursorwidth: "8px",
    autohidemode: "leave"
});
