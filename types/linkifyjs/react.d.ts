import * as React from "react";
import { LinkifyOptions } from "./index";

interface LinkifyProps {
    options: LinkifyOptions;
}

declare class Linkify extends React.Component<LinkifyProps> {}

export { LinkifyProps };

export default Linkify;
