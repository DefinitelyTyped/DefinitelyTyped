// Type definitions for react-show-more 2.0
// Project: https://github.com/One-com/react-show-more
// Definitions by: Naor Torgeman <https://github.com/naortor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface ReactShowMoreProps {
	lines?: number;
	more?: string;
	less?: string;
	children?: string;
	anchorClass?: string;
}

declare const ShowMore: React.ClassicComponentClass<ReactShowMoreProps>;
export default ShowMore;
