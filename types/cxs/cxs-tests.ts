import * as React from 'react';
import cxsComponent = require('cxs/component');
import cxs = require('cxs');

/**
 * Standard calls to cxs to generate classNames
 */
cxs({
    color: 'red',
    ':hover': {
        color: 'green',
    },
});

cxsComponent('div')({
    fontSize: 24,
});

/** React component composition */
const ComponentA = () => React.createElement('div');

cxsComponent(ComponentA)({
    fontSize: 72,
});

/** React composition with props callback */
interface Props {
    isActive: boolean;
}

const ComponentB = (props: Props) => React.createElement('div');

cxsComponent(ComponentB)((props: Props) => ({
    color: props.isActive ? 'blue' : 'purple',
}));
