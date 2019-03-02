// @jsx h

import { Color, Component, Fragment, render } from "ink";

class Counter extends Component<{}, { i: number }> {
    timer = null as ReturnType<typeof setInterval> | null;
    state = { i: 0 };

    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <Color green>{this.state.i} tests passed</Color>
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

render(<Counter />);
