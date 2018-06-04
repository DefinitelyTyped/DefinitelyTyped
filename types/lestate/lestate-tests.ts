import LeState = require("lestate");
const State = LeState.createState();

State.set({
    test : {}
});

const currentState = State.get();

State.insert({
    test : {}
});

const currentDescription = State.getDescription();

State.createListener({
    id       : 0,
    selector : state => ({ test : state.test })
});
