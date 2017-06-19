import * as React from 'react'
import { compose, createStore, Reducer, Store, StoreEnhancerStoreCreator } from 'redux'
import { Provider } from 'react-redux'
import { createDevTools, persistState } from 'redux-devtools'

declare var reducer: Reducer<any>

class DevToolsMonitor extends React.Component<any> {
}

const DevTools = createDevTools(
  <DevToolsMonitor />
)

const finalCreateStore = compose(
  DevTools.instrument(),
  persistState('test-session')
)(createStore) as
// FIXME Remove as StoreEnhancerStoreCreator<Store<any>> in the future
// See https://github.com/reactjs/redux/pull/1936#issuecomment-251738892
// See Function composition challenge for type system https://github.com/Microsoft/TypeScript/issues/10247
// See https://github.com/Microsoft/TypeScript/issues/9949
StoreEnhancerStoreCreator<Store<any>>;

const store = finalCreateStore(reducer)

class App extends React.Component<any> {
  render() {
    return (
      <Provider store={store}>
        <DevTools />
      </Provider>
    )
  }
}
