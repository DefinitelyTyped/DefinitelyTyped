// Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/pull/50880#discussion_r566506216

import * as React from 'react';
import Select, { components } from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function ExampleSelect() {
    return (
        <Select
            components={{
                Menu({ children, ...props }) {
                    return (
                        <components.Menu {...props}>
                            <>
                                <button onClick={() => props.setValue(props.options, 'select-option')}>
                                    Select all
                                </button>
                                {children}
                            </>
                        </components.Menu>
                    );
                },
            }}
            options={options}
            isMulti
        />
    );
}
