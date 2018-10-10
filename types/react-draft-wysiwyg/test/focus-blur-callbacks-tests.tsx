import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor } from 'react-draft-wysiwyg';

import './styles.css';

class FocusBlurCallbacks extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            state: 'blurred'
        };
    }

    onFocus() {
        console.log('into onFocus');
        this.setState({
            state: 'focused',
        });
    }

    onBlur() {
        console.log('into onBlur');
        this.setState({
            state: 'blurred',
        });
    }

    render() {
        const { state } = this.state;
        return (
            <div className="rdw-storybook-root">
                <h3>State right now <span style={{ color: 'blue' }}>{state}</span></h3>
                <Editor
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    toolbarClassName="rdw-storybook-toolbar"
                    wrapperClassName="rdw-storybook-wrapper"
                    editorClassName="rdw-storybook-editor"
                />
            </div>
        );
    }
}

ReactDOM.render(<FocusBlurCallbacks />, document.getElementById('target'));
