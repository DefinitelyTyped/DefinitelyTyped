import * as React from 'react';
import { Component, MouseEvent, StatelessComponent } from 'react';
import { render } from 'react-dom';
import onClickOutside from 'react-onclickoutside';

function TestStateless(props: { handleClickOutside(): void; }) {
    return (
        <div>Test</div>
    );
}

const TestStatelessWrapped = onClickOutside(TestStateless);

render(
    <TestStatelessWrapped
        eventTypes="click"
        disableOnClickOutside
        preventDefault
        stopPropagation
        outsideClickIgnoreClass="ignore"
        handleClickOutside={() => console.log('Stateless HandleClickOutside')}
    />,
    document.getElementById("main")
);

class TestComponent extends React.Component<{ disableOnClickOutside(): void; enableOnClickOutside(): void; }> {
    handleClickOutside = () => {
        console.log('this.handleClickOutside');
    }

    render() {
        this.props.disableOnClickOutside();
        this.props.enableOnClickOutside();
        return (
            <div onClick={this.props.disableOnClickOutside}>TestComponent</div>
        );
    }
}

const WrappedComponent = onClickOutside<{}>(TestComponent);

render(
    <WrappedComponent
        eventTypes="whatever"
        preventDefault
        stopPropagation
    />,
    document.getElementById("main")
);
