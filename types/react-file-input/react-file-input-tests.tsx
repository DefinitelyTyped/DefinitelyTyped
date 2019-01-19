import * as React from "react";
import * as ReactDOM from "react-dom";
import FileInput = require('react-file-input');

class Form extends React.Component {
    handleChange = (event: ReactDOM.SyntheticEvent<any>) => {
        const target: any = event.target;
        console.log('Selected file:', target.files[0]);
    }

    render(): React.ReactElement<{}> {
        return (
            <form>
                <FileInput
                    name="myImage"
                    accept=".png,.gif"
                    placeholder="My Image"
                    className="inputClass"
                    disabled={false}
                    onChange={this.handleChange}
                    />
            </form>
        );
    }
}
