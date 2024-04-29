import * as React from "react";
import { render } from "react-snapshot";

class Test extends React.Component {
    render() {
        return <h1>Test!</h1>;
    }
}

render(<Test />, document.getElementById("test"));
render(
    <div>
        <Test />
    </div>,
    document.getElementById("test"),
);
