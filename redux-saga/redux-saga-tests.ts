


import sagaMiddleware, {
  storeIO,
  runSaga,
  Saga,
  SagaCancellationException,
  takeEvery,
  takeLatest,
  isCancelError
} from 'redux-saga'

import {
  take,
  put,
  race,
  call,
  apply,
  fork,
  select,
  cancel,
} from 'redux-saga/effects'

import {applyMiddleware, createStore} from 'redux';

declare const delay: (ms: number) => Promise<any>;
declare const fetchApi: (url: string) => Promise<any>;

namespace GettingStarted {

  const incrementAsync:Saga = function* incrementAsync() {

    while(true) {

      // wait for each INCREMENT_ASYNC action
      const nextAction = yield take('INCREMENT_ASYNC')

      // delay is a sample function
      // return a Promise that resolves after (ms) milliseconds
      yield delay(1000)

      // dispatch INCREMENT_COUNTER
      yield put( {type: 'INCREMENT_COUNTER'} )
    }

  }

  const createStoreWithSaga = applyMiddleware(
    // ...,
    sagaMiddleware(incrementAsync)
  )(createStore)

  export default function configureStore(initialState) {
    return createStoreWithSaga((state: any) => state, initialState)
  }
}

namespace EffectCombinators {
  const fetchPostsWithTimeout:Saga = function* fetchPostsWithTimeout() {
    while( yield take('FETCH_POSTS') ) {
      // starts a race between 2 effects
      const {posts, timeout} = yield race({
        posts   : call([this, fetchApi], '/posts'),
        timeout : call(delay, 1000)
      })

      if(posts)
        put( {type: 'RECEIVE_POSTS', posts} )
      else
        put( {type: 'TIMEOUT_ERROR'} )
    }
  }
}


namespace SequencingSagasViaYield {
  function showScore(score) {
    return {
      type: 'SHOW_SCORE', score
    }
  }

  function* playLevelOne(getState) { yield 1 }

  function* playLevelTwo(getState) { yield 2 }

  function* playLevelThree(getState) { yield 3 }

  const game: Saga = function* game(getState) {

    const score1 = yield* playLevelOne(getState)
    yield put(showScore(score1))

    const score2 = yield* playLevelTwo(getState)
    yield put(showScore(score2))

    const score3 = yield* playLevelThree(getState)
    yield put(showScore(score3))

  }
}


namespace ComposingSagas {
  function* fetchProducts() {
    yield put( {type: 'REQUEST_PRODUCTS'} )
    const products = yield call(fetchApi, '/products')
    yield put( {type: 'RECEIVE_PRODUCTS', products } )
  }

  function* watchFetch() {
    while ( yield take('FETCH_PRODUCTS') ) {
      yield call(fetchProducts) // waits for the fetchProducts task to
                                // terminate
    }
  }
}


namespace NonBlockingCallsWithForkJoin {
  function* fetchPosts() {
    yield put( {type: 'REQUEST_POSTS'} )
    const posts = yield call(fetchApi, '/posts')
    yield put( {type: 'RECEIVE_POSTS', posts} )
  }

  function* watchFetch() {
    while ( yield take('FETCH_POSTS') ) {
      yield fork(fetchPosts) // non blocking call
    }
  }
}


namespace TaskCancellation {
  declare const someApi: () => any;

  function* bgSync() {
    try {
      while(true) {
        yield put({type: 'REQUEST_START'})
        const result = yield apply(this, someApi)
        yield put({type: 'REQUEST_SUCCESS', result})
        yield call(delay, 5000)
      }
    } catch(error) {
      if(error instanceof SagaCancellationException && isCancelError(error))
        yield put({type: 'REQUEST_FAILURE', message: 'Sync cancelled!'})
    }
  }

  function* main() {
    while( yield take('START_BACKGROUND_SYNC') ) {
      // starts the task in the background
      const bgSyncTask = yield fork(bgSync)

      // wait for the user stop action
      yield take('STOP_BACKGROUND_SYNC')
      // user clicked stop. cancel the background task
      // this will throw a SagaCancellationException into the forked bgSync
      // task
      yield cancel(bgSyncTask)
    }
  }
}


namespace DynamicallyStartingSagasWithRunSaga {
  const store = createStore((state: any, action: any) => state);

  function* serverSaga(getState) {
    yield getState()
  }

  runSaga(
    serverSaga(store.getState),
    storeIO(store)
  )
}

namespace DynamicallyStartingSagasWithMiddleware {
  function* startupSaga() {
  }

  function* dynamicSaga() {
  }

  sagaMiddleware(startupSaga).run(dynamicSaga)
}

namespace TestHelpers {
  function* watchAndLog(getState) {
    yield* takeEvery('*', function* logger(action) {
      console.log('action', action)
    })
  }

  function* fetchUser(action) {
  }

  function* watchLastFetchUser() {
    yield* takeLatest('USER_REQUESTED', fetchUser)
  }
}

namespace AccessCurrentState {
  export const getCart = state => state.cart;

  function* checkout() {
    const cart = yield select(getCart)
  }
}
