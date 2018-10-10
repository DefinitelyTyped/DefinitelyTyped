// From https://github.com/jpuri/react-draft-wysiwyg/blob/master/stories/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor } from 'react-draft-wysiwyg';
import { RichUtils } from 'draft-js';

import './styles.css';

class CustomOption extends React.Component<any, any> {
    toggleBold() {
        const {editorState, onChange} = this.props;
        const newState = RichUtils.toggleInlineStyle(
            editorState,
            'BOLD',
        );
        if (newState) {
            onChange(newState);
        }
    }
    
    render() {
        return (
            <div className="rdw-storybook-custom-option" onClick={this.toggleBold}>B</div>
        );
    }
}

const CustomToolbar = () =>
    (<div className="rdw-storybook-root">
        <h3>Last option marked as B is custom option for making test BOLD.</h3>
        <Editor
            toolbarClassName="rdw-storybook-toolbar"
            wrapperClassName="rdw-storybook-wrapper"
            editorClassName="rdw-storybook-editor"
            toolbarCustomButtons={[<CustomOption />]}
        />
    </div>);

ReactDOM.render(<CustomToolbar />, document.getElementById('target'));
