import * as React from 'react';
import DocumentTitle from 'react-document-title';

class TitleTest extends React.Component<any, any> {
    render() {
        return <DocumentTitle title="Test" />;
    }
}

class TitleTestOneChild extends React.Component<any, any> {
    render() {
        return <DocumentTitle title="Test">A Child</DocumentTitle>;
    }
}

class TitleTestOneReactChild extends React.Component<any, any> {
    render() {
        return <DocumentTitle title="Test"><div>A Child</div></DocumentTitle>;
    }
}
