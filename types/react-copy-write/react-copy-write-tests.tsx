import * as React from 'react';
import { render } from 'react-dom';
import createStore from 'react-copy-write';

const { Provider, Consumer, mutate } = createStore({
    letter: 'a',
    number: 1,
});

const incrementNumber = () => mutate((draft) => {
    draft.number++;
});

const App = () => (
    <Provider>
        <div>
            <Consumer>
                {state => (
                    <div>Letter: {state.letter}</div>
                )}
            </Consumer>

            <Consumer render={state => (
                <div>Number (<span onClick={incrementNumber}>increment</span>): {state.number}</div>
            )} />
        </div>
    </Provider>
);

render(<App />, document.body);
