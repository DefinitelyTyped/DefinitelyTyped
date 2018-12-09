import * as React from "react";
import * as CountUp from "react-countup";

export class Test extends React.Component<any> {
    render() {
        return (
            <CountUp start={0} end={100}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        <button onClick={start}>Start</button>
                    </div>
                )}
            </CountUp>
        );
    }
}
