import * as Dispatcher from "./Dispatcher";
import * as fbEmitter from "fbemitter";

declare namespace FluxStore { }

/**
 * This class represents the most basic functionality for a FluxStore. Do not
 * extend this store directly; instead extend FluxReduceStore when creating a
 * new store.
 */
declare abstract class FluxStore<TPayload> {
  /**
   * Constructs and registers an instance of this store with the given dispatcher.
   */
  constructor(dispatcher: Dispatcher<TPayload>);

  /**
   * Adds a listener to the store, when the store changes the given callback will be called.
   * A token is returned that can be used to remove the listener.
   * Calling the remove() function on the returned token will remove the listener.
   */
  addListener(callback: () => void): fbEmitter.EventSubscription;

  /**
   * Returns the dispatcher this store is registered with.
   */
  getDispatcher(): Dispatcher<TPayload>;

  /**
   * Returns the dispatch token that the dispatcher recognizes this store by.
   * Can be used to waitFor() this store.
   */
  getDispatchToken(): string;

  /**
   * Ask if a store has changed during the current dispatch.
   * Can only be invoked while dispatching.
   * This can be used for constructing derived stores that depend on data from other stores.
   */
  hasChanged(): boolean;

  /**
   * Emit an event notifying all listeners that this store has changed.
   * This can only be invoked when dispatching.
   * Changes are de-duplicated and resolved at the end of this store's __onDispatch function.
   */
  protected __emitChange(): void;

  /**
   * This method encapsulates all logic for invoking __onDispatch. It should
   * be used for things like catching changes and emitting them after the
   * subclass has handled a payload.
   */
  protected __invokeOnDispatch(payload: TPayload): void;

  /**
   * Subclasses must override this method.
   * This is how the store receives actions from the dispatcher.
   * All state mutation logic must be done during this method.
   */
  protected __onDispatch(payload: TPayload): void;

  protected __changed: boolean;

  protected __changeEvent: string;

  protected __className: string;

  protected __dispatcher: Dispatcher<TPayload>;

  protected __emitter: fbEmitter.EventEmitter;
}

export = FluxStore;
