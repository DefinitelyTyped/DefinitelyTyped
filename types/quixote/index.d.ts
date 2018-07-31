// Type definitions for quixote v0.7.0
// Project: http://quixote-css.com/
// Definitions by: Aleksandr Filatov <https://github.com/greybax>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Quixote {
    // Create a test iframe. This is a slow operation, so once you have a frame, it's best to use QFrame.reset() on it rather than creating a new frame for each test
    createFrame(options: QuixoteFrameOptions, callback: (err: Error, loadedFrame: QFrame) => void): QFrame;
}

interface QFrame {
    // Reset the frame back to the state it was in immediately after you called quixote.createFrame()
    reset(): void;
    
    // Remove the test frame entirely.
    remove(): void;
    
    // Retrieve an element matching a selector. Throws an exception unless exactly one matching element is found
    get(selector: string, nickname?: string): QElement;
    
    // Retrieve a list of elements matching a selector. If you want to ensure that exactly one element is retrieved, use frame.get() instead.
    getAll(selector: string, nickname?: string): QElementList;
    
    // Create an element and append it to the frame's body. Throws an exception unless exactly one element is created. (But that one element may contain children.)
    add(html: string, nickname?: string): QElement;
    
    // Provides access to descriptors for the frame's viewport (the part of the page that you can see in the frame, not including scrollbars)
    viewport(): QElement;
    
    // Provides access to descriptors for the frame's page (everything you can see or scroll to, not including scrollbars)
    page(): QElement;
    
    // Retrieves the frame's body element.
    body(): QElement;
    
    // Changes the size of the frame.
    resize(width: number, height: number): void;
    
    // Scroll the page so that top-left corner of the frame is as close as possible to an (x, y) coordinate.
    scroll(x: number, y: number): void;
    
    // Determine the (x, y) coordinate of the top-left corner of the frame. This uses pageXOffset and pageYOffset under the covers. (On IE 8, it uses scrollLeft and scrollTop.)
    getRawScrollPosition(x: number, y: number): Object;
    
    // Retrieve the underlying HTMLIFrameElement DOM element for the frame.
    toDomElement(): HTMLIFrameElement;    
}

interface QElement {
    // Compare the element's descriptors to a set of expected values and throw an exception if they don't match
    assert(expected: ElementDescriptor, message?: string): void;

    // Compare the element's descriptors to a set of expected values.
    diff(expected: ElementDescriptor): string;
    
    // Determine how the browser is actually rendering an element's style. This uses getComputedStyle() under the covers. (On IE 8, it uses currentStyle)
    getRawStyle(property: string): string;
    
    // Determine where an element is displayed within the frame viewport, as computed by the browser
    getRawPosition(): RawPositionObject;
    
    // Retrieve the underlying HTMLElement DOM element for the frame.
    toDomElement(): HTMLElement;
}

interface QElementList {
    // Determine the number of elements in the list.
    length(): number;
    
    // Retrieve an element from the list. Positive and negative indices are allowed. Throws an exception if the index is out of bounds.
    at(index: number, nickname?: string): QElement;    
}

// Element positions and sizes are available on all QElement instances.
interface ElementDescriptor {
    // The top edge of the element
    top?: PositionDescriptor;
    
    // The right edge of the element
    right?: PositionDescriptor;
    
    // The bottom edge of the element
    bottom?: PositionDescriptor;
    
    // The left edge of the element
    left?: PositionDescriptor;
    
    // Horizontal center: midway between the right and left edges.
    center?: PositionDescriptor;
    
    // Vertical middle: midway between the top and bottom edges.
    middle?: PositionDescriptor;
    
    // Width of the element.
    width?: SizeDescriptor;
    
    // Height of the element.
    height?: SizeDescriptor;
}

// Viewport positions and sizes are available on QFrame.viewport()
interface ViewportDescriptor {
    // The highest visible part of the page.
    top: PositionDescriptor;
    
    // The rightmost visible part of the page.
    right: PositionDescriptor;
    
    // The lowest visible part of the page.
    bottom: PositionDescriptor;
    
    // The leftmost visible part of the page.
    left: PositionDescriptor;
    
    // Horizontal center: midway between right and left
    center: PositionDescriptor;
    
    // Vertical middle: midway between top and bottom.
    middle: PositionDescriptor;
    
    // Width of the viewport.
    width: SizeDescriptor;
    
    // Height of the viewport.
    height: SizeDescriptor;
}

// Page positions and sizes are available on QFrame.page().
interface PageDescriptor {
    // The top of the page.
    top: PositionDescriptor;
    
    // The right side of the page.
    right: PositionDescriptor;
    
    // The bottom of the page.
    bottom: PositionDescriptor;
    
    // The left side of the page.
    left: PositionDescriptor;
    
    // Horizontal center: midway between right and left.
    center: PositionDescriptor;
    
    // Vertical middle: midway between top and bottom.
    middle: PositionDescriptor;
    
    // Width of the page.
    width: SizeDescriptor;
    
    // Height of the page.
    height: SizeDescriptor;
}

// Position descriptors represent an X or Y coordinate. The top-left corner of the page is (0, 0) and the values increase downward and to the right.
interface PositionDescriptor {
    // Create a new descriptor that is further down the page or to the right.
    plus(amount: SizeDescriptor): PositionDescriptor;
    
    // Create a new descriptor that is further down the page or to the right.
    plus(amount: number): PositionDescriptor;
    
    // Create a new descriptor that is further down the page or to the right.
    minus(amount: SizeDescriptor): PositionDescriptor;
    
    // Create a new descriptor that is further down the page or to the right.
    minus(amount: number): PositionDescriptor;
}

// Size descriptors represent width or height.
interface SizeDescriptor {
    // Create a descriptor that's bigger than this one.
    plus(amount: SizeDescriptor): SizeDescriptor;
    
    // Create a descriptor that's bigger than this one.
    plus(amount: number): SizeDescriptor;
    
    // Create a descriptor that's smaller than this one.
    minus(amount: SizeDescriptor): SizeDescriptor;
    
    // Create a descriptor that's smaller than this one.
    minus(amount: number): SizeDescriptor;
    
    // Create a new descriptor that's a multiple or fraction of the size of this one.
    times(multiple: number): SizeDescriptor;
}

interface QuixoteFrameOptions {
    // Width of the iframe. Defaults to a large value (see stability note below)
    width?: number;

    // Height of the iframe. Defaults to a large value (see stability note below)
    height?: number;

    // URL of an HTML document to load into the frame. Must be served from same domain as the enclosing test document, or you could get same-origin policy errors. Defaults to an empty document with <!DOCTYPE html> (to enable standards-mode rendering)
    src?: string;

    // URL of a CSS stylesheet to load into the frame. Defaults to loading nothing
    stylesheet?: string;
}

interface RawPositionObject {
    // top edge
    top: number;
    
    // right edge
    right: number;
    
    // bottom edge
    bottom: number;
    
    // left edge
    left: number;
    
    // width (right edge minus left edge)
    width: number;
    
    // height (bottom edge minus top edge)
    height: number;
}

declare var quixote: Quixote;

declare module "quixote" {

    class Quixote {
        constructor();
        
        createFrame(options: QuixoteFrameOptions, callback: (err: Error, loadedFrame: QFrame) => void): QFrame;
    }

    export = Quixote;
}
