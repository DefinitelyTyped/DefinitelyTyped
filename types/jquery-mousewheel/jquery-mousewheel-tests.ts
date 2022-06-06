$('#my_elem').on('mousewheel', (event: JQueryMousewheel.JQueryMousewheelEventObject) => {
    console.log(event.deltaX, event.deltaY, event.deltaFactor, event.deltaMode, event.absDelta);
});

$('#my_elem').mousewheel(event => {
    console.log(event.deltaX, event.deltaY, event.deltaFactor, event.deltaMode, event.absDelta);
});

$('#my_elem').unmousewheel();

// $ExpectType number
const lineHeight = $.event.special.mousewheel.getLineHeight($('#my_elem'));

// $ExpectType number
const pageHeight = $.event.special.mousewheel.getPageHeight($('#my_elem'));

// $ExpectType boolean
const adjustOldDeltas = $.event.special.mousewheel.settings.adjustOldDeltas;

// $ExpectType boolean
$.event.special.mousewheel.settings.normalizeOffset = !$.event.special.mousewheel.settings.normalizeOffset;

// @ts-expect-error
$.event.special.mousewheel.settings.normalizeOffset = "true";
