import useStore, { Store, InitializerFunction } from 'use-global-hook';
import React = require('react');

interface state { value: string; }
interface associatedActions { setValue(value: string): void; }
const initializer: InitializerFunction<state, associatedActions> = (store: Store<state, associatedActions>) => {
    store.actions.setValue("");
    store.state.value;
    store.setState({ value: "string" });
};

useStore<state, associatedActions>(React, { value: "" }, {}, initializer); // $ExpectType () => [state, associatedActions]
useStore<state, associatedActions>(React, { value: "" }, {}); // $ExpectType () => [state, associatedActions]
