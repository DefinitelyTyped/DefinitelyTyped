import * as React from 'react';

import TransitionLink, {
    TransitionHandler,
    TransitionState,
    TransitionPortal,
    TransitionObserver,
    useTransitionState,
    useTriggerTransition,
} from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

//
// AniLink
// --------------------------------------------------------------------------

const AniLinkFadeTest = <AniLink to="/" fade />;

const AniLinkPaintDripTest = <AniLink to="/" paintDrip />;
const AniLinkPaintDripColorStrTest = <AniLink to="/" paintDrip color="black" />;
const AniLinkPaintDripColorHexTest = <AniLink to="/" paintDrip hex="#000000" />;

const AniLinkSwipeTest = <AniLink to="/" swipe />;

const AniLinkCoverTest = <AniLink to="/" cover />;
const AniLinkCoverBGTest = <AniLink to="/" cover bg="https://source.unsplash.com/random" />;

const AniLinkDirectionLeftTest = <AniLink to="/" fade direction="left" />;
const AniLinkDirectionRightTest = <AniLink to="/" fade direction="right" />;
const AniLinkDirectionUpTest = <AniLink to="/" fade direction="up" />;
const AniLinkDirectionDownTest = <AniLink to="/" fade direction="down" />;

const AniLinkDurationTest = <AniLink to="/" fade duration={999} />;

const AniLinkTopExitTest = <AniLink to="/" fade top="exit" />;
const AniLinkTopEntryTest = <AniLink to="/" fade top="entry" />;

const AniLinkTopEntryOffsetTest = <AniLink to="/" fade entryOffset={999} />;

//
// TransitionLink
// --------------------------------------------------------------------------

const TransitionLinkTest = () => {
    const innerRef = React.useRef<HTMLAnchorElement>(null);
    const ref = React.useRef<TransitionLink>(null);

    return (
        <TransitionLink
            exit={{
                state: {},
                appearAfter: 999,
                length: 999,
                zIndex: 999,
                delay: 999,
                activeClass: 'foo',
                className: 'foo',
                trigger: ({ exit, node }) => {},
            }}
            entry={{
                state: {},
                appearAfter: 999,
                length: 999,
                zIndex: 999,
                delay: 999,
                activeClass: 'foo',
                className: 'foo',
                trigger: ({ exit, node }) => {},
            }}
            state={{}}
            replace={true}
            preventScrollJump={true}
            trigger={({ entry, exit }) => {}}
            exitLength={999}
            entryDelay={999}
            exitFn={() => {}}
            entryState={{}}
            to="/"
            className="foo"
            activeStyle={{ display: '' }}
            style={{}}
            activeClassName="foo"
            partiallyActive={true}
            onClick={(event, weShouldNavigate) => {}}
            innerRef={innerRef}
        />
    );
};

//
// TransitionHandler
// --------------------------------------------------------------------------

const TransitionHandlerTest = () => <TransitionHandler injectPageProps={true} />;

//
// TransitionState
// --------------------------------------------------------------------------

const TransitionStateTest = () => {
    return (
        <TransitionState>
            {({ mount, transitionStatus }) => {
                return <div className="foo" style={{ visibility: mount ? 'visible' : 'hidden' }} />;
            }}
        </TransitionState>
    );
};

//
// TransitionPortal
// --------------------------------------------------------------------------

const TransitionPortalTest = () => {
    return <TransitionPortal />;
};

const TransitionPortalLevelTopTest = () => {
    return <TransitionPortal level="top" />;
};
const TransitionPortalLevelBottomTest = () => {
    return <TransitionPortal level="bottom" />;
};
const TransitionPortalLevelMiddleTest = () => {
    return <TransitionPortal level="middle" />;
};

//
// TransitionObserver
// --------------------------------------------------------------------------

const TransitionObserverTest = () => {
    return (
        <TransitionObserver forceRender={true}>
            {(contextState, innerRef) => {
                return <div ref={innerRef} />;
            }}
        </TransitionObserver>
    );
};

//
// useTransitionState
// --------------------------------------------------------------------------

const useTransitionStateTest = () => {
    // $ExpectType TransitionStateProps
    const _ = useTransitionState();
};

//
// useTriggerTransition
// --------------------------------------------------------------------------

const useTriggerTransitionTest = () => {
    useTriggerTransition({
        to: '/',
        disableAnimation: true,
        replace: true,
        linkState: {},
        exit: {
            state: {},
            appearAfter: 999,
            length: 999,
            zIndex: 999,
            delay: 999,
            activeClass: 'foo',
            className: 'foo',
            trigger: ({ exit, node }) => {},
        },
        entry: {
            state: {},
            appearAfter: 999,
            length: 999,
            zIndex: 999,
            delay: 999,
            activeClass: 'foo',
            className: 'foo',
            trigger: ({ exit, node }) => {},
        },
        pages: {
            exit: {
                state: {},
                appearAfter: 999,
                length: 999,
                zIndex: 999,
                delay: 999,
                activeClass: 'foo',
                className: 'foo',
                trigger: ({ exit, node }) => {},
            },
            entry: {
                state: {},
                appearAfter: 999,
                length: 999,
                zIndex: 999,
                delay: 999,
                activeClass: 'foo',
                className: 'foo',
                trigger: ({ exit, node }) => {},
            },
        },
        inTransition: true,
        trigger: ({ exit, e, entry, node }) => {},
        preventScrollJump: true,
    });
};
