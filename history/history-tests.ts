/// <reference path="history.d.ts" />

function tests() {
    if (!Historyjs.enabled) {
        return false;
    }

    Historyjs.Adapter.bind(window, 'statechange', () => {
        var State = Historyjs.getState();
        Historyjs.log(State.data, State.title, State.url);
    });

    Historyjs.pushState({ state: 1 }, "State 1", "?state=1");
    Historyjs.pushState({ state: 2 }, "State 2", "?state=2");
    Historyjs.replaceState({ state: 3 }, "State 3", "?state=3");
    Historyjs.pushState(null, null, "?state=4");
    Historyjs.back();
    Historyjs.go(2);
}