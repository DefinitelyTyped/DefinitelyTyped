import * as React from 'react';
import {
    Track,
    track as _track,
    TrackingProp,
    Options,
    Decorator,
    TrackingContext,
    ReactTrackingContext,
    useTracking,
} from 'react-tracking';

function customEventReporter(data: { page?: string | undefined }) {}

interface Props {
    someProp: string;
    tracking?: TrackingProp | undefined;
}

interface State {
    isClicked: boolean;
}

interface TrackingData {
    page: string;
    event: string;
}

const track: Track<TrackingData, Props, State> = _track;

@track(
    { page: 'ClassPage' },
    {
        dispatch: customEventReporter,
        dispatchOnMount: contextData => ({ event: 'pageDataReady' }),
        process: ownTrackingData => (ownTrackingData.page ? { event: 'pageview' } : null),
    },
)
class ClassPage extends React.Component<Props, State> {
    @track({ event: 'Clicked' })
    @track((_props, _state, [e]: [React.MouseEvent]) => {
        if (e.ctrlKey) {
            return { event: 'Click + ctrl key' };
        }
    })
    handleClick() {
        // ... other stuff
    }

    @track((_props, _state, [e]: [React.MouseEvent]) => ({ event: `drag started at ${e.screenX}x${e.screenY}` }))
    handleDrag(event: React.MouseEvent) {
        // no-op
    }

    @track((props, state) => ({ event: `got ${props.someProp} and clicked ${state.isClicked}` }))
    render() {
        return (
            <button onClick={this.handleClick} onDrag={this.handleDrag}>
                Click Me!
            </button>
        );
    }

    @track((_props, _state, _args, [resp, err]) => {
        if (err || !resp) {
            return { event: 'Async Error' };
        }
        return { event: 'Async Response' };
    })
    async handleAsync() {
        // ... other stuff
        return 'response';
    }
}

const FunctionPage: React.FC<Props> = props => {
    return (
        <div
            onClick={() => {
                props.tracking && props.tracking.trackEvent({ action: 'click' });
            }}
        />
    );
};

const WrappedFunctionPage = track(
    {
        page: 'FunctionPage',
    },
    {
        dispatchOnMount: true,
    },
)(FunctionPage);

class Test extends React.Component<any, null> {
    render() {
        return (
            <div>
                <ClassPage someProp="oh yeah" />
                <WrappedFunctionPage someProp="oh yeah" />
            </div>
        );
    }
}

const TestContext = () => {
    const trackingContext = {
        tracking: {
            data: { foo: 'bar' },
            dispatch: (data: {}) => data,
            process: (x: string) => x,
        },
    };
    return (
        <ReactTrackingContext.Provider value={trackingContext}>
            <div>hello how are you</div>
        </ReactTrackingContext.Provider>
    );
};

interface Trackables {
    page: string;
    action: string;
    app: string;
}

const TestHook = track()((props: { foo: string }) => {
    const { Track, trackEvent } = useTracking<Trackables>({ page: 'Page' }, { dispatchOnMount: false });

    React.useEffect(() =>
        trackEvent({
            action: 'useEffect callback',
        }),
    );
    return (
        <Track>
            <div
                onClick={() => {
                    trackEvent({
                        action: 'Click',
                    });
                }}
            />
        </Track>
    );
});

const TestHookWithDataFunction = track()((props: { foo: string }) => {
    const { Track, trackEvent } = useTracking<Trackables>(() => ({ page: 'Page' }), {
        dispatchOnMount: false,
        dispatch: ({ page }) => {},
    });

    React.useEffect(() =>
        trackEvent({
            action: 'useEffect callback',
        }),
    );
    return (
        <Track>
            <div
                onClick={() => {
                    trackEvent({
                        action: 'Click',
                    });
                }}
            />
        </Track>
    );
});

const TestEmptyHook = track()((props: { foo: string }) => {
    const { Track, trackEvent } = useTracking<Trackables>();

    React.useEffect(() =>
        trackEvent({
            page: 'Home',
            action: 'useEffect callback',
        }),
    );
    return (
        <Track>
            <div
                onClick={() => {
                    trackEvent({
                        page: 'Home',
                        action: 'Click',
                    });
                }}
            />
        </Track>
    );
});
