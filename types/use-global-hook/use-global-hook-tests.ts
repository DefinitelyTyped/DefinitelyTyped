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

// with initializer
const store = useStore<stateType, associatedActionsType>(React, { value: '' }, {}, initializer);

// default
store(); // $ExpectType [stateType, associatedActionsType]

// works without passing expected type when using state filter
store((state: stateType) => state.value); // $ExpectType [string, associatedActionsType]
store<string>((state: stateType) => state.value); // $ExpectType [string, associatedActionsType]

// works without passing expected type when using only action filter
store(undefined, (action: associatedActionsType) => action.setValue); // $ExpectType [stateType, setFunc]
// returns expected type if passed types
store<setFunc>(undefined, (action: associatedActionsType) => action.setValue); // $ExpectType [stateType, setFunc]

// works without passing expected type when using both state and action filters
store((state: stateType) => state.value, (actions: associatedActionsType) => actions.setValue); // $ExpectType [string, setFunc]
store<string, setFunc>((state: stateType) => state.value, (actions: associatedActionsType) => actions.setValue); // $ExpectType [string, setFunc]

// without initializer
useStore<stateType, associatedActionsType>(React, { value: '' }, {});
