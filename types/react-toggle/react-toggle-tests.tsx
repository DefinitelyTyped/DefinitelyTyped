import * as React from "react";
import * as ReactDOM from "react-dom";
import Toggle, { ToggleIcons } from "react-toggle";

class Test extends React.Component {
    handleEvent = (e: ReactDOM.SyntheticEvent<HTMLInputElement>) => {};

    render() {
        const icons: ToggleIcons = {
            checked : (<div />),
            unchecked : (<div />),
        };

        return (
            <div>
                <Toggle
                    checked
                    defaultChecked
                    onChange={ this.handleEvent }
                    onFocus={ this.handleEvent }
                    onBlur={ this.handleEvent }
                    name="toggle"
                    value="value"
                    id="toggle"
                    icons={ icons }
                    aria-labelby="test"
                    aria-label="test"
                    disabled
                />

                <Toggle
                    icons={ false }
                />
            </div>
        );
    }
}
