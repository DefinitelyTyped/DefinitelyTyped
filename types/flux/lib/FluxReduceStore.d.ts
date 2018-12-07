import Store = require("./FluxStore");

declare namespace FluxReduceStore { }

/**
 * This is the basic building block of a Flux application. All of your stores
 * should extend this class.
 */
declare abstract class FluxReduceStore<TState, TPayload> extends Store<TPayload> {
  /**
   * Getter that exposes the entire state of this store.
   * If your state is not immutable you should override this and not expose state directly.
   */
  getState(): TState;

  /**
   * Constructs the initial state for this store.
   * This is called once during construction of the store.
   */
  abstract getInitialState(): TState;

  /**
   * Reduces the current state, and an action to the new state of this store.
   * All subclasses must implement this method.
   * This method should be pure and have no side-effects.
   */
  abstract reduce(state: TState, action: TPayload): TState;

  /**
   * Checks if two versions of state are the same.
   * You do not need to override this if your state is immutable.
   */
  areEqual(one: TState, two: TState): boolean;
}

export = FluxReduceStore;
