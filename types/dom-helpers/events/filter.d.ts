/**
 * Returns a function handler that only fires when the target matches or is contained in the selector
 * @example events.on(list, 'click', events.filter('li > a', handler))
 */
declare const filter: (selector: string, listener: EventListener) => EventListener;
export = filter;
