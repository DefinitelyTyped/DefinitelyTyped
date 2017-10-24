import * as React from 'react';
import { Track, track, TrackingProp } from 'react-tracking';

function customEventReporter(data: { page?: string }) {}

@track({ page: "ClassPage" }, {
    dispatch: customEventReporter,
    dispatchOnMount: contextData => ({ event: "pageDataReady" }),
    process: ownTrackingData => ownTrackingData.page ? { event: 'pageview' } : null,
})
class ClassPage extends React.Component<any> {
    @track({ event: "Clicked" })
    handleClick() {
    // ... other stuff
    }

    // Only need to cast this to `any` because the settings for this project is to disallow implicit `any`.
    @track((props: any, state: any) => ({ event: `got ${props.someProp} and clicked ${state.isClicked}` }))
    render() {
        return (
            <button onClick={this.handleClick}>
                Click Me!
            </button>
        );
    }
}

const FunctionPage: React.SFC<any> = (props) => {
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
