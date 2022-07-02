import * as React from 'react';
import ScrollableAnchor, { goToAnchor, goToTop, removeHash, configureAnchors } from "react-scrollable-anchor";

/*
 * goToAnchor
 */
// $ExpectType void
goToAnchor("one");
// @ts-expect-error
goToAnchor(1);

/*
 * goToTop
 */
// $ExpectType void
goToTop();
// @ts-expect-error
goToTop(1);

/*
 * removeHash
 */
// $ExpectType void
removeHash();
// @ts-expect-error
removeHash(1);

/*
 * configureAnchors
 */
// $ExpectType void
configureAnchors({ offset: 500, scrollDuration: 1000, keepLastAnchorHash: true });
// @ts-expect-error
configureAnchors();
// @ts-expect-error
configureAnchors({ wrongKey: 1 });
// @ts-expect-error
configureAnchors({ offset: 'string' });
// @ts-expect-error
configureAnchors({ scrollDuration: 'string' });
// @ts-expect-error
configureAnchors({ keepLastAnchorHash: 3 });

// @ts-expect-error
<ScrollableAnchor><div>Test</div></ScrollableAnchor>;

<ScrollableAnchor id="anchorId"><div>Test</div></ScrollableAnchor>;
