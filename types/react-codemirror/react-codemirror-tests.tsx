import * as CodeMirror from "codemirror";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Codemirror from "react-codemirror";

class CodemirrorTest extends React.Component<React.Props<{}>> {
    private editorRef: ReactCodeMirror.ReactCodeMirror;

    componentDidMount() {
        this.editorRef.focus();
        this.editorRef.getCodeMirror();
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
                        ref={(r: ReactCodeMirror.ReactCodeMirror) => this.editorRef = r}
                        value="foo bar" />
        </div>;
    }
}
