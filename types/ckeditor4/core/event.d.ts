declare namespace CKEDITOR {
    interface CKEditorStatic {
        event: eventConstructor;
    }

    type eventDataTypes = dom.domObject<Event | EventTarget> | dom.event<Event | EventTarget> | eventData;

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_eventInfo.html */
    interface eventInfo<
        T extends eventDataTypes = dom.event,
    > {
        data: T;
        editor: editor;
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

    interface eventConstructor<T extends event = event> {
        new(): T;

        useCapture: boolean;

        implementOn(targetObject: { [key: string]: unknown }): void;
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_event.html */
    interface event {
        capture(): void;

        define(name: string, meta: eventData): void;

        fire(eventName: string, data?: eventData, editor?: editor): boolean | unknown;

        fireOnce(eventName: string, data?: eventData, editor?: editor): boolean | unknown;

        hasListeners(eventName: string): boolean;

        on(
            eventName: string,
            listenerFunction: (eventInfo: eventInfo<eventDataTypes>) => void,
            scopeObj?: { [key: string]: unknown } | null,
            listenerData?: unknown,
            priority?: number,
        ): listenerRegistration;

        once(
            eventName: string,
            listenerFunction: (eventInfo: eventInfo<eventDataTypes>) => void,
            scopeObj?: { [key: string]: unknown } | null,
            listenerData?: unknown,
            priority?: number,
        ): listenerRegistration;

        removeAllListeners(): void;

        removeListener(eventName: string, listenerFunction: (eventInfo: eventInfo<eventDataTypes>) => void): void;
    }
}
