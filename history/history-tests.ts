import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory, createHashHistory, createMemoryHistory } from 'history'

{
  const history = createHistory()

  // Get the current location.
  const location = history.location

  // Listen for changes to the current location.
  const unlisten = history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state)
  })

  // Use push, replace, and go to navigate around.
  history.push('/home', { some: 'state' })

  // To stop listening, call the function returned from listen().
  unlisten()
}

{
  createBrowserHistory({
    basename: '',             // The base URL of the app (see below)
    forceRefresh: false,      // Set true to force full page refreshes
    keyLength: 6,             // The length of location.key
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
  })

  createMemoryHistory({
    initialEntries: [ '/' ],  // The initial URLs in the history stack
    initialIndex: 0,          // The starting index in the history stack
    keyLength: 6,             // The length of location.key
    // A function to use to confirm navigation with the user. Required
    // if you return string prompts from transition hooks (see below)
    getUserConfirmation: undefined
  })

  createHashHistory({
    basename: '',             // The base URL of the app (see below)
    hashType: 'slash',        // The hash type to use (see below)
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
  })
}

{
  const history = createHistory()

  history.listen((location, action) => {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
    console.log(`The last navigation action was ${action}`)
  })
}

{
  const history = createHistory()

  // Push a new entry onto the history stack.
  history.push('/home')

  // Push a new entry onto the history stack with a query string
  // and some state. Location state does not appear in the URL.
  history.push('/home?the=query', { some: 'state' })

  // If you prefer, use a single location-like object to specify both
  // the URL and state. This is equivalent to the example above.
  history.push({
    pathname: '/home',
    search: '?the=query',
    state: { some: 'state' }
  })

  // Go back to the previous history entry. The following
  // two lines are synonymous.
  history.go(-1)
  history.goBack()
}

{
  const history = createHistory()
  const input = { value: '' }

  // Register a simple prompt message that will be shown the
  // user before they navigate away from the current page.
  const unblock = history.block('Are you sure you want to leave this page?')

  // Or use a function that returns the message when it's needed.
  history.block((location, action) => {
    // The location and action arguments indicate the location
    // we're transitioning to and how we're getting there.

    // A common use case is to prevent the user from leaving the
    // page if there's a form they haven't submitted yet.
    if (input.value !== '')
      return 'Are you sure you want to leave this page?'
  })

  // To stop blocking transitions, call the function returned from block().
  unblock()
}

{
  const history = createHistory({
    getUserConfirmation(message, callback) {
      // Show some custom dialog to the user and call
      // callback(true) to continue the transiton, or
      // callback(false) to abort it.
      callback(true)
      callback(false)
    }
  })
}

{
  const history = createHistory({
    basename: '/the/base'
  })

  history.listen(location => {
    console.log(location.pathname) // /home
  })

  history.push('/home') // URL is now /the/base/home
}

{
  const history = createBrowserHistory({
    forceRefresh: true
  })
}

{
  const history = createHashHistory({
    hashType: 'slash' // the default
  })

  history.push('/home') // window.location.hash is #/home
}

{
  const history = createHashHistory({
    hashType: 'noslash' // Omit the leading slash
  })

  history.push('/home') // window.location.hash is #home
}

{
  const history = createHashHistory({
    hashType: 'hashbang' // Google's legacy AJAX URL format
  })

  history.push('/home') // window.location.hash is #!/home
}
