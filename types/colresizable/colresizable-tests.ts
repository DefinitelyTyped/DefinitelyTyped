$("#table").colResizable(); // $ExpectType JQuery<HTMLElement>

$("#table").colResizable({
    resizeMode: "fit",
    disable: false,
    disabledColumns: [1, 2, 3],
    liveDrag: true,
    postbackSafe: false,
    partialRefresh: true,
    headerOnly: false,
    gripInnerHtml: "",
    draggingClass: ".myClass",
    minWidth: 100,
    hoverCursor: 'pointer',
    dragCursor: 'e-resize',
    flush: false,
    marginLeft: "14px",
    marginRight: "auto",
    fixed: false,

    onResize(evt) {
        evt.currentTarget; // $ExpectType Element
    },
    onDrag(evt) {
        evt.currentTarget; // $ExpectType Element
    }
});

// Samples at http://www.bacubacu.com/colresizable
function onSampleResized(e: JQueryMouseEventObject) {
    const table = $(e.currentTarget); // reference to the resized table
}

$("#sample").colResizable({
    liveDrag: true,
    gripInnerHtml: "<div class='grip'></div>",
    draggingClass: "dragging",
    onResize: onSampleResized
});

function postbackSample() {
    $("#updatePanelSample").colResizable({
        liveDrag: true,
        postbackSafe: true,
        partialRefresh: true
    });
}

$("#flexSample").colResizable({resizeMode: 'flex'});

$("#overflowSample").colResizable({resizeMode: 'overflow'});

function onSlide() {}

$("#sample5").colResizable({
    liveDrag: true,
    draggingClass: "rangeDrag",
    gripInnerHtml: "<div class='rangeGrip'></div>",
    onResize: onSlide,
    minWidth: 8
});
