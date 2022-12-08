declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly event: typeof event;
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_eventInfo.html */
    interface eventInfo<
        T extends dom.domObject<Event | EventTarget> | dom.event<Event | EventTarget> | eventData = dom.event,
    > {
        data: T;
        editor: typeof editor;
        listenerData: unknown;
        name: string;
        sender: { [key: string]: unknown };

        cancel(): void;

        removeListener(): void;

        stop(): void;
    }

    interface eventData {
        [key: string]: unknown;
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_event.html */
    class event {
        static useCapture: boolean;

        constructor();

        capture(): void;

        define(name: string, meta: eventData): void;

        fire(eventName: string, data?: eventData, editor?: editor): boolean | unknown;

        fireOnce(eventName: string, data?: eventData, editor?: editor): boolean | unknown;

        hasListeners(eventName: string): boolean;

        on<
            T extends
                | dom.domObject<Event | EventTarget>
                | dom.event<Event | EventTarget>
                | eventData = dom.event<EventTarget>,
        >(
            eventName: string,
            listenerFunction: (eventInfo: eventInfo<T>) => void,
            scopeObj?: { [key: string]: unknown } | null,
            listenerData?: unknown,
            priority?: number,
        ): listenerRegistration;

        once(
            eventName: string,
            listenerFunction: (eventInfo: eventInfo) => void,
            scopeObj?: { [key: string]: unknown } | null,
            listenerData?: unknown,
            priority?: number,
        ): listenerRegistration;

        removeAllListeners(): void;

        removeListener(eventName: string, listenerFunction: (eventInfo: eventInfo) => void): void;

        static implementOn(targetObject: { [key: string]: unknown }): void;
    }
}
