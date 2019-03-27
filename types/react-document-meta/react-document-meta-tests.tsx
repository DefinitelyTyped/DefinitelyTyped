import * as React from 'react';
import DocumentMeta from 'react-document-meta';

class Test extends React.Component<any, any> {
    render() {
        return (
            <DocumentMeta title="title" description="description" canonical="canonical" >
                <div>some child</div>
            </DocumentMeta>
        );
    }
}

class TestWithDefaultProps extends React.Component<any, any> {
    render() {
        return (
            <DocumentMeta>
                <div>some child</div>
            </DocumentMeta>
        );
    }
}
