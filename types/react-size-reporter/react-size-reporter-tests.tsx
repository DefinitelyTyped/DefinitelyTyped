import * as React from 'react';
import SizeReporter, { ReactSizeReporterRef } from 'react-size-reporter';

const TestComponent = () => (
    <SizeReporter
        onSizeChange={({
            width, // $ExpectType number
            height, // $ExpectType number
        }) => {
            throw new Error('DefinitelyTyped example code');
        }}
    >
        <div style={{ width: '50vw', height: 'calc(100 + 7em)' }}></div>
    </SizeReporter>
);

class TestConsumer {
    reattach = () => this.sizeReporter?.reattachResizeListener();
    sizeReporter?: ReactSizeReporterRef;
    render() {
        return (
            <SizeReporter onSizeChange={() => {}} ref={ref => (ref ? (this.sizeReporter = ref) : undefined)}>
                <div>CONTENT GOES HERE</div>
                <div>AND HERE</div>
                <button type="button" onClick={this.reattach}>
                    Reattach!
                </button>
            </SizeReporter>
        );
    }
}
