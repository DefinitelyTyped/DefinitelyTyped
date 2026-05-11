import * as React from "react";
import { defaultStyles, FileIcon } from "react-file-icon";

class TestFileIcon extends React.Component {
    render() {
        return <FileIcon extension={"docx"} labelUppercase={true} {...defaultStyles.docx} />;
    }
}

class TestFileIconCode extends React.Component {
    render() {
        return <FileIcon extension={"docx"} type="code" color="aliceblue" />;
    }
}

class TestFileIconCode2 extends React.Component {
    render() {
        return <FileIcon extension={"docx"} type="code2" color="aliceblue" />;
    }
}

class TestFileIconAndroid extends React.Component {
    render() {
        return <FileIcon extension={"docx"} type="android" color="aliceblue" />;
    }
}
