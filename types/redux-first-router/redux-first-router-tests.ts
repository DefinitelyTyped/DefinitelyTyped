import { connectRoutes, History, LocationState } from 'redux-first-router'
import {
  createStore,
  applyMiddleware,
  Middleware,
  MiddlewareAPI,
  Store,
  Dispatch,
  compose,
  Action
} from 'redux'

declare var console: any

declare var history: History

const routesMap = {
  HOME: '/'
}

const {
  reducer,
  middleware,
  enhancer
} = connectRoutes(history, routesMap)

const logger: Middleware = (store: MiddlewareAPI<LocationState>) => (next: Dispatch<LocationState>) => (action: Action) => {
  console.log(`Dispatching action ${action.type}...`)

  next(action)
}

const composedMiddleware = applyMiddleware(middleware, logger)

const store = createStore(reducer, compose(enhancer, composedMiddleware))

store.getState()
