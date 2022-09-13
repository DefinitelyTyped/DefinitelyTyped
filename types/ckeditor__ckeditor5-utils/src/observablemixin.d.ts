import { Emitter } from './emittermixin';

export interface BindChain {
    to<O1 extends Observable, K1 extends keyof O1>(
        observable1: O1,
        key1?: K1,
        callback?: (value: O1[K1]) => unknown,
    ): void;
    to<O1 extends Observable, K1 extends keyof O1, O2 extends Observable, K2 extends keyof O2>(
        observable1: O1,
        key1: K1,
        observable2: O2,
        key2: K2,
        callback: (value1: O1[K1], value2: O2[K2]) => unknown,
    ): void;
    to<
        O1 extends Observable,
        K1 extends keyof O1,
        O2 extends Observable,
        K2 extends keyof O2,
        O3 extends Observable,
        K3 extends keyof O3,
    >(
        observable1: O1,
        key1: K1,
        observable2: O2,
        key2: K2,
        observable3: O3,
        key3: K3,
        callback: (value1: O1[K1], value2: O2[K2], value3: O3[K3]) => unknown,
    ): void;
    to<
        O1 extends Observable,
        K1 extends keyof O1,
        O2 extends Observable,
        K2 extends keyof O2,
        O3 extends Observable,
        K3 extends keyof O3,
        O4 extends Observable,
        K4 extends keyof O4,
    >(
        observable1: O1,
        key1: K1,
        observable2: O2,
        key2: K2,
        observable3: O3,
        key3: K3,
        observable4: O4,
        key4: K4,
        callback: (value1: O1[K1], value2: O2[K2], value3: O3[K3], value4: O4[K4]) => unknown,
    ): void;
    to<
        O1 extends Observable,
        K1 extends keyof O1,
        O2 extends Observable,
        K2 extends keyof O2,
        O3 extends Observable,
        K3 extends keyof O3,
        O4 extends Observable,
        K4 extends keyof O4,
        O5 extends Observable,
        K5 extends keyof O5,
    >(
        observable1: O1,
        key1: K1,
        observable2: O2,
        key2: K2,
        observable3: O3,
        key3: K3,
        observable4: O4,
        key4: K4,
        observable5: O5,
        key5: K5,
        callback: (value1: O1[K1], value2: O2[K2], value3: O3[K3], value4: O4[K4], value5: O5[K5]) => unknown,
    ): void;

    toMany<O extends Observable, K extends keyof O>(
        observables: O[],
        key: K,
        callback: (...values: Array<O[K]>) => void,
    ): void;
}

export interface Observable extends Emitter {
    /**
     * Creates and sets the value of an observable property of this object. Such a property becomes a part
     * of the state and is observable.
     *
     * It accepts also a single object literal containing key/value pairs with properties to be set.
     *
     * This method throws the `observable-set-cannot-override` error if the observable instance already
     * has a property with the given property name. This prevents from mistakenly overriding existing
     * properties and methods, but means that `foo.set( 'bar', 1 )` may be slightly slower than `foo.bar = 1`.
     *
     */
    set(...args: [option: Record<string, unknown>] | [name: string, value: unknown] | [name: string]): void;
    /**
     * Binds {@link #set observable properties} to other objects implementing the
     * {@link module:utils/observablemixin~Observable} interface.
     *
     * Read more in the {@glink framework/guides/deep-dive/observables#property-bindings dedicated guide}
     * covering the topic of property bindings with some additional examples.
     *
     * Consider two objects: a `button` and an associated `command` (both `Observable`).
     *
     * A simple property binding could be as follows:
     *
     *    button.bind( 'isEnabled' ).to( command, 'isEnabled' );
     *
     * or even shorter:
     *
     *    button.bind( 'isEnabled' ).to( command );
     *
     * which works in the following way:
     *
     * * `button.isEnabled` **instantly equals** `command.isEnabled`,
     * * whenever `command.isEnabled` changes, `button.isEnabled` will immediately reflect its value.
     *
     * **Note**: To release the binding, use {@link module:utils/observablemixin~Observable#unbind}.
     *
     * You can also "rename" the property in the binding by specifying the new name in the `to()` chain:
     *
     *    button.bind( 'isEnabled' ).to( command, 'isWorking' );
     *
     * It is possible to bind more than one property at a time to shorten the code:
     *
     *    button.bind( 'isEnabled', 'value' ).to( command );
     *
     * which corresponds to:
     *
     *    button.bind( 'isEnabled' ).to( command );
     *    button.bind( 'value' ).to( command );
     *
     * The binding can include more than one observable, combining multiple data sources in a custom callback:
     *
     *    button.bind( 'isEnabled' ).to( command, 'isEnabled', ui, 'isVisible',
     *    	( isCommandEnabled, isUIVisible ) => isCommandEnabled && isUIVisible );
     *
     * Using a custom callback allows processing the value before passing it to the target property:
     *
     *    button.bind( 'isEnabled' ).to( command, 'value', value => value === 'heading1' );
     *
     * It is also possible to bind to the same property in an array of observables.
     * To bind a `button` to multiple commands (also `Observables`) so that each and every one of them
     * must be enabled for the button to become enabled, use the following code:
     *
     *    button.bind( 'isEnabled' ).toMany( [ commandA, commandB, commandC ], 'isEnabled',
     *    	( isAEnabled, isBEnabled, isCEnabled ) => isAEnabled && isBEnabled && isCEnabled );
     *
     */
    bind(...bindProperties: string[]): BindChain;
    /**
     * Removes the binding created with {@link #bind}.
     *
     *    // Removes the binding for the 'a' property.
     *    A.unbind( 'a' );
     *
     *    // Removes bindings for all properties.
     *    A.unbind();
     */
    unbind(...unbindProperties: string[]): void;
    /**
     * Turns the given methods of this object into event-based ones. This means that the new method will fire an event
     * (named after the method) and the original action will be plugged as a listener to that event.
     *
     * Read more in the {@glink framework/guides/deep-dive/observables#decorating-object-methods dedicated guide}
     * covering the topic of decorating methods with some additional examples.
     *
     * Decorating the method does not change its behavior (it only adds an event),
     * but it allows to modify it later on by listening to the method's event.
     *
     * For example, to cancel the method execution the event can be {@link module:utils/eventinfo~EventInfo#stop stopped}:
     *
     *    class Foo {
     *    	constructor() {
     *    		this.decorate( 'method' );
     *    	}
     *
     *    	method() {
     *    		console.log( 'called!' );
     *    	}
     *    }
     *
     *    const foo = new Foo();
     *    foo.on( 'method', ( evt ) => {
     *    	evt.stop();
     *    }, { priority: 'high' } );
     *
     *    foo.method(); // Nothing is logged.
     *
     *
     * **Note**: The high {@link module:utils/priorities~PriorityString priority} listener
     * has been used to execute this particular callback before the one which calls the original method
     * (which uses the "normal" priority).
     *
     * It is also possible to change the returned value:
     *
     *    foo.on( 'method', ( evt ) => {
     *    	evt.return = 'Foo!';
     *    } );
     *
     *    foo.method(); // -> 'Foo'
     *
     * Finally, it is possible to access and modify the arguments the method is called with:
     *
     *    method( a, b ) {
     *    	console.log( `${ a }, ${ b }`  );
     *    }
     *
     *    // ...
     *
     *    foo.on( 'method', ( evt, args ) => {
     *    	args[ 0 ] = 3;
     *
     *    	console.log( args[ 1 ] ); // -> 2
     *    }, { priority: 'high' } );
     *
     *    foo.method( 1, 2 ); // -> '3, 2'
     */
    decorate(methodName: string): void;
}

declare const ObservableMixin: Observable;

export default ObservableMixin;
