import LeState = require("lestate");
let State = LeState.createState();

State.set({
    test : {}
});

let currentState = State.get();

State.insert({
    test : {}
});

let currentDescription = State.getDescription();

State.createListener({
    id       : 0,
    selector : state => ({ test : state.test })
});
