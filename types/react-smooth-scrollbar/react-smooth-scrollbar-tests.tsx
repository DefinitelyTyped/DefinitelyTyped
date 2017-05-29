import * as React from "react";
import * as SmoothScrollbar from "react-smooth-scrollbar";

<SmoothScrollbar className="test" alwaysShowTracks onScroll={(status, instance) => { } } />;
<SmoothScrollbar speed={10} overscrollEffect="bounce" />;

class Test extends React.Component<void, void> {
    ref: SmoothScrollbar;

    componentDidMount() {
        this.ref.scrollbar.scrollTo(0, 500);
    }

    render() {
        return (
            <SmoothScrollbar ref={ref => this.ref = ref} />
        );
    }
}
