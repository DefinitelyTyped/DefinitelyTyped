import * as React from 'react'
import { compose, createStore, Reducer, Store, GenericStoreEnhancer } from 'redux'
import { Provider } from 'react-redux'
import { createDevTools, persistState } from 'redux-devtools'

declare var reducer: Reducer<any>

class DevToolsMonitor extends React.Component {
}

const DevTools = createDevTools(
  <DevToolsMonitor />
)

const storeEnhancer = compose(
  DevTools.instrument(),
  persistState('test-session')
) as GenericStoreEnhancer

const finalCreateStore = storeEnhancer(createStore)

const store = finalCreateStore(reducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DevTools />
      </Provider>
    )
  }
}
