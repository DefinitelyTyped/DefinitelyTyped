import * as React from 'react'
import { compose, createStore, Reducer, Store, StoreEnhancer } from 'redux'
import { Provider } from 'react-redux'
import { createDevTools, persistState } from 'redux-devtools'

declare var reducer: Reducer

class DevToolsMonitor extends React.Component {
}

const DevTools = createDevTools(
  <DevToolsMonitor />
)

const storeEnhancer = compose(
  DevTools.instrument(),
  persistState('test-session')
) as StoreEnhancer

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
