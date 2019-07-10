import * as React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser';

class HtmlComponent extends React.Component {
    render() {
        const html = '<div>Example HTML string</div>';
        return <div>{ReactHtmlParser(html)}</div>;
    }
}

const transform = (node: any, index: number): React.ReactElement | void => {
    // convert <ul> to <ol>
    if (node.type === 'tag' && node.name === 'ul') {
        node.name = 'ol';
        return convertNodeToElement(node, index, transform);
    }
};

class HtmlComponentWithTransform extends React.Component {
    render() {
        const html = '<div>Example HTML string</div>';
        return (
            <div>
                {ReactHtmlParser(html, { transform })}
            </div>
        );
    }
}
