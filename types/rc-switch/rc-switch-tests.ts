import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Switch, { Props } from 'rc-switch';

/**
 * Only required props.
 */
React.createElement(Switch, {
    checkedChildren: 'hello',
    disabled: false,
    onChange: console.log,
    unCheckedChildren: 'world'
});

/**
 * All accepted props.
 */
React.createElement(Switch, {
    autoFocus: false,
    checked: false,
    checkedChildren: 'hello',
    className: 'switch',
    defaultChecked: false,
    disabled: false,
    loadingIcon: 0,
    onChange: console.log,
    onClick: console.log,
    prefixCls: 'rc-',
    tabIndex: 0,
    unCheckedChildren: 'world',
});
