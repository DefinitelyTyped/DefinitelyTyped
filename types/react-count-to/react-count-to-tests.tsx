import * as React from "react";
import * as CountTo from "react-count-to";

export class Test extends React.Component<any> {
    render() {
        const easing = (value: number) => value * value;

        return (
            <div>
                <CountTo to={100} speed={1000} />
                <CountTo to={100} speed={1000} delay={50} easing={easing}>
                {(value) => <strong>{value}</strong>}
                </CountTo>
            </div>
        );
    }
}
