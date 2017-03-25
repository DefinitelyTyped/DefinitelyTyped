import { createHistory, createLocation, useBasename, useBeforeUnload, useQueries } from 'history'

import { getUserConfirmation } from 'history/lib/DOMUtils'

interface Promise<T> {
    then<TResult>(onfulfilled?: (value: T) => TResult): Promise<TResult>;
}

let doSomethingAsync: () => Promise<Function>;
let input = { value: "" };

{
    let history = createHistory()

    // Listen for changes to the current location. The
    // listener is called once immediately.
    let unlisten = history.listen(function(location) {
        console.log(location.pathname)
    })

    // When you're finished, stop the listener.
    unlisten()

    // Push a new entry onto the history stack.
    history.push('/home')

    // Replace the current entry on the history stack.
    history.replace('/profile')

    // Push a new entry with state onto the history stack.
    history.push({
        pathname: '/about',
        search: '?the=search',
        state: { some: 'state' }
    });

    // Change just the search on an existing location.
    //history.push({ ...location, search: '?the=other+search' })

    // Go back to the previous history entry. The following
    // two lines are synonymous.
    history.go(-1)
    history.goBack()

    let href = history.createHref('/the/path')
}

{
    let history = createHistory()

    // Pushing a path string.
    history.push('/the/path')

    // Omitting location state when pushing a location descriptor.
    history.push({ pathname: '/the/path', search: '?the=search' })

    // Extending an existing location object.
    //history.push({ ...location, search: '?other=search' })

    let location = createLocation('/a/path?a=query', { the: 'state' })

    location = history.createLocation('/a/path?a=query', { the: 'state' })
}

{
    let history = createHistory()
    history.listenBefore(function(location) {
        if (input.value !== '')
            return 'Are you sure you want to leave this page?'
    })

    history.listenBefore(function(location, callback) {
        doSomethingAsync().then(callback)
    })
}

{
    let history = createHistory({
        getUserConfirmation(message, callback) {
            callback(window.confirm(message)) // The default behavior
        }
    })
}

{
    let history = useBeforeUnload(createHistory)()

    history.listenBeforeUnload(function() {
        return 'Are you sure you want to leave this page?'
    })
}

{
    let history = useQueries(createHistory)()

    history.listen(function(location) {
        console.log(location.query)
    })
}

{
    let history = useQueries(createHistory)({
        parseQueryString: function(queryString) {
            // TODO: return a parsed version of queryString
            return {};
        },
        stringifyQuery: function(query) {
            // TODO: return a query string created from query
            return "";
        }
    })

    history.createPath({ pathname: '/the/path', query: { the: 'query' } })
    history.push({ pathname: '/the/path', query: { the: 'query' } })
}

{
    // Run our app under the /base URL.
    let history = useBasename(createHistory)({
        basename: '/base'
    })

    // At the /base/hello/world URL:
    history.listen(function(location) {
        console.log(location.pathname) // /hello/world
        console.log(location.basename) // /base
    })

    history.createPath('/the/path') // /base/the/path
    history.push('/the/path') // push /base/the/path
}
