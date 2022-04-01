import CodeMirror = require("codemirror");
import * as React from "react";
import * as ReactDOM from "react-dom";
import Codemirror = require("react-codemirror");

class CodemirrorTest extends React.Component {
    private editorRef: Codemirror | null = null;

    componentDidMount() {
        this.editorRef!.focus();
        this.editorRef!.getCodeMirror();
    }

    render() {
        const options = {
            lineNumbers: true,
            readOnly: false,
            mode: "markdown"
        };
        const onChange = (value: string, change: CodeMirror.EditorChange) => console.log(value, change);
        const onCursorActivity = (codemirror: CodeMirror.Editor) => console.log(codemirror);
        const onFocusChange = (focused: boolean) => console.log(focused);
        const onScroll = (scrollInfo: CodeMirror.ScrollInfo) => console.log(scrollInfo.top);

        return <div>
            <Codemirror className="test-codemirror"
                        autoFocus={true}
                        autoSave={true}
                        codeMirrorInstance={CodeMirror}
                        defaultValue="test"
                        name="editor"
                        onChange={onChange}
                        onCursorActivity={onCursorActivity}
                        onFocusChange={onFocusChange}
                        onScroll={onScroll}
                        options={options}
                        preserveScrollPosition={true}
                        ref={(r: Codemirror | null) => this.editorRef = r}
                        value="foo bar" />
        </div>;
    }
}
