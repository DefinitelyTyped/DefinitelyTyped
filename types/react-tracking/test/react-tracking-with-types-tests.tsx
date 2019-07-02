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
import { string } from 'prop-types';

function customEventReporter(data: { page?: string }) {}

interface Props {
    someProp: string;
    tracking?: TrackingProp;
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
    }
)
class ClassPage extends React.Component<Props, State> {
    @track({ event: 'Clicked' })
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
}

const FunctionPage: React.SFC<Props> = props => {
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
    }
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
    app: string;
}

const App = track()((props: { foo: string }) => {
    const tracking = useTracking<Trackables>();
    return (
        <div
            onClick={() => {
                tracking.trackEvent({
                    page: 'Home',
                });
            }}
        />
    );
});
