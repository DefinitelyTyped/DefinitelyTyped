$('#my_elem').on('mousewheel', (event: JQueryMousewheel.JQueryMousewheelEventObject) => {
    console.log(event.deltaX, event.deltaY, event.deltaFactor, event.deltaMode, event.absDelta);
});

$('#my_elem').mousewheel(event => {
    console.log(event.deltaX, event.deltaY, event.deltaFactor, event.deltaMode, event.absDelta);
});

$('#my_elem').unmousewheel();
