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
    rightToLeft: false,
});

$flickity.flickity("next")
    .flickity("select", 4);

// Vanilla jQuery tests
let flikty: Flickity = new Flickity("#flickity-gallery");

let flikty2: Flickity = new Flickity("#flickity-gallery", {
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
    rightToLeft: false,
});

// ES6 element selector for tests
declare let element: HTMLElement;
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
function exhaustiveHandlersTest(eventName: Flickity.FlickityEvents) {
    switch (eventName) {
        case "cellChange": {
            const handler = (index: number): void => {};
            flikty2.on("cellChange", handler);
            flikty2.off("cellChange", handler);
            flikty2.once("cellChange", handler);
            break;
        }
        case "activate": {
            const handler = (): void => {};
            flikty2.on("activate", handler);
            flikty2.off("activate", handler);
            flikty2.once("activate", handler);
            break;
        }
        case "deactivate": {
            const handler = (): void => {};
            flikty2.on("deactivate", handler);
            flikty2.off("deactivate", handler);
            flikty2.once("deactivate", handler);
            break;
        }
        case "uiChange": {
            const handler = (): void => {};
            flikty2.on("uiChange", handler);
            flikty2.off("uiChange", handler);
            flikty2.once("uiChange", handler);
            break;
        }
        case "resize": {
            const handler = (): void => {};
            flikty2.on("resize", handler);
            flikty2.off("resize", handler);
            flikty2.once("resize", handler);
            break;
        }
        case "ready": {
            function handleReady(): void {}
            flikty2.on("ready", handleReady);
            flikty2.off("ready", handleReady);
            flikty2.once("ready", handleReady);
            break;
        }
        case "change": {
            function handleChange(index: number): void {}
            flikty2.on("change", handleChange);
            flikty2.off("change", handleChange);
            flikty2.once("change", handleChange);
            break;
        }
        case "select": {
            function handleSelect(index: number): void {}
            flikty2.on("select", handleSelect);
            flikty2.off("select", handleSelect);
            flikty2.once("select", handleSelect);
            break;
        }
        case "cellSelect": {
            function handleCellSelect(index: number): void {}
            flikty2.on("cellSelect", handleCellSelect);
            flikty2.off("cellSelect", handleCellSelect);
            flikty2.once("cellSelect", handleCellSelect);
            break;
        }
        case "settle": {
            function handleSettle(index: number): void {}
            flikty2.on("settle", handleSettle);
            flikty2.off("settle", handleSettle);
            flikty2.once("settle", handleSettle);
            break;
        }
        case "scroll": {
            function handleScroll(progress: number): void {}
            flikty2.on("scroll", handleScroll);
            flikty2.off("scroll", handleScroll);
            flikty2.once("scroll", handleScroll);
            break;
        }
        case "dragStart": {
            function handleDragStart(event: Event, pointer: Event | Touch): void {}
            flikty2.on("dragStart", handleDragStart);
            flikty2.off("dragStart", handleDragStart);
            flikty2.once("dragStart", handleDragStart);
            break;
        }
        case "dragMove": {
            function handleDragMove(event: Event, pointer: Event | Touch, moveVector: { x: number; y: number }): void {}
            flikty2.on("dragMove", handleDragMove);
            flikty2.off("dragMove", handleDragMove);
            flikty2.once("dragMove", handleDragMove);
            break;
        }
        case "dragEnd": {
            function handleDragEnd(event: Event, pointer: Event | Touch): void {}
            flikty2.on("dragEnd", handleDragEnd);
            flikty2.off("dragEnd", handleDragEnd);
            flikty2.once("dragEnd", handleDragEnd);
            break;
        }
        case "pointerDown": {
            function handlePointerDown(event: Event, pointer: Event | Touch): void {}
            flikty2.on("pointerDown", handlePointerDown);
            flikty2.off("pointerDown", handlePointerDown);
            flikty2.once("pointerDown", handlePointerDown);
            break;
        }
        case "pointerMove": {
            function handlePointerMove(
                event: Event,
                pointer: Event | Touch,
                moveVector: { x: number; y: number },
            ): void {}
            flikty2.on("pointerMove", handlePointerMove);
            flikty2.off("pointerMove", handlePointerMove);
            flikty2.once("pointerMove", handlePointerMove);
            break;
        }
        case "pointerUp": {
            function handlePointerUp(event: Event, pointer: Event | Touch): void {}
            flikty2.on("pointerUp", handlePointerUp);
            flikty2.off("pointerUp", handlePointerUp);
            flikty2.once("pointerUp", handlePointerUp);
            break;
        }
        case "staticClick": {
            function handleStaticClick(
                event: Event,
                pointer: Event | Touch,
                cellElement: Element,
                cellIndex: number,
            ): void {}
            flikty2.on("staticClick", handleStaticClick);
            flikty2.off("staticClick", handleStaticClick);
            flikty2.once("staticClick", handleStaticClick);
            break;
        }
        case "lazyLoad": {
            function handleLazyLoad(event: Event, cellElement: Element): void {}
            flikty2.on("lazyLoad", handleLazyLoad);
            flikty2.off("lazyLoad", handleLazyLoad);
            flikty2.once("lazyLoad", handleLazyLoad);
            break;
        }
        case "bgLazyLoad": {
            function handleBgLazyLoad(event: Event, cellElement: Element): void {}
            flikty2.on("bgLazyLoad", handleBgLazyLoad);
            flikty2.off("bgLazyLoad", handleBgLazyLoad);
            flikty2.once("bgLazyLoad", handleBgLazyLoad);
            break;
        }
        case "fullscreenChange": {
            function handleFullscreenChange(isFullscreen: boolean): void {}
            flikty2.on("fullscreenChange", handleFullscreenChange);
            flikty2.off("fullscreenChange", handleFullscreenChange);
            flikty2.once("fullscreenChange", handleFullscreenChange);
            break;
        }
        case "destroy": {
            function handleDestroy(): void {}
            flikty2.on("destroy", handleDestroy);
            flikty2.off("destroy", handleDestroy);
            flikty2.once("destroy", handleDestroy);
            break;
        }
        default:
            // $ExpectType never
            eventName;
    }
}

