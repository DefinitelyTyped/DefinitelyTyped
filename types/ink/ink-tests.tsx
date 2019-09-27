// @jsx h

import { Color, Component, Fragment, Indent, render } from "ink";

interface CounterProps {
    totalTests: number;
}

class Counter extends Component<CounterProps, { i: number }> {
    timer = null as ReturnType<typeof setInterval> | null;
    state = { i: 0 };

    constructor(props: CounterProps) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Indent>
                    <Color green>{this.state.i} / {this.props.totalTests} tests passed</Color>
                </Indent>
            </Fragment>
        );
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                i: this.state.i + 1
            });
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.timer!);
    }
}

render(<Counter totalTests={100} />);
