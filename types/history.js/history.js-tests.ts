

// Since History is defined in lib.d.ts as well 
// the name for our interfaces was chosen to be Historyjs
// However at runtime you would need to do
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/277 
var Historyjs: Historyjs = <any>History;

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
