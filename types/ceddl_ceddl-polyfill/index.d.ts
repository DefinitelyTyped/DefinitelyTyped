// Type definitions for @ceddl/ceddl-polyfill 0.9.5
// Project: https://www.ceddlbyexample.com/
// Definitions by: Roland Broekema <https://github.com/broekema41>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

declare module "@ceddl/ceddl-polyfill" {
    export default Ceddl;

    const Ceddl: {

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
         * @param name
         * @param data
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
        modelFactory: typeof ModelFactory;
        /**
         * Message bus to enable you to de-couple your application's
         * components.
         */
        eventbus: typeof Eventbus;
    }

    /**
     * Details not for implementer.
     */
    class Model {}
    interface StringField {}
    interface BooleanField {}
    interface ModelField {}
    interface ListField {}
    interface NumberField {}
    interface ArrayField {}


    export interface ModelConfig {
        key: string;
        extends?: string;
        fields: {
            [key: string]: {
                type: StringField | BooleanField | ModelField | ListField | NumberField | ArrayField;
                foreignModel?: string;
                required: boolean;
                pattern?: string;
            }
        },
    }

    const ModelFactory: {
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
         *
         * @param {Object} modelArgs
         * @param {string} modelArgs.key The model identifier
         * @param {Array.<{type: Field, foreignModel?: Model, required: boolean}>} modelArgs.fields The model's fields
         * @returns {Model} The created model
         * @memberof ModelFactory
         */
        create(modelConfig: ModelConfig): Model;
    }


    const Eventbus: {
        /**
         * Remove a specific callback from an event, or remove all callbacks from an
         * event by not passing a function and scope. When removing bound functions
         * you must also pass the correct scope.
         * @param {String} name Name of the event remove listeners from.
         * @param {Function?} callback Function to remove from callback list.
         * @param {any?} scope Scope the supplied callback was bound to.
         */
        off(name: string, callback: Function | null, scope?: any | null): void;
        /**
         * Adds a listener to be invoked when events of the specified type are
         * emitted. An optional calling context may be provided. The data arguments
         * emitted will be passed to the listener function.
         *
         * @param {String} name - Name of the event to listen to
         * @param {Function} callback - Function to invoke when the specified event is
         *   emitted
         * @param {any?} scope - Optional context object to use when invoking the
         *   listener
         */
        on(name: string, callback: Function, scope?: any | null): void;
        /**
         * Similar to on, except that the listener is removed after it is
         * invoked once.
         *
         * @param {String} name - Name of the event to listen to
         * @param {Function} callback - Function to invoke only once when the
         *   specified event is emitted
         * @param {any?} scope - Optional context object to use when invoking the
         *   listener
         */
        once(name: string, callback: Function, scope?: any | null): void;
        /**
         * Emits an event of the given type with the given data. All handlers of that
         * particular type will be notified. Arbitrary arguments can be passed
         * in many forms and will be forwarded to the listeners
         *
         * @param {string} name - Name of the event to emit
         * @param {...any} args Arguments to pass through to the listeners.
         * @example
         *   eventbus.on('someEvent', function(message) {
         *     console.log(message);
         *   });
         *
         *   eventbus.emit('someEvent', 'abc'); // logs 'abc'
         */
        emit(name: string, ...args: any[]): void;
    }

}

