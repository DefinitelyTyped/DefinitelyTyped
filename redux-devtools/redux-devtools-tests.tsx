/// <reference path="../react/react.d.ts" />
/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react-redux/react-redux.d.ts" />
/// <reference path="../redux-devtools-dock-monitor/redux-devtools-dock-monitor.d.ts" />
/// <reference path="../redux-devtools-log-monitor/redux-devtools-log-monitor.d.ts" />
/// <reference path="redux-devtools.d.ts" />

import * as React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createDevTools, persistState } from 'redux-devtools'
import * as LogMonitor from 'redux-devtools-log-monitor'
import * as DockMonitor from 'redux-devtools-dock-monitor'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
    <LogMonitor />
  </DockMonitor>
)

const finalCreateStore = compose(
  DevTools.instrument(),
  persistState('test-session')
)(createStore)

class App extends React.Component<any, any> {
  render() {
    return (
      <Provider>
        <DevTools />
      </Provider>
    )
  }
}