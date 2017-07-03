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
        const onChange = (value: any) => console.log(value);
        const onFocusChange = (focused: boolean) => console.log(focused);
        const onScroll = (scrollInfo: CodeMirror.ScrollInfo) => console.log(scrollInfo.top);
        const codeMirrorInstance = CodeMirror(document.body);

        return <div>
            <Codemirror className="test-codemirror"
                        codeMirrorInstance={codeMirrorInstance}
                        onChange={onChange}
                        onFocusChange={onFocusChange}
                        onScroll={onScroll}
                        options={options}
                        path="editor"
                        ref={(r: ReactCodeMirror.ReactCodeMirror) => this.editorRef = r}
                        value="foo bar" />
        </div>;
    }
}
