import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor } from 'react-draft-wysiwyg';

class FocusBlurCallbacks extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            state: 'blurred'
        };
    }

    onFocus(): void {
        console.log('into onFocus');
        this.setState({
            state: 'focused',
        });
    }

    onBlur(): void {
        console.log('into onBlur');
        this.setState({
            state: 'blurred',
        });
    }

    render() {
        const { state } = this.state;
        return (
            <div>
                <h3>State right now <span style={{ color: 'blue' }}>{state}</span></h3>
                <Editor
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                />
            </div>
        );
    }
}

ReactDOM.render(<FocusBlurCallbacks />, document.getElementById('target'));
