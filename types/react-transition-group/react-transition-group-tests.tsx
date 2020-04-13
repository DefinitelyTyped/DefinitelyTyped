import * as React from "react";
import { UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, TransitionStatus } from "react-transition-group/Transition";
import { modes } from "react-transition-group/SwitchTransition";
import { Transition, CSSTransition, TransitionGroup, SwitchTransition, config } from "react-transition-group";

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
        <>
            <SwitchTransition>
                <Transition
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
                </Transition>
            </SwitchTransition>

            <SwitchTransition mode="in-out">
                <Transition
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
                </Transition>
            </SwitchTransition>

            <SwitchTransition mode={modes.in}>
                <Transition
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
                </Transition>
            </SwitchTransition>

            <SwitchTransition mode={modes.out}>
                <Transition
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
                </Transition>
            </SwitchTransition>

            <TransitionGroup
                component={Container}
                theme="test"
                className="animated-list"
                childFactory={ (child: React.ReactElement) => child }
            >
                <Transition
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
                </Transition>
                <Transition in timeout={500}>
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
                </Transition>

                <Transition in timeout={500}>
                    {statusAsArgument}
                </Transition>

                <Transition
                    timeout={ { enter : 500, exit : 500 } }
                >
                    <div>{ "test" }</div>
                </Transition>

                <Transition addEndListener={() => {}}/>

                <CSSTransition
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
                </CSSTransition>

                <CSSTransition
                    timeout={ { enter : 500, exit : 500 } }
                    classNames={ {
                        appear: "fade-appear",
                        appearActive: "fade-active-appear",
                        appearDone: "fade-done-appear",
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

                <CSSTransition timeout={ 100 }>
                    <div>{ "test" }</div>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};

config.disabled = false;
