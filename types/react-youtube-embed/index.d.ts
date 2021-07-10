// Type definitions for react-youtube-embed 1.0
// Project: https://github.com/escaladesports/react-youtube-embed#readme
// Definitions by: Charles Salmon <https://github.com/charles-salmon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface YouTubeEmbedProps {
    id: string;
    aspectRatio?: string | undefined;
    prependSrc?: string | undefined;
    appendSrc?: string | undefined;
    width?: number | undefined;
}

export default class YouTubeEmbed extends React.Component<YouTubeEmbedProps> {}
