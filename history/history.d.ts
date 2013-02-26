// Type definitions for History.js
// Project: https://github.com/balupton/History.js
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface HistoryAdapter {
    bind(element, event, callback);
    trigger(element, event);
    onDomLoad(callback);
}

interface History {
    enabled: bool;
    pushState(data, title, url);
    replaceState(data, title, url);
    getState();
    getHash();
    Adapter: HistoryAdapter;
    back();
    forward();
    go(X);
    log(...messages: any[]);
    debug(...messages: any[]);
}