import * as React from 'react'
import { compose, createStore, Reducer, Store, StoreEnhancerStoreCreator } from 'redux'
import { Provider } from 'react-redux'
import { createDevTools, persistState } from 'redux-devtools'

declare var reducer: Reducer<any>

class DevToolsMonitor extends React.Component<any, any> {
}

const DevTools = createDevTools(
  <DevToolsMonitor />
)

const finalCreateStore = compose(
  DevTools.instrument(),
  persistState('test-session')
)(createStore)

const store: Store<any> = finalCreateStore(reducer)

class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <DevTools />
      </Provider>
    )
  }
}
