import * as React from 'react';
const cxsComponent = require('./component');
const cxs = require('./index');

/**
 * Standard calls to cxs to generate classNames
 */
cxs({
    color: 'red',
    ':hover': {
        color: 'green',
    },

    borderWidth: () => {}, // $ExpectError
});

cxsComponent('div')({
    fontSize: 24,

    content: {}, // $ExpectError
});

/** React component composition */
const ComponentA = () => React.createElement('div');

cxsComponent(ComponentA)({
    fontSize: 72,
});

cxsComponent(ComponentA)(true); // $ExpectError

/** React composition with props callback */
type Props = {
    isActive: boolean;
};

const ComponentB = (props: Props) => React.createElement('div');

cxsComponent(ComponentB)((props: Props) => ({
    color: props.isActive ? 'blue' : 'purple',
}));
