import * as React from 'react';
import { Track, track as _track, TrackingProp } from 'react-tracking';

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

@track({ page: "ClassPage" }, {
    dispatch: customEventReporter,
    dispatchOnMount: contextData => ({ event: "pageDataReady" }),
    process: ownTrackingData => ownTrackingData.page ? { event: 'pageview' } : null,
})
class ClassPage extends React.Component<Props, State> {
    @track({ event: "Clicked" })
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

const FunctionPage: React.SFC<Props> = (props) => {
  return (
    <div onClick={() => {
        props.tracking && props.tracking.trackEvent({ action: 'click' });
      }}
    />
  );
};

const WrappedFunctionPage = track({
    page: 'FunctionPage'
}, {
    dispatchOnMount: true
})(FunctionPage);

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
