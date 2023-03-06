import * as React from "react";
import TransitionGroup = require("react-transition-group/TransitionGroup");
import CSSTransitionGroup = require("react-transition-group/CSSTransitionGroup");
import { CSSTransitionGroupProps, TransitionGroupProps, TransitionGroupChildLifecycle } from "react-transition-group";

class TestChild extends React.Component implements TransitionGroupChildLifecycle {
    componentWillAppear(callback: () => void) {
        callback();
    }

    componentDidAppear() {}

    componentWillEnter(callback: () => void) {
        callback();
    }

    componentDidEnter() {}

    componentWillLeave(callback: () => void) {
        callback();
    }

    componentDidLeave() {}

    render() {
        return (<li>{ "Test" }</li>);
    }
}

const Test: React.FunctionComponent = () => {
    return (
        <div>
            <TransitionGroup component="ul" className="animated-list">
                <TestChild />
            </TransitionGroup>

            <CSSTransitionGroup
                transitionName="example"
                transitionAppear={ true }
                transitionAppearTimeout={ 500 }
                transitionEnter={ true }
                transitionEnterTimeout={ 500 }
                transitionLeave={ true }
                transitionLeaveTimeout={ 500 }
            >
                <div>{ "test" }</div>
            </CSSTransitionGroup>

            <CSSTransitionGroup
                transitionName={ {
                    enter: "enter",
                    enterActive: "enterActive",
                    leave: "leave",
                    leaveActive: "leaveActive",
                    appear: "appear",
                    appearActive: "appearActive"
                } }
            >
                <div>{ "test" }</div>
            </CSSTransitionGroup>

            <CSSTransitionGroup
                transitionName={ {
                    enter: "enter",
                    leave: "leave",
                    appear: "appear"
                } }
            >
                <div>{ "test" }</div>
            </CSSTransitionGroup>
        </div>
    );
};
