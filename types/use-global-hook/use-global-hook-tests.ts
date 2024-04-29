import Immer from "immer";
import useStore, { InitializerFunction, Options, Store } from "use-global-hook";

interface stateType {
    value: string;
}

type setFunc = (value: string) => void;

interface associatedActionsType {
    setValue: setFunc;
}

const initializer: InitializerFunction<stateType, associatedActionsType> = (
    store: Store<stateType, associatedActionsType>,
) => {
    store.actions.setValue("");
    store.state.value;
    store.setState({ value: "string" });
};

const options: Options<stateType, associatedActionsType> = {
    Immer,
    initializer,
};

// with options
const store = useStore<stateType, associatedActionsType>({ value: "" }, {}, options);

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
// $ExpectType [string, setFunc]
store(
    (state: stateType) => state.value,
    (actions: associatedActionsType) => actions.setValue,
);
// $ExpectType [string, setFunc]
store<string, setFunc>(
    (state: stateType) => state.value,
    (actions: associatedActionsType) => actions.setValue,
);

// without options
useStore<stateType, associatedActionsType>({ value: "" }, {});
useStore<stateType, associatedActionsType>({ value: "" }, {}, {});

// with options
useStore<stateType, associatedActionsType>({ value: "" }, {}, { Immer });
useStore<stateType, associatedActionsType>({ value: "" }, {}, { initializer });

// with initializer (backward compatibility with 0.1.2)
useStore<stateType, associatedActionsType>({ value: "" }, {}, initializer);
