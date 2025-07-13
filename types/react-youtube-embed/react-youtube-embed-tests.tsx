import * as React from "react";
import YouTubeEmbed from "react-youtube-embed";

// @ts-expect-error - `props.id` is required
<YouTubeEmbed />;

// With required props
<YouTubeEmbed id="XlcOr7pWdFo" />;

// With optional props
<YouTubeEmbed
    id="XlcOr7pWdFo"
    aspectRatio="16:9"
    prependSrc="https://www.youtube.com/embed/"
    appendSrc=""
    width="1080px"
/>;
