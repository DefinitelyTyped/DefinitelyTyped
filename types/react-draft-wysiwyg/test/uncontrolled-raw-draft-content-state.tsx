// From https://github.com/jpuri/react-draft-wysiwyg/blob/master/docs/src/components/Docs/Props/EditorStateProp/index.js#L125

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Editor, RawDraftContentState } from "react-draft-wysiwyg";

class UncontrolledEditor extends React.Component<
    {},
    { contentState: RawDraftContentState }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            contentState: JSON.parse(`{
                "entityMap":{},
                "blocks":[{
                    "key":"1ljs",
                    "text":"Initializing from content state",
                    "type":"unstyled",
                    "depth":0,
                    "inlineStyleRanges":[],
                    "entityRanges":[],
                    "data":{}
                }]
            }`)
        };
    }

    onContentStateChange = (contentState: RawDraftContentState) => {
        this.setState({
            contentState
        });
    }

    render() {
        const { contentState } = this.state;
        return (
            <Editor
                initialContentState={contentState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onContentStateChange={this.onContentStateChange}
            />
        );
    }
}

ReactDOM.render(<UncontrolledEditor />, document.getElementById("target"));
