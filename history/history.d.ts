// Type definitions for History.js
// Project: https://github.com/balupton/History.js
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface HistoryAdapter {
    bind(element, event, callback);
    trigger(element, event);
    onDomLoad(callback);
}

// Since History is defined in lib.d.ts as well 
// the name for our interfaces was chosen to be Historyjs
// However at runtime you would need to do
// https://github.com/borisyankov/DefinitelyTyped/issues/277 
// var Historyjs: Historyjs = <any>History;

interface Historyjs {
    enabled: boolean;
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
