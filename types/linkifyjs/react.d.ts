import React = require("react");
import { Options } from "./index";

export interface LinkifyProps {
    options?: Options;
    tagName?: string;
}

export default class Linkify extends React.Component<LinkifyProps> {}
