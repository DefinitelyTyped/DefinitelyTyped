declare class Delegate
{
    constructor(element: HTMLElement);

    on(eventType: string, selector: string, callback : () => any);

    on(eventType: string, callback:() => any);
}