// From https://github.com/jpuri/react-draft-wysiwyg/blob/master/stories/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor, EditorState } from 'react-draft-wysiwyg';

class BasicControlled extends React.Component<{}, {editorState: EditorState}> {
    constructor(props: any) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    render() {
        const {editorState} = this.state;
        return (<div>
            <Editor
                editorState={editorState}
                onEditorStateChange={this.onEditorStateChange}
            />
        </div>);
    }

    onEditorStateChange(editorState: EditorState): void {
        this.setState({editorState});
    }
}

ReactDOM.render(<BasicControlled />, document.getElementById('target'));
