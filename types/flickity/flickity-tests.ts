/// <reference types="jquery"/>

// jQuery tests

let $flickity = $("#flickity-selector").flickity({
        initialIndex: 0,
        accessibility: true,
        asNavFor: "#nav-bar",
        autoPlay: true,
        cellAlign: "left",
        cellSelector: ".gallery-cell",
        contain: true,
        draggable: true,
        freeScroll: false,
        freeScrollFriction: 0.5,
        friction: 0.8,
        imagesLoaded: false,
        lazyLoad: false,
        pageDots: false,
        arrowShape: "arrow.svg",
        percentPosition: false,
        prevNextButtons: false,
        selectedAttraction: 0.050,
        setGallerySize: true,
        watchCSS: true,
        wrapAround: true,
        resize: true,
        rightToLeft: false
    });

$flickity.flickity("next")
    .flickity("select", 4);

// Vanilla jQuery tests
let flikty: Flickity = new Flickity("#flickity-gallery");

let flikty2: Flickity =
    new Flickity("#flickity-gallery",
        {
            initialIndex: 0,
            accessibility: true,
            asNavFor: "#nav-bar",
            autoPlay: true,
            cellAlign: "left",
            cellSelector: ".gallery-cell",
            contain: true,
            draggable: true,
            freeScroll: false,
            freeScrollFriction: 0.5,
            friction: 0.8,
            imagesLoaded: false,
            lazyLoad: false,
            pageDots: false,
            arrowShape: "arrow.svg",
            percentPosition: false,
            prevNextButtons: false,
            selectedAttraction: 0.050,
            setGallerySize: true,
            watchCSS: true,
            wrapAround: true,
            resize: true,
            rightToLeft: false
        });

// ES6 element selector for tests
let element = document.querySelector("#gallery");
let nodeList = document.querySelectorAll("#gallery");
let cellElements: Element[] = flikty2.getCellElements();

flikty2.select(1, true);
flikty2.select(1);

flikty2.previous();
flikty2.previous(true);

flikty2.next();
flikty2.next(true);

flikty2.resize();
flikty2.reposition();

flikty2.prepend(element);

flikty2.append(element);
flikty2.append(nodeList);

flikty2.insert(element, 0);
flikty2.insert(nodeList, 0);
flikty2.insert(new Array<Element>(), 0);

flikty2.remove(element);
flikty2.remove(nodeList);
flikty2.remove(new Array<Element>());

flikty2.destroy();

flikty2.reloadCells();

// event handlers
flikty2.on("cellSelect", (evt, ele) => {
    // do something
});

flikty2.off("cellSelect", (evt, ele, pntr, vctr) => {
    // do something
});

flikty2.once("cellSelect", (evt, ele, pntr) => {
    // do something
});

flikty2.listener("myCustomEvent", (evt: Event) => {
    // do something
});

// static get data methods

let jQdata = jQuery.fn.data("flickity")();
jQdata = $.fn.data("flickity")();

let jsData = Flickity.data("#gallery");
jsData = Flickity.data("#gallery");

// property tests
let selectedIndex: number = flikty2.selectedIndex;

let selectedElement: Element = flikty2.selectedElement;
let cells: Element[] = flikty2.cells;

// arrow shape tests
let flikty3: Flickity = new Flickity("#flickity-gallery", {
    arrowShape: "M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z"
});

let flikty4: Flickity = new Flickity(new HTMLElement(), {
    arrowShape: {
        x0: 10,
        x1: 60, y1: 50,
        x2: 70, y2: 40,
        x3: 30
    }
});
