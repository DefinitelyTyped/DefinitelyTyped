// From https://github.com/jpuri/react-draft-wysiwyg/blob/master/stories/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor, EditorState } from 'react-draft-wysiwyg';

import './styles.css';

class BasicControlled extends React.Component<{}, {editorState: EditorState}> {
    constructor(props: any) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    render() {
        const {editorState} = this.state;
        return (<div className="rdw-storybook-root">
            <Editor
                editorState={editorState}
                toolbarClassName="rdw-storybook-toolbar"
                wrapperClassName="rdw-storybook-wrapper"
                editorClassName="rdw-storybook-editor"
                onEditorStateChange={this.onEditorStateChange}
            />
        </div>);
    }

    onEditorStateChange(editorState: EditorState) {
        this.setState({editorState});
    }
}

ReactDOM.render(<BasicControlled />, document.getElementById('target'));
