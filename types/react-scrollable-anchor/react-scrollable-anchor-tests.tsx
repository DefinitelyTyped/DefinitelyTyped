import * as React from 'react';
import ScrollableAnchor, { goToAnchor, goToTop, removeHash, configureAnchors } from "react-scrollable-anchor";

/*
 * goToAnchor
 */
// $ExpectType void
goToAnchor("one");
// $ExpectError
goToAnchor(1);

/*
 * goToTop
 */
// $ExpectType void
goToTop();
// $ExpectError
goToTop(1);

/*
 * removeHash
 */
// $ExpectType void
removeHash();
// $ExpectError
removeHash(1);

/*
 * configureAnchors
 */
// $ExpectType void
configureAnchors({ offset: 500, scrollDuration: 1000, keepLastAnchorHash: true });
// $ExpectError
configureAnchors();
// $ExpectError
configureAnchors({ wrongKey: 1 });
// $ExpectError
configureAnchors({ offset: 'string' });
// $ExpectError
configureAnchors({ scrollDuration: 'string' });
// $ExpectError
configureAnchors({ keepLastAnchorHash: 3 });

// $ExpectError
<ScrollableAnchor><div>Test</div></ScrollableAnchor>;

<ScrollableAnchor id="anchorId"><div>Test</div></ScrollableAnchor>;
