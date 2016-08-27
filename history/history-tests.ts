import { createHistory, createHashHistory, useBeforeUnload, useQueries, useBasename } from 'history'

interface Promise<T> {
  then<TResult>(onfulfilled?: (value: T) => TResult): Promise<TResult>;
}

let doSomethingAsync: () => Promise<Function>;
let input = { value: "" };

{
  const history = createHistory()

  // Get the current location
  const location = history.getCurrentLocation()

  // Listen for changes to the current location
  const unlisten = history.listen(location => {
    console.log(location.pathname)
  })

  // Push a new entry onto the history stack
  history.push({
    pathname: '/the/path',
    search: '?a=query',

    // Extra location-specific state may be kept in session
    // storage instead of in the URL query string!
    state: { the: 'state' }
  })

  // When you're finished, stop the listener
  unlisten()
}

{
  const history = createHistory()

  // Get the current location.
  const location = history.getCurrentLocation()

  // Listen for changes to the current location.
  const unlisten = history.listen(location => {
    console.log(location.pathname)
  })

  // Push a new entry onto the history stack.
  history.push('/home')

  // Replace the current entry on the history stack.
  history.replace('/profile')

  // Push a new entry with state onto the history stack.
  // state must be a JSON-serializable object (no Function
  // or Date values).
  history.push({
    pathname: '/about',
    search: '?the=search',
    state: { some: 'state' }
  })

  // Push a new entry onto the history stack that changes
  // only the search on an existing location.
  // history.push({ ...location, search: '?the=other+search' })

  // Go back to the previous history entry. The following
  // two lines are synonymous.
  history.go(-1)
  history.goBack()

  // When you're finished, stop the listener.
  unlisten()

  const href = history.createHref('/the/path')
}

{
  const history = createHistory()

  // Pushing a path string.
  history.push('/the/path')

  // Omitting location state when pushing a location descriptor.
  history.push({ pathname: '/the/path', search: '?the=search' })

  // Extending an existing location object.
  // history.push({ ...location, search: '?other=search' })

  const location = history.createLocation({
    pathname: '/a/path',
    state: { the: 'state' }
  })
}

{
  const history = createHistory()

  history.listenBefore(location => {
    if (input.value !== '')
      return 'Are you sure you want to leave this page?'
  })

  history.listenBefore((location, callback) => {
    doSomethingAsync().then(callback)
  })
}

{
  const history = createHistory({
    getUserConfirmation(message, callback) {
      callback(window.confirm(message)) // The default behavior
    }
  })
}

{
  const history = useBeforeUnload(createHistory)()

  history.listenBeforeUnload(() => {
    return 'Are you sure you want to leave this page?'
  })
}

{
  const history = useQueries(createHistory)()

  history.listen(function (location) {
    console.log(location.query)
  })
}

{
  const history = useQueries(createHistory)({
    parseQueryString: function (queryString) {
      // TODO: return a parsed version of queryString
      return {}
    },
    stringifyQuery: function (query) {
      // TODO: return a query string created from query
      return ''
    }
  })

  history.createPath({ pathname: '/the/path', query: { the: 'query' } })
  history.push({ pathname: '/the/path', query: { the: 'query' } })
}

{
  // Run our app under the /base URL.
  const history = useBasename(createHistory)({
    basename: '/base'
  })

  // At the /base/hello/world URL:
  history.listen(location => {
    console.log(location.pathname) // /hello/world
    console.log(location.basename) // /base
  })

  history.createPath('/the/path') // /base/the/path
  history.push('/the/path') // push /base/the/path
}

{
  // Use _key instead of _k.
  const history = createHashHistory({
    queryKey: '_key'
  })
}

{
  const history = createHashHistory({
    hashType: 'hashbang'
  })
}
