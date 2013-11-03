declare module L {

    export interface LeafletEvent {

        /**
          * The event type (e.g. 'click').
          */
        type: string;

        /**
          * The object that fired the event.
          */
        target: any;
    }
}
