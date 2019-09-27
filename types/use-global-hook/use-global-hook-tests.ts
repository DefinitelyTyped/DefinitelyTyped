import useStore, { Store, InitializerFunction } from 'use-global-hook';
import React = require('react');

interface stateType {
  value: string;
}

type setFunc = (value: string) => void;

interface associatedActionsType {
  setValue: setFunc;
}

const initializer: InitializerFunction<stateType, associatedActionsType> = (store: Store<stateType, associatedActionsType>) => {
    store.actions.setValue('');
    store.state.value;
    store.setState({ value: 'string' });
};

const store = useStore<stateType, associatedActionsType>(React, { value: '' }, {}, initializer);

store(); // $ExpectType [unknown, unknown]
store<stateType, associatedActionsType>(); // $ExpectType [stateType, associatedActionsType]
store<string, associatedActionsType>((state: stateType) => state.value); // $ExpectType [string, associatedActionsType]
store<stateType, setFunc>(undefined, (action: associatedActionsType) => action.setValue); // $ExpectType [stateType, setFunc]
store<string, setFunc>((state: stateType) => state.value, (actions: associatedActionsType) => actions.setValue); // $ExpectType [string, setFunc]

useStore<stateType, associatedActionsType>(React, { value: '' }, {});
