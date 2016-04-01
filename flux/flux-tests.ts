/// <reference path="flux.d.ts" />
﻿/// <reference path="../react/react.d.ts" />

import flux = require('flux')
import FluxUtils = require('flux/utils')
import React = require('react')

var Component = React.Component
var Container = FluxUtils.Container

//
// Basic dispatcher usage
//

var basicDispatcher = new flux.Dispatcher<any>()

// register(callback: (payload: any) => void): string
var id: string = basicDispatcher.register((payload) => {
    // payload is type: any
    payload.anything
})

// unregister(id: string): void
basicDispatcher.unregister(id)

// waitFor(ids: string[]): void 
basicDispatcher.waitFor([id])

// dispatch(payload: any): void 
basicDispatcher.dispatch({ msg: 'hello' })

// isDispatching(): boolean
var dispatcherIsDispatching: boolean = basicDispatcher.isDispatching()

//
// Typed payload
//

enum ActionSource { Server, View }
enum ActionType { Create, Update, Delete }

interface Action {
    source: ActionSource
    type: ActionType
    data: Object
}

var typedDispatcher = new flux.Dispatcher<Action>()

var typedPayload: Action

var typedStore = {
    dispatcherID: typedDispatcher.register((payload) => {
        typedPayload = payload
    })
}

typedDispatcher.dispatch(typedPayload)

//
// Derived dispatcher
//

class CustomDispatcher extends flux.Dispatcher<Action> {

    // Dispatch an action with server as source
    handleServerAction(type: ActionType, data: Object) {
        this.dispatch({
            source: ActionSource.Server,
            type: type,
            data: data,
        })
    }

    // Dispatch an action with view as source
    handleViewAction(type: ActionType, data: Object) {
        this.dispatch({
            source: ActionSource.View,
            type: type,
            data: data,
        })
    }
}

var customDispatcher = new CustomDispatcher()

export = customDispatcher


// Sample Reduce Store
class CounterStore extends FluxUtils.ReduceStore<number> {
  getInitialState(): number {
    return 0;
  }

  reduce(state: number, action: any): number {
    switch (action.type) {
      case 'increment':
        return state + 1;

      case 'square':
        return state * state;

      default:
        return state;
    }
  }
}

const Store = new CounterStore(basicDispatcher);

// Sample Flux container with CounterStore
class CounterContainer extends Component<any, any> {
  static getStores() {
    return [Store];
  }

  static calculateState(prevState: any) {
    return {
      counter: Store.getState(),
    };
  }

  render() {
    return this.state.counter;
  }
}

const container = Container.create(CounterContainer);
