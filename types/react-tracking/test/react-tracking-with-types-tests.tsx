import * as React from 'react';
import { Track, track as _track, TrackingProp } from 'react-tracking';

function customEventReporter(data: { page?: string }) {}

interface Props {
    someProp: string;
    tracking?: TrackingProp;
}

interface TrackingData {
    page: string;
    event: string;
}

const track: Track<TrackingData, Props> = _track;

@track({ page: "ClassPage" }, {
    dispatch: customEventReporter,
    dispatchOnMount: contextData => ({ event: "pageDataReady" }),
    process: ownTrackingData => ownTrackingData.page ? { event: 'pageview' } : null,
})
class ClassPage extends React.Component<Props> {
    @track({ event: "Clicked" })
    handleClick() {
    // ... other stuff
    }

    @track(props => ({ event: `got ${props.someProp}` }))
    render() {
        return (
            <button onClick={this.handleClick}>
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