// static get data methods

let jQdata = jQuery.fn.data("flickity")();
jQdata = $.fn.data("flickity")();

let jsData = Flickity.data("#gallery");
jsData = Flickity.data("#gallery");

// property tests
let selectedIndex: number = flikty2.selectedIndex;

let selectedElement: Element = flikty2.selectedElement;
let cells: Flickity.Cell[] = flikty2.cells;
let slider: HTMLElement = flikty2.slider;

// arrow shape tests
let flikty3: Flickity = new Flickity("#flickity-gallery", {
    arrowShape: "M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z",
});

let flikty4: Flickity = new Flickity(new HTMLElement(), {
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 70,
        y2: 40,
        x3: 30,
    },
});

let flikty5: Flickity = new Flickity(new HTMLElement(), {
    on: {
        ready: () => {},
        change: (index) => {},
        select: (index) => {},
        settle: (index) => {},
        scroll: (progress) => {},
        dragStart: (event, pointer) => {},
        dragMove: (event, pointer, moveVector) => {},
        dragEnd: (event, pointer) => {},
        pointerDown: (event, pointer) => {},
        pointerMove: (event, pointer, moveVector) => {},
        pointerUp: (event, pointer) => {},
        staticClick: (event, pointer, cellElement, cellIndex) => {},
        lazyLoad: (event, cellElement) => {},
        bgLazyLoad: (event, element) => {},
        fullscreenChange: (isFullscreen) => {},
    },
});

let fliktyBindings: Flickity.EventBindings = {
    ready: () => {},
    change: (index) => {},
    select: (index) => {},
    settle: (index) => {},
    scroll: (progress) => {},
    dragStart: (event, pointer) => {},
    dragMove: (event, pointer, moveVector) => {},
    dragEnd: (event, pointer) => {},
    pointerDown: (event, pointer) => {},
    pointerMove: (event, pointer, moveVector) => {},
    pointerUp: (event, pointer) => {},
    staticClick: (event, pointer, cellElement, cellIndex) => {},
    lazyLoad: (event, cellElement) => {},
    bgLazyLoad: (event, element) => {},
    fullscreenChange: (isFullscreen) => {},
};

let fliktyOpts1: Flickity.Options = {
    initialIndex: ".is-initial-select",
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
    rightToLeft: false,
    on: fliktyBindings,
};

// options test
let fliktyOpts2: Flickity.Options = {
    autoPlay: true,
    pauseAutoPlayOnHover: true,
};

// Cell and slide layout APIs (Flickity v3)
const cell = flikty2.getParentCell(element);
if (cell) {
    const cellElement: HTMLElement = cell.element;
    const cellWidth: number = cell.size.outerWidth;
    flikty2.cellSizeChange(cellElement);
    flikty2.positionSliderAtSelected();
}
const directCell: Flickity.Cell | undefined = flikty2.getCell(element);
const queriedCell: Flickity.Cell | undefined = flikty2.queryCell(element);
const matchingCells: Flickity.Cell[] = flikty2.getCells([element]);
const lastCell: Flickity.Cell | undefined = flikty2.getLastCell();
const lastSlide: Flickity.Slide | undefined = flikty2.getLastSlide();
const adjacentElements: HTMLElement[] = flikty2.getAdjacentCellElements(1);
const slides: Flickity.Slide[] = flikty2.slides;
const selectedElements: HTMLElement[] = flikty2.selectedElements;
flikty2.cellChange(0);
flikty2.cellChange();

// Additional Flickity v3 options, events, and selected-cell APIs
const v3Options: Flickity.Options = {
    draggable: ">1",
    wrapAround: "fill",
    namespaceJQueryEvents: false,
    on: {
        cellChange: (index) => {
            const changedIndex: number = index;
        },
        activate: () => {},
        deactivate: () => {},
        uiChange: () => {},
        resize: () => {},
    },
};
flikty2.selectCell(element);
const selectedSlide: Flickity.Slide = flikty2.selectedSlide;
const selectedCells: Flickity.Cell[] = flikty2.selectedCells;
const selectedCell: Flickity.Cell = flikty2.selectedCell;
const viewport: HTMLElement = flikty2.viewport;
const carouselElement: HTMLElement = flikty2.element;
if (directCell) {
    const slideIndex: number = flikty2.getCellSlideIndex(directCell);
}
