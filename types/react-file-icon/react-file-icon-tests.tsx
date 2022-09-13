import * as React from 'react';
import { FileIcon, defaultStyles } from 'react-file-icon';

class TestFileIcon extends React.Component {
    render() {
        return <FileIcon extension={'docx'} labelUppercase={true} {...defaultStyles.docx} />;
    }
}
