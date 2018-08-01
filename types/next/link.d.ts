import * as url from "url";
import * as React from "react";

export type UrlLike = url.UrlObject | url.Url;
export interface LinkState {
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

export default class extends React.Component<LinkState> {}
