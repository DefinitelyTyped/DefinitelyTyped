import * as React from "react";
import * as BraftEditor from "braft-editor";
import {
	RawDraftContentState,
} from 'draft-js';
class BraftEditorTest extends React.Component<BraftEditor.editorProps> {
    state = {
        content: null
    };
    render() {
        const editorProps = {
            height: 500,
            initialContent: this.state.content,
            onChange: this.handleChange,
            onHTMLChange: this.handleHTMLChange
        };
        return (
            <div>
                <BraftEditor
                    {...editorProps}
                />
            </div>
          );
    }
    private readonly handleChange = (content: RawDraftContentState) => {
        console.log(content);
    }
    private readonly handleHTMLChange = (html: string) => {
        console.log(html);
    }
}
