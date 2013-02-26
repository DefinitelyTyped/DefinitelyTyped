/// <reference path="history.d.ts" />

if (!History.enabled) {
    return false;
}

History.Adapter.bind(window, 'statechange', () => {
    var State = History.getState();
    History.log(State.data, State.title, State.url);
});

History.pushState({ state: 1 }, "State 1", "?state=1");
History.pushState({ state: 2 }, "State 2", "?state=2");
History.replaceState({ state: 3 }, "State 3", "?state=3");
History.pushState(null, null, "?state=4");
History.back();
History.go(2);