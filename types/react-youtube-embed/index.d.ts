import * as React from "react";

declare namespace YouTubeEmbed {
    interface YouTubeEmbedProps {
        id: string;

        /**
         * Set an aspect ratio or percentage.
         * @default "16:9"
         */
        aspectRatio?: string | undefined;

        /**
         * Prepends a string to the embed URL (before the YouTube ID).
         * @default "https://www.youtube.com/embed/"
         */
        prependSrc?: string | undefined;

        /**
         * Appends a string to the embed URL.
         * @default ""
         */
        appendSrc?: string | undefined;

        width?: number | string | undefined;
    }
}

declare class YouTubeEmbed extends React.Component<YouTubeEmbed.YouTubeEmbedProps> {}

export = YouTubeEmbed;
