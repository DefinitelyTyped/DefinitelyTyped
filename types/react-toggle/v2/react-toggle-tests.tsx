import * as React from "react";
import Toggle from "react-toggle";

class Test extends React.Component {
    render() {
        return (
            <Toggle icons={ false } />
        );
    }
}

class TestControlled extends React.Component<{}, {checked: boolean}> {
    state = {
        checked: false
    };

    render() {
        return (
            <Toggle name="toggle" checked={this.state.checked} onChange={(e) => this.setState({ checked: e.target.checked })} />
        );
    }
}
