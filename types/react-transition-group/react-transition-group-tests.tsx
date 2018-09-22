import * as React from "react";
import CSSTransition = require("react-transition-group/CSSTransition");
import Transition, { UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, TransitionStatus } from "react-transition-group/Transition";
import TransitionGroup = require("react-transition-group/TransitionGroup");
import Components = require("react-transition-group");

interface ContainerProps {
    theme: string;
    children?: Element[];
}

const Container: React.StatelessComponent<ContainerProps> = (props: ContainerProps) => {
    return (
        <div data-theme={props.theme}>
            {props.children}
        </div>
    );
};

const Test: React.StatelessComponent = () => {
    function handleEnter(node: HTMLElement, isAppearing: boolean) {}

    function handleExit(node: HTMLElement) {}

    function handleEndListener(node: HTMLElement, done: () => void) {
        node.addEventListener("transitionend", done, false);
    }

    function statusAsArgument(status: TransitionStatus) {
        switch (status) {
            case ENTERING:
            case ENTERED:
            case EXITING:
            case EXITED:
            case UNMOUNTED:
                return <div>{status}</div>;
        }
    }

    return (
        <TransitionGroup
            component={Container}
            theme="test"
            className="animated-list"
            childFactory={ (child: React.ReactElement<any>) => child }
        >
            <Components.Transition
                in
                mountOnEnter
                unmountOnExit
                appear
                enter
                exit
                timeout={ 500 }
                addEndListener={ handleEndListener }
                onEnter={ handleEnter }
                onEntering={ handleEnter }
                onEntered={ handleEnter }
                onExit={ handleExit }
                onExiting={ handleExit }
                onExited={ handleExit }
            >
                <div>{ "test" }</div>
            </Components.Transition>
            <Components.Transition in timeout={500}>
                {(status) => {
                     switch (status) {
                         case ENTERING:
                         case ENTERED:
                         case EXITING:
                         case EXITED:
                         case UNMOUNTED:
                             return <div>{status}</div>;
                     }
                }}
            </Components.Transition>

            <Components.Transition in timeout={500}>
                {statusAsArgument}
            </Components.Transition>

            <Transition
                timeout={ { enter : 500, exit : 500 } }
            >
                <div>{ "test" }</div>
            </Transition>

            <Components.CSSTransition
                in
                mountOnEnter
                unmountOnExit
                appear
                enter
                exit
                timeout={ 500 }
                addEndListener={ handleEndListener }
                onEnter={ handleEnter }
                onEntering={ handleEnter }
                onEntered={ handleEnter }
                onExit={ handleExit }
                onExiting={ handleExit }
                onExited={ handleExit }
                classNames="fade"
            >
                <div>{ "test" }</div>
            </Components.CSSTransition>

            <CSSTransition
                timeout={ { enter : 500, exit : 500 } }
                classNames={ {
                    appear: "fade-appear",
                    appearActive: "fade-active-appear",
                    enter: "fade-enter",
                    enterActive: "fade-active-enter",
                    enterDone: "fade-done-enter",
                    exit: "fade-exit",
                    exitActive: "fade-active-exit",
                    exitDone: "fade-done-exit",
                } }
            >
                <div>{ "test" }</div>
            </CSSTransition>
        </TransitionGroup>
    );
};
