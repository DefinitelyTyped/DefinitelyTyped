import * as React from "react";
import Measure, { ContentRect, withContentRect, MeasuredComponentProps, MeasurementType } from "react-measure";

class Test extends React.Component {
    render() {
        return (
            <Measure
                client
                offset
                scroll
                bounds
                margin
                innerRef={this.innerRef}
                onResize={this.onResize}
            >
                {({measureRef}) =>
                    <div ref={measureRef}>Measure me.</div>
                }
            </Measure>
        );
    }

    innerRef(ref: Element): void {
        console.log(`innerRef: ${ref}`);
    }

    onResize(contentRect: ContentRect): void {
        const {client, offset, scroll, bounds, margin} = contentRect;
        if (client != null) {
            console.log(`client - top: ${client.top}, left: ${client.left}, width: ${client.width}, height: ${client.height}`);
        }
        if (offset != null) {
            console.log(`offset - top: ${offset.top}, left: ${offset.left}, width: ${offset.width}, height: ${offset.height}`);
        }
        if (scroll != null) {
            console.log(`scroll - top: ${scroll.top}, left: ${scroll.left}, width: ${scroll.width}, height: ${scroll.height}`);
        }
        if (bounds != null) {
            console.log(`bounds - top: ${bounds.top}, left: ${bounds.left}, bottom: ${bounds.bottom}, right: ${bounds.right}, width: ${bounds.width}, height: ${bounds.height}`);
        }
        if (margin != null) {
            console.log(`bounds - top: ${margin.top}, left: ${margin.left}, bottom: ${margin.bottom}, right: ${margin.right}`);
        }
    }
}

class Test2 extends React.Component {
    render() {
        return (
            <Measure
                client={true}
                offset={false}
                onResize={this.onResize}
            >
                {({measureRef}) =>
                    <div ref={measureRef}></div>
                }
            </Measure>
        );
    }

    onResize(contentRect: ContentRect): void {
    }
}

interface Props {
    a: string;
}

const TestFunctionalComponentWithProps: React.FC<Props & MeasuredComponentProps> = ({a, contentRect, measureRef}) => {
    return (
        <div ref={measureRef}>{a}</div>
    );
};

class TestClassComponentWithProps extends React.Component<Props & MeasuredComponentProps> {
    render() {
        const {a, contentRect, measureRef} = this.props;
        return (
            <div ref={measureRef}>{a}</div>
        );
    }
}

function testHocComponent() {
    return withContentRect('bounds')(({measureRef, measure, contentRect}) => (
        <div ref={measureRef}>
            Some content here
            <pre>
              {JSON.stringify(contentRect, null, 2)}
            </pre>
        </div>
    ));
}

function testHocComponent2<T>() {
    return withContentRect(['scroll', 'margin'] as ReadonlyArray<MeasurementType>)(({measureRef}) => (
        <div ref={measureRef}>Some content here</div>
    ));
}

const HocComponent = testHocComponent();
const el = <HocComponent />;

const MeasuredFunctionalComponent = withContentRect('bounds')<Props>(TestFunctionalComponentWithProps);
const funcEl = <MeasuredFunctionalComponent a="test" />;

const MeasuredClassComponent = withContentRect('bounds')<Props>(TestClassComponentWithProps);
const classEl = <MeasuredClassComponent a="test" />;

function testInnerRefHook() {
    const ref = React.useRef<HTMLDivElement>();
    return <Measure innerRef={ref} />;
}
