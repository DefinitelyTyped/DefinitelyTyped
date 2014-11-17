// Type definitions for Flux
// Project: http://facebook.github.io/flux/
// Definitions by: Steve Baker <https://github.com/stkb/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'flux' {

    /**
    * Dispatcher class
    * Create an instance to use throughout the application.
    * Or extend it to create a derived dispatcher class.
    *
    * Specify a type in the 'TPayload' generic argument to use strongly-typed payloads, 
    * otherwise specify 'any'
    *
    * Examples:
    *     var dispatcher = new flux.Dispatcher<any>()
    *     var typedDispatcher = new flux.Dispatcher<MyCustomActionType>()
    *     class DerivedDispatcher extends flux.Dispatcher<MyCustomActionType> { }
    */
    export class Dispatcher<TPayload> {

        /**
        * Create an instance of the Dispatcher class to use throughout the application.
        *
        * Specify a type in the 'TPayload' generic argument to use strongly-typed payloads, 
        * otherwise specify 'any'
        *
        * Examples:
        *     var dispatcher = new flux.Dispatcher<any>()
        *     var typedDispatcher = new flux.Dispatcher<MyCustomActionType>()
        */
        constructor()

        /**
        * Registers a callback that will be invoked with every payload sent to the dispatcher.
        * Returns a string token to identify the callback to be used with waitFor() or unregister.
        */
        register(callback: (payload: TPayload) => void): string
        
        /**
        * Unregisters a callback with the given ID token
        */
        unregister(id: string): void

        /**
        * Waits for the callbacks with the specified IDs to be invoked before continuing execution
        * of the current callback. This method should only be used by a callback in response 
        * to a dispatched payload.
        */
        waitFor(IDs: string[]): void 

        /**
        * Dispatches a payload to all registered callbacks
        */
        dispatch(payload: TPayload): void 

        /**
        * Gets whether the dispatcher is currently dispatching
        */
        isDispatching(): boolean
    }
}