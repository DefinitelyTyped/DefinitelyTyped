import Youtube = require("react-lazyload-youtube");

// @ts-expect-error Missing props
<Youtube />;
// @ts-expect-error Invalid imgSize
<Youtube videoId="foo" imgSize="bar" />;

<Youtube videoId="foo" />;
<Youtube videoId="foo" width="100px" height="100px" imgSize="hqdefault" />;
