import { createBrowserHistory, createMemoryHistory, createHashHistory, createLocation, Location, History, MemoryHistory } from 'history';
import * as LocationUtils from 'history/LocationUtils';
import * as PathUtils from 'history/PathUtils';
import * as DOMUtils from 'history/DOMUtils';
import * as ExecutionEnvironment from 'history/ExecutionEnvironment';

let input = { value: "" };

{
    let history: History<{some: 'state'}> = createBrowserHistory();

    // Listen for changes to the current location. The
    // listener is called once immediately.
    let unlisten = history.listen(function (location) {
        console.log(location.pathname);
    });

    // When you're finished, stop the listener.
    unlisten();

    // Push a new entry onto the history stack.
    history.push('/home');

    // Replace the current entry on the history stack.
    history.replace('/profile');

    // Push a new entry with state onto the history stack.
    history.push({
        pathname: '/about',
        search: '?the=search',
        state: { some: 'state' }
    });

    // Change just the search on an existing location.
    history.push({ pathname: location.pathname, search: '?the=other+search' });

    // Go back to the previous history entry. The following
    // two lines are synonymous.
    history.go(-1);
    history.goBack();

    let href = history.createHref({ pathname: '/the/path' });
}

{
    let history: MemoryHistory<{the: 'state'}> = createMemoryHistory();

    // Pushing a path string.
    history.push('/the/path');

    // Omitting location state when pushing a location descriptor.
    history.push({ pathname: '/the/path', search: '?the=search' });

    let location = createLocation('/a/path?a=query', { the: 'state' });

    // Extending an existing location object.
    history.push({ pathname: location.pathname, search: '?other=search' });

    if (history.canGo(-1)) {
        history.go(-1);
        history.goBack();
    }

    let unblock = history.block(true);
    unblock();

    history.entries.forEach(function (location) {
        let typedLocation: Location = location;
    });
}

{
    let history = createHashHistory()
    history.listen(function (location) {
        if (input.value !== '') {
            return 'Are you sure you want to leave this page?';
        }
    });

    history.listen(function (location, action) {
        if (typeof action === 'string') {
            console.log(action);
        }
    });
}

{
    let history = createBrowserHistory({
        basename: 'base',
        keyLength: 10,
        forceRefresh: false,
        getUserConfirmation(message, callback) {
            callback(window.confirm(message)); // The default behavior
        }
    });
}

{
    let location1 = LocationUtils.createLocation('path/1', { state: 1 });
    let location2 = LocationUtils.createLocation({ pathname: 'pathname', state: 2 });
    LocationUtils.locationsAreEqual(location1, location2);
}

{
    let location1 = LocationUtils.createLocation({ pathname: 'path/1' }, { state: 1 });
    let location2 = LocationUtils.createLocation({ pathname: 'pathname', state: 2 });
    LocationUtils.locationsAreEqual(location1, location2);
}

{
    let path = PathUtils.createPath({ pathname: '/a/path', hash: '#hash' });
    let strippedPath = PathUtils.stripBasename(path, '/a/');
    let location = PathUtils.parsePath(strippedPath);
}

{
    let eventTarget: EventTarget;
    DOMUtils.addEventListener(eventTarget, 'onload', function (event) { event.preventDefault(); });
    DOMUtils.removeEventListener(eventTarget, 'onload', function (event) { event.preventDefault(); });
    DOMUtils.getConfirmation('confirm?', (result) => console.log(result));
    let booleanValues = DOMUtils.supportsGoWithoutReloadUsingHash() && DOMUtils.supportsHistory();
}

{
    let supportsDOM = ExecutionEnvironment.canUseDOM;
    let isExtraneousPopstateEvent = DOMUtils.isExtraneousPopstateEvent;
}
