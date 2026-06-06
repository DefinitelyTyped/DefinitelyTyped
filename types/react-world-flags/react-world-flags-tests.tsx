import * as React from "react";
import Flag from "react-world-flags";

// $ExpectType Element
<Flag code="nor" height="16" />;
// $ExpectType Element
<Flag code="foo" fallback={<span>Unknown</span>} />;
// $ExpectType Element
<Flag code="" height="42" fallback={<span>Does not exist.</span>} />;
// $ExpectType Element
<Flag code="xxx" height="42" />;

// @ts-expect-error
<Flag src="abc.com" />;
