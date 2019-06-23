import { Component } from '@reach/component-component';

import * as React from 'react';
import { render } from 'react-dom';

const Examples = () => {
    return (
        <>
            {/* initialState Example */}
            <Component initialState={{ hue: 0 }}>
                {({ setState, state }) => (
                    <div style={{ textAlign: 'center' }}>
                        <button onClick={() => setState({ hue: Math.random() * 360 })}>
                            Generate Triad Colorscheme
                        </button>
                        <br />
                        {[1, 2, 3].map(n => (
                            <div
                                key={n}
                                style={{
                                    display: 'inline-block',
                                    margin: 10,
                                    width: '2em',
                                    height: '2em',
                                    borderRadius: '50%',
                                    background: `hsl(${state.hue + n * 120}, 50%, 50%)`,
                                    transition: 'background-color 200ms ease',
                                }}
                            />
                        ))}
                    </div>
                )}
            </Component>

            {/* didMount Example */}
            <Component
                initialState={{ gists: [{ id: 0, url: 'hello', description: 'world' }] }}
                didMount={({ setState, state }) => {
                    setTimeout(() => {
                        setState({ gists: state.gists.concat([{ id: 1, url: 'foo', description: 'bar' }]) });
                    }, 1000);
                }}
            >
                {({ state }) =>
                    state.gists ? (
                        <ul>
                            {state.gists.map(gist => (
                                <li key={gist.id}>
                                    <a href={gist.url}>{gist.description || gist.id}</a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div>Loading...</div>
                    )
                }
            </Component>

            {/* didUpdate and shouldUpdate Example */}
            <Component
                getInitialState={() => {
                    return {
                        todos: ['This is kinda weird'],
                    };
                }}
                didUpdate={() => (document.title = 'Example')}
                shouldUpdate={({ nextProps, nextState, props, state }) => {
                    return nextState.todos !== state.todos;
                }}
            >
                {({ state, setState }) => <>Todos</>}
            </Component>
        </>
    );
};

render(<Examples />, document.getElementById('app'));
render(<Component />, document.getElementById('app'));
