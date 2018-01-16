// Type definitions for material-ui-pagination 1.0
// Project: https://github.com/lo-tp/material-ui-pagination
// Definitions by: m0a <https://m0a.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import * as React from 'react';
export interface PaginationProps {
	total: number;
	display: number;
	current: number;
	onChange(value: number): void;
}
declare class Pagination extends React.Component<PaginationProps, {}> {}
export default Pagination;
