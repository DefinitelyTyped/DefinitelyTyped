import * as React from "react";

export interface YouTubeEmbedProps {
    id: string;
    aspectRatio?: string | undefined;
    prependSrc?: string | undefined;
    appendSrc?: string | undefined;
    width?: number | undefined;
}

export default class YouTubeEmbed extends React.Component<YouTubeEmbedProps> {}
