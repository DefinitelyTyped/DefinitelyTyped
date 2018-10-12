import linkifyjs = require('./index');
import React = require('react');

export interface Props extends linkifyjs.Options {
    tagName?: string;
    options?: linkifyjs.Options;
}

declare class Linkify extends React.Component<Props> {}

export default Linkify;
