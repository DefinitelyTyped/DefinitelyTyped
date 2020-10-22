// Type definitions for ftdomdelegate
// Project: https://github.com/ftlabs/ftdomdelegate
// Definitions by: Christian Holm Nielsen <https://github.com/dotnetnerd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Delegate
{
    constructor(element: HTMLElement);

    on(eventType: string, selector: string, handler : (event: Event, targetElement: Element) => void, eventData? : any) : void;

    on(eventType: string, selector: (element: Element) => boolean, handler : (event: Event, targetElement: Element) => void, eventData? : any) : void;

    on(eventType: string, handler:(event: Event, targetElement: Element) => void, eventData? : any) : void;

    off(eventType? : string, selector? : string, handler? : (event: Event, targetElement: Element) => void) : void;
    off(eventType? : string, selector?: (element: Element) => boolean, handler? : (event: Event, targetElement: Element) => void) : void;
    
    root(element? : Element) : void;

    destroy() : void;
}
