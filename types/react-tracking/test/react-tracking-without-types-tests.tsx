import * as React from "react";
import { Track, track, TrackingProp, useTracking } from "react-tracking";

function customEventReporter(data: { page?: string | undefined }) {}

@track(
    { page: "ClassPage" },
    {
        dispatch: customEventReporter,
        dispatchOnMount: contextData => ({ event: "pageDataReady" }),
        process: ownTrackingData => (ownTrackingData.page ? { event: "pageview" } : null),
    },
)
class ClassPage extends React.Component<any> {
    @track({ event: "Clicked" })
    @track((_props, _state, [e]) => {
        if (e.ctrlKey) {
            return { event: "Click + ctrl key" };
        }
    })
    handleClick() {
        // ... other stuff
    }

    @track((_props, _state, [e]) => ({ event: `drag started at ${e.screenX}x${e.screenY}` }))
    handleDrag(event: any) {
        // no-op
    }

    // Only need to cast this to `any` because the settings for this project is to disallow implicit `any`.
    @track((props: any, state: any) => ({ event: `got ${props.someProp} and clicked ${state.isClicked}` }))
    render() {
        return <button onClick={this.handleClick}>Click Me!</button>;
    }

    @track({ event: "Async" })
    @track((_props, _state, _args, [resp, err]) => {
        if (resp) {
            return { result: resp, error: null };
        }
        return { error: err, result: null };
    })
    async handleAsync() {
        // ... other stuff
        return "response";
    }
}

const FunctionPage: React.FC<any> = props => {
    return (
        <div
            onClick={() => {
                props.tracking && props.tracking.trackEvent({ action: "click" });
            }}
        />
    );
};

const WrappedFunctionPage = track(
    {
        page: "FunctionPage",
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

const TestHook = track()((props: { foo: string }) => {
    const { Track, trackEvent } = useTracking(
        {
            page: "Page",
            action: "Load",
        },
        { dispatchOnMount: true },
    );

    React.useEffect(() =>
        trackEvent({
            action: "useEffect callback",
        })
    );
    return (
        <Track>
            <div
                onClick={() => {
                    trackEvent({
                        action: "Click",
                    });
                }}
            />
        </Track>
    );
});

const TestEmptyHook = track()((props: { foo: string }) => {
    const { Track, trackEvent } = useTracking();

    React.useEffect(() =>
        trackEvent({
            page: "Home",
            action: "useEffect callback",
        })
    );
    return (
        <Track>
            <div
                onClick={() => {
                    trackEvent({
                        page: "Home",
                        action: "Click",
                    });
                }}
            />
        </Track>
    );
});
