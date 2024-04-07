type EventMap = GlobalEventHandlersEventMap;
type EventMapKeys = keyof EventMap;

export function addEventListener<TEventName extends EventMapKeys | string>(
    target: EventTarget,
    eventName: TEventName,
    listener: (event: TEventName extends EventMapKeys ? EventMap[TEventName] : Event) => any,
    options?: boolean | AddEventListenerOptions,
): () => void;

// Disable automatic exports for helper types above
export {};
