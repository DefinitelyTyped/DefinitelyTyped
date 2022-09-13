// Type definitions for @ceddl/ceddl-polyfill 0.9
// Project: https://www.ceddlbyexample.com/
// Definitions by: Roland Broekema <https://github.com/broekema41>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const ceddl: {
    /**
     * The initialize function makes it possible to do async loading of the model
     * definitions and initialize the html interface when ready. The initialize
     * also clears the events and models stored allowing ceddl to be used in single
     * page applications.
     */
    initialize(): void;
    /**
     * A call to emitEvent will add the event to the event store and process the event
     * onto the eventbus. If you have a large number of different events on a page, the
     * convention is to use colons to namespace them: "poll:start", or "change:selection".
     * @example
     *    ceddl.emitEvent('poll:start', {
     *       url: window.location.href,
     *       trigger: 'shipping view more than 5s'
     *    });
     */
    emitEvent(name: string, data: any): void;
    /**
     * A call to emitModel will perform the following sequance:
     *   - Validate the data input against the a root model definitions.
     *   - Store the data in the model store.
     *   - Send main event on the eventbus.
     *   - Recursively moves through the delta to publish the smallest changes under a specific eventName. The dot "page.title" will be used as a namespace separator.
     * @example
     *    ceddl.emitModel('funnel', {
     *      category: 'single_sign_on',
     *      name: 'register',
     *      stepName: password set,
     *      step: 2
     *    });
     *
     * In many cases where this function used the html interface will give you a more maintanable / testable solution.
     */
    emitModel(name: string, data: any): void;
    /**
     * Returns all currently stored data model value's.
     */
    getModels(): any;
    /**
     * Returns all stored events.
     */
    getEvents(): any[];
    /**
     * Creating, configuring data models for datalayer
     */
    modelFactory: ModelFactory;
    /**
     * Message bus to enable you to de-couple your application's
     * components.
     */
    eventbus: Eventbus;
};

/**
 * Details not for implementer.
 */
export class Model {
}
/**
 * Details not for implementer.
 */
export interface StringField {
    validate: () => void;
}
/**
 * Details not for implementer.
 */
export interface BooleanField {
    validate: () => void;
}
/**
 * Details not for implementer.
 */
export interface ModelField {
    validate: () => void;
}
/**
 * Details not for implementer.
 */
export interface ListField {
    validate: () => void;
}
/**
 * Details not for implementer.
 */
export interface NumberField {
    validate: () => void;
}
/**
 * Details not for implementer.
 */
export interface ArrayField {
    validate: () => void;
}

/**
 * ceddl datalayer data model configuration object
 * details at https://www.ceddlbyexample.com/data-models
 */
export interface ModelConfig {
    key: string;
    root: boolean;
    extends?: string;
    fields: {
        [key: string]: {
            type: StringField | BooleanField | ModelField | ListField | NumberField | ArrayField;
            foreignModel?: string;
            fieldType?: StringField | BooleanField | NumberField; // only used when ArrayField
            required: boolean;
            pattern?: string;
        }
    };
}

export interface ModelFactory {
    fields: {
        StringField: StringField;
        BooleanField: BooleanField;
        ModelField: ModelField;
        ListField: ListField;
        NumberField: NumberField;
        ArrayField: ArrayField;
    };
    /**
     * Create a new model so that the html inteface can be created and for validating incomming data against.
     * details at https://www.ceddlbyexample.com/data-models
     */
    create(modelConfig: ModelConfig): Model;
}

export interface Eventbus {
    /**
     * Remove a specific callback from an event, or remove all callbacks from an
     * event by not passing a function and scope. When removing bound functions
     * you must also pass the correct scope.
     */
    off(name: string, callback: (...args: any[]) => void, scope?: any): void;
    /**
     * Adds a listener to be invoked when events of the specified type are
     * emitted. An optional calling context may be provided. The data arguments
     * emitted will be passed to the listener function.
     */
    on(name: string, callback: (...args: any[]) => void, scope?: any): void;
    /**
     * Similar to on, except that the listener is removed after it is
     * invoked once.
     */
    once(name: string, callback: (...args: any[]) => void, scope?: any): void;
    /**
     * Emits an event of the given type with the given data. All handlers of that
     * particular type will be notified. Arbitrary arguments can be passed
     * in many forms and will be forwarded to the listeners
     * @example
     *   eventbus.on('someEvent', function(message) {
     *     console.log(message);
     *   });
     *
     *   eventbus.emit('someEvent', 'abc'); // logs 'abc'
     */
    emit(name: string, ...args: any[]): void;
}
