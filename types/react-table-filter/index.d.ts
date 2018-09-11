// Type definitions for react-table-filter 1.0
// Project: https://github.com/cheekujha/react-table-filter
// Definitions by: Gnanavel N <https://github.com/gjsln>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface TabfilterProps {
    rows: string | string[] | { [name: string]: boolean; };
	onFilterUpdate: (filteredArray: string[], currentFilters: any[]) => any[] | void;
	rowClass?: string;
	initialFilters?: string | string[] | { [name: string]: boolean; };
}

export class TableFilter extends React.Component<TabfilterProps> {}
