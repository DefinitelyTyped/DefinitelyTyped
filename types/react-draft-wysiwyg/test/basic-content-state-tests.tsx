// From https://github.com/jpuri/react-draft-wysiwyg/blob/master/stories/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor, RawDraftContentState } from 'react-draft-wysiwyg';

class BasicContentState extends React.Component<{}, {contentState: RawDraftContentState}> {
    constructor(props: any) {
        super(props);
        this.state = {
            contentState: JSON
                .parse(`{
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

    render() {
        const {contentState} = this.state;
        return (<div>
            <span>Content state is JSON
                <pre>
                {'{"entityMap":{},"blocks":[{"key":"1ljs","text":"Initializing from content state","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}'}
                </pre>
            </span>
            <Editor
                defaultContentState={contentState}
            />
        </div>);
    }
}

ReactDOM.render(<BasicContentState />, document.getElementById('target'));
