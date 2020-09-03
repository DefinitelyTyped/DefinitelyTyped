import combineReducers from 'combine-reducers';

function counter(state: number = 0, action: { type: string; payload?: any }): number {
    if (action.type === 'increment_counter') {
        return (state += 1);
    } else if (action.type === 'decrement_counter') {
        return (state -= 1);
    }
    return state;
}

function toggle(state: boolean = false, action: { type: string; payload?: any }): boolean {
    if (action.type === 'toggle') {
        return action.payload;
    }
    return state;
}

const reducer = combineReducers({
    toggle,
    counter,
});

// $ExpectError
combineReducers();

reducer({ toggle: false, counter: 4 }, { type: 'increment_counter' });
reducer({ toggle: false, counter: 4 }, { type: 'decrement_counter' });
reducer({ toggle: true, counter: 4 }, { type: 'toggle', payload: false });

// $ExpectError
reducer({ toggle: false, counter: 4, extra: false }, { type: 'decrement_counter' });
// $ExpectError
reducer({ toggle: false, counter: 4, extra: false });
// $ExpectError
reducer({ toggle: 3, counter: 4 }, { type: 'decrement_counter' });
