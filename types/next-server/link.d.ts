import * as url from "url";
import * as React from "react";
import { UrlLike } from "./router";

export interface LinkProps {
    prefetch?: boolean;
    shallow?: boolean;
    scroll?: boolean;
    replace?: boolean;
    onError?(error: any): void;
    href?: string | UrlLike;
    as?: string | UrlLike;
    passHref?: boolean;
    children: React.ReactElement<any>;
}

export default class Link extends React.Component<LinkProps> {}
