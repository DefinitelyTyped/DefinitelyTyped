// Type definitions for aurelia-pal v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/pal/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'aurelia-pal' {
  
  /**
  * Enables discovery of what features the runtime environment supports.
  */
  export interface Feature {
    
    /**
      * Does the runtime environment support ShadowDOM?
      */
    shadowDOM: boolean;
    
    /**
      * Does the runtime environment support the css scoped attribute?
      */
    scopedCSS: boolean;
    
    /**
      * Does the runtime environment support native HTMLTemplateElement?
      */
    htmlTemplateElement: boolean;
    
    /**
      * Does the runtime environment support native DOM mutation observers?
      */
    mutationObserver: boolean;
  }
  
  /**
  * The runtime's performance API.
  */
  export interface Performance {
    now(): number;
  }
  
  /**
  * Represents the core APIs of the runtime environment.
  */
  /**
  * Represents the core APIs of the runtime environment.
  */
  export interface Platform {
    
    /**
      * The runtime environment's global.
      */
    global: any;
    
    /**
      * A function wich does nothing.
      */
    noop: Function;
    
    /**
      * The runtime's location API.
      */
    location: Object;
    
    /**
      * The runtime's history API.
      */
    history: Object;
    
    /**
      * The runtime's performance API
      */
    performance: Performance;
    
    /**
      * Registers a function to call when the system is ready to update (repaint) the display.
      * @param callback The function to call.
      */
    requestAnimationFrame(callback: ((animationFrameStart: number) => void)): number;
    
    /**
      * The runtime's XMLHttpRequest API.
      */
    XMLHttpRequest: XMLHttpRequest;
    
    /**
      * Iterate all modules loaded by the script loader.
      * @param callback A callback that will receive each module id along with the module object. Return true to end enumeration.
      */
    eachModule(callback: ((key: string, value: Object) => boolean)): void;
    
    /**
      * Add a global event listener.
      * @param eventName A string representing the event type to listen for.
      * @param callback The function that receives a notification when an event of the specified type occurs.
      * @param capture If true, useCapture indicates that the user wishes to initiate capture.
      */
    addEventListener(eventName: string, callback: Function, capture?: boolean): void;
    
    /**
      * Remove a global event listener.
      * @param eventName A string representing the event type to listen for.
      * @param callback The function to remove from the event.
      * @param capture Specifies whether the listener to be removed was registered as a capturing listener or not.
      */
    removeEventListener(eventName: string, callback: Function, capture?: boolean): void;
  }
  
  /**
  * Represents the core APIs of the DOM.
  */
  export interface Dom {
    
    /**
      * The global DOM Element type.
      */
    Element: Element;
    
    /**
      * The global DOM SVGElement type.
      */
    SVGElement: SVGElement;
    
    /**
      * A key representing a DOM boundary.
      */
    boundary: string;
    
    /**
      * The document title.
      */
    title: string;
    
    /**
      * The document's active/focused element.
      */
    activeElement: Element;
    
    /**
      * Add an event listener to the document.
      * @param eventName A string representing the event type to listen for.
      * @param callback The function that receives a notification when an event of the specified type occurs.
      * @param capture If true, useCapture indicates that the user wishes to initiate capture.
      */
    addEventListener(eventName: string, callback: Function, capture: boolean): void;
    
    /**
      * Remove an event listener from the document.
      * @param eventName A string representing the event type to listen for.
      * @param callback The function to remove from the event.
      * @param capture Specifies whether the listener to be removed was registered as a capturing listener or not.
      */
    removeEventListener(eventName: string, callback: Function, capture: boolean): void;
    
    /**
      * Adopts a node from an external document.
      * @param node The node to be adopted.
      * @return The adopted node able to be used in the document.
      */
    adoptNode(node: Node): Node;
    
    /**
      * Creates the specified HTML element or an HTMLUnknownElement if the given element name isn't a known one.
      * @param tagName A string that specifies the type of element to be created.
      * @return The created element.
      */
    createElement(tagName: string): Element;
    
    /**
      * Creates a new Text node.
      * @param text A string to populate the new Text node.
      * @return A Text node.
      */
    createTextNode(text: string): Text;
    
    /**
      * Creates a new Comment node.
      * @param text A string to populate the new Comment node.
      * @return A Comment node.
      */
    createComment(text: string): Comment;
    
    /**
      * Creates a new DocumentFragment.
      * @return A DocumentFragment.
      */
    createDocumentFragment(): DocumentFragment;
    
    /**
      * Creates a new MutationObserver.
      * @param callback A callback that will recieve the change records with the mutations.
      * @return A MutationObservere.
      */
    createMutationObserver(callback: Function): MutationObserver;
    
    /**
      * Creates a new CustomEvent.
      * @param eventType A string representing the event type.
      * @param options An options object specifying bubbles:boolean, cancelable:boolean and/or detail:Object information.
      * @return A CustomEvent.
      */
    createCustomEvent(eventType: string, options: Object): CustomEvent;
    
    /**
      * Dispatches an event on the document.
      * @param evt The event to dispatch.
      */
    dispatchEvent(evt: Event): void;
    
    /**
      * Gives the values of all the CSS properties of an element after applying the active stylesheets and resolving any basic computation those values may contain.
      * @param element The Element for which to get the computed style.
      * @return The computed styles.
      */
    getComputedStyle(element: Element): CSSStyleDeclaration;
    
    /**
      * Locates an element in the document according to its id.
      * @param id The id to search the document for.
      * @return The found element.
      */
    getElementById(id: string): Element;
    
    /**
      * Performs a query selector on the document and returns all located matches.
      * @param query The query to use in searching the document.
      * @return A list of all matched elements in the document.
      */
    querySelectorAll(query: string): NodeList;
    
    /**
      * Gets the element that is the next sibling of the provided element.
      * @param element The element whose next sibling is being located.
      * @return The next sibling Element of the provided Element.
      */
    nextElementSibling(element: Node): Element;
    
    /**
      * Creates an HTMLTemplateElement using the markup provided.
      * @param markup A string containing the markup to turn into a template. Note: This string must contain the template element as well.
      * @return The instance of HTMLTemplateElement that was created from the provided markup.
      */
    createTemplateFromMarkup(markup: string): Element;
    
    /**
      * Appends a node to the parent, if provided, or the document.body otherwise.
      * @param newNode The node to append.
      * @param parentNode The node to append to, otherwise the document.body.
      */
    appendNode(newNode: Node, parentNode?: Node): void;
    
    /**
      * Replaces a node in the parent with a new node.
      * @param newNode The node to replace the old node with.
      * @param node The node that is being replaced.
      * @param parentNode The node that the current node is parented to.
      */
    replaceNode(newNode: Node, node: Node, parentNode?: Node): void;
    
    /**
      * Removes the specified node from the parent node.
      * @param node The node to remove.
      * @param parentNode The parent node from which the node will be removed.
      */
    removeNode(node: Node, parentNode?: Node): void;
    
    /**
      * Injects styles into the destination element, or the document.head if no destination is provided.
      * @param styles The css text to injext.
      * @param destination The destination element to inject the css text into. If not specified it will default to the document.head.
      * @param prepend Indicates whether or not the styles should be prepended to the destination. By default they are appended.
      * @return The Style node that was created.
      */
    injectStyles(styles: string, destination?: Element, prepend?: boolean): Node;
  }
  
  /**
  * Creates an instance of Error that aggregates and preserves an innerError.
  * @param message The error message.
  * @param innerError The inner error message to aggregate.
  * @param skipIfAlreadyAggregate Indicates to not wrap the inner error if it itself already has an innerError.
  * @return The Error instance.
  */
  export function AggregateError(message: string, innerError?: Error, skipIfAlreadyAggregate?: boolean): Error;
  
  /**
  * The singleton instance of the Feature discovery API.
  */
  /**
  * The singleton instance of the Feature discovery API.
  */
  export const FEATURE: Feature;
  
  /**
  * The singleton instance of the Platform API.
  */
  /**
  * The singleton instance of the Platform API.
  */
  export const PLATFORM: Platform;
  
  /**
  * The singleton instance of the Dom API.
  */
  /**
  * The singleton instance of the Dom API.
  */
  export const DOM: Dom;
  
  /**
  * Enables initializing a specific implementation of the Platform Abstraction Layer (PAL).
  * @param callback Allows providing a callback which configures the three PAL singletons with their platform-specific implementations.
  */
  export function initializePAL(callback: ((platform: Platform, feature: Feature, dom: Dom) => void)): void;
}