// Type definitions for Fluxible Addons for React 0.2.0
// Project: https://github.com/yahoo/fluxible-addons-react
// Definitions by: Umidbek Karimov <https://github.com/umidbek.karimov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>
/// <reference path="../fluxible/fluxible.d.ts"/>
/// <reference path="../immutable/immutable.d.ts"/>
/// <reference path="../dispatchr/dispatchr.d.ts"/>

declare namespace fluxible_addons_react {
	interface BatchedUpdatePlugin {
		name: string;
		plugContext(): {
			plugActionContext: Object
		};
	}

	interface IGetStateFromStores<TState> {
		(context: fluxible.ComponentContext, props: Object): TState;
	}

	interface Action<T> {
		(context: fluxible.ActionContext, payload: T): void;
	}

	interface IConnectToStoresContext {
		getStore: __Dispatchr.getStore;
		executeAction<T>(action: Action<T>, payload: T): void;
	}
}

declare module 'fluxible-addons-react' {
	export function createBatchedUpdatePlugin(options: Object): string;
	/**
	* Registers change listeners and retrieves state from stores using the `getStateFromStores`
	* method. Concept provided by Dan Abramov via
	* https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
	*
	* Example:
	*   connectToStores(Component, [FooStore], {
	*       FooStore: function (store, props) {
	*           return {
	*               foo: store.getFoo()
	*           }
	*       }
	*   })
	*
	* Also supports the decorator pattern:
	*   @connectToStores([FooStore],  {
	*       FooStore: function (store, props) {
	*           return {
	*               foo: store.getFoo()
	*           }
	*       }
	*   })
	*   class ConnectedComponent extends React.Component {
	*       render() {
	*           return <div/>;
	*       }
	*   }
	// *
	* @method connectToStores
	* @param {React.Component} [Component] component to pass state as props to.
	* @param {array} stores List of stores to listen for changes
	* @param {function} getStateFromStores function that receives all stores and should return
	*      the full state object. Receives `stores` hash and component `props` as arguments
	* @returns {React.Component} or {Function} if using decorator pattern
	*/
	export function connectToStores<IStoreProps, IContext, IProps>(
		stores: Array<string | Function>,
		getStateFromStores: (context: fluxible_addons_react.IConnectToStoresContext, props: IProps) => IStoreProps,
		customContextTypes?: IContext
	): ClassDecorator;
	
	/**
	* Creates an instance of the app level component with given props and a proper component
	* context.
	* @param {FluxibleContext} fluxibleContext
	* @param {Object} props
	* @return {ReactElement}
	*/
	export function createElementWithContext<TProps>(fluxibleContext: fluxible.FluxibleContext, props: TProps): __React.ReactElement<TProps>;

	interface FluxibleComponentProps {
		context: Object
	}

	export class FluxibleComponent extends __React.Component<FluxibleComponentProps, any> { }

	interface FluxibleMixinContextTypes extends __React.ValidationMap<any> {
		executeAction: __React.Validator<Function>,
		getStore: __React.Validator<Function>
	}

	export interface FluxibleMixin extends __React.Mixin<any, any> {
		contextTypes: __React.ValidationMap<any>,
										
		/**
		* Calls an action
		* @method executeAction
		*/
		executeAction(): void;
		/**
	   * Gets a store instance from the context
	   * @param {Function|String} store The store to get
	   * @returns {Object}
	   * @method getStore
	   */
		getStore: __Dispatchr.getStore;
		/**
		* Gets from the context all store instances required by this component
		* @returns {Object}
		* @method getStores
		*/
		getStores(): Array<__Dispatchr.Store>;
		/**
		* Gets a store-change handler from the component
		* @param {Function|String} handler The handler to get
		* @returns {Function}
		* @method getHandler
		*/
		getHandler(handler: string | Function): Function;
		/**
		* Gets a listener descriptor for a store and store-change handler
		* @param {Function|String} store Store
		* @param {Function|String} handler The handler function or method name
		* @returns {Object}
		* @method getListener
		*/
		getListener(store: string | __Dispatchr.Store, handler: string | Function): Array<Function>;
		/**
		* Gets all store-change listener descriptors from the component
		* @returns {Object}
		* @method getListeners
		*/
		getListeners(): Array<Function>;
	}
	
	
	/**
	* Provides context prop to all children as React context
	*
	* Example:
	*   var WrappedComponent = provideContext(Component, {
	*       foo: React.PropTypes.string
	*   });
	*
	* Also supports the decorator pattern:
	*   @provideContext({
	*       foo: React.PropTypes.string
	*   })
	*   class ConnectedComponent extends React.Component {
	*       render() {
	*           return <div/>;
	*       }
	*   }
	*
	* @method provideContext
	* @param {React.Component} [Component] component to wrap
	* @param {object} customContextTypes Custom contextTypes to add
	* @returns {React.Component} or {Function} if using decorator pattern
	*/
	export function provideContext<IContext>(
		customContextTypes?: IContext
	): ClassDecorator;
}
