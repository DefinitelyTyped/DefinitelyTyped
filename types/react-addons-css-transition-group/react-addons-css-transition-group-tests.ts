import * as React from 'react';
import CSSTransitionGroup = require('react-addons-css-transition-group');
import createReactClass = require('create-react-class');

React.createFactory(CSSTransitionGroup)({
    component: createReactClass({
        render: (): null => null,
    }),
    childFactory: c => c,
    transitionName: 'transition',
    transitionAppear: false,
    transitionEnter: true,
    transitionLeave: true,
    id: 'some-id',
    className: 'some-class',
});

React.createFactory(CSSTransitionGroup)({
    transitionName: {
        enter: 'enter',
        enterActive: 'enterActive',
        leave: 'leave',
        leaveActive: 'leaveActive',
        appear: 'appear',
        appearActive: 'appearActive',
    },
});
