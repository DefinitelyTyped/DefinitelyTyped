import { connectRoutes, History, LocationState } from 'redux-first-router'
import {
  createStore,
  applyMiddleware,
  Middleware,
  MiddlewareAPI,
  Store,
  Dispatch,
  compose,
  Action,
  GenericStoreEnhancer,
  StoreEnhancerStoreCreator
} from 'redux'

declare var console: any
declare var history: History

type State = LocationState
type StoreCreator = StoreEnhancerStoreCreator<State>

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

const storeEnhancer = compose<StoreCreator, StoreCreator, StoreCreator>(enhancer, composedMiddleware)

const store = createStore(reducer, storeEnhancer)
