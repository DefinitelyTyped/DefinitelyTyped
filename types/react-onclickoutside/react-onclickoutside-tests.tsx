import * as React from 'react';
import { Component, MouseEvent, StatelessComponent } from 'react';
import { render } from 'react-dom';
import onClickOutside from 'react-onclickoutside';

interface TestStatelessProps {
    disableOnClickOutside(): void;
    enableOnClickOutside(): void;
    nonClickOutsideProp: string;
}

function TestStateless(props: TestStatelessProps) {
    return (
        <div onKeyUp={props.enableOnClickOutside} onKeyDown={props.disableOnClickOutside}>
            {props.nonClickOutsideProp}
        </div>
    );
}

const TestConfigObject = onClickOutside(TestStateless, {
    handleClickOutside: () => console.log('Stateless HandleClickOutside'),
    excludeScrollbar: true
});

render(
    <TestConfigObject nonClickOutsideProp="Test" />,
    document.getElementById("main")
);

const TestStatelessWrapped = onClickOutside(TestStateless);

render(
    <TestStatelessWrapped
        nonClickOutsideProp="Test"
        eventTypes="click"
        disableOnClickOutside
        preventDefault
        stopPropagation
        outsideClickIgnoreClass="ignore"
        handleClickOutside={() => console.log('Stateless HandleClickOutside')}
        excludeScrollbar
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

const WrappedComponent = onClickOutside(TestComponent);

render(
    <WrappedComponent
        eventTypes="whatever"
        preventDefault
        stopPropagation
    />,
    document.getElementById("main")
);
