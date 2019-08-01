import * as EL from 'electron-redux';
import { applyMiddleware, createStore } from 'redux';

const reducer = () => ({});
const store = createStore(
    reducer,
    undefined,
    applyMiddleware(
        EL.forwardToMain,
        EL.triggerAlias,
        EL.forwardToMainWithParams(),
        EL.forwardToMainWithParams({}),
        EL.forwardToMainWithParams({ blacklist: [] }),
        EL.forwardToMainWithParams({
            blacklist: [/^@@/, /^redux-form/],
        }),
        EL.forwardToRenderer
    )
);

let action = EL.createAliasedAction('FOO', () => ({ type: 'FOO' }));
action = EL.createAliasedAction('FOO', () => ({ type: 'FOO', payload: 'foo' }));
action = EL.createAliasedAction('FOO', (payload: string, meta: object) => ({ type: 'FOO', payload, meta }));

EL.replayActionMain(store);
EL.replayActionRenderer(store);

EL.getInitialStateRenderer() as ReturnType<typeof reducer>;
