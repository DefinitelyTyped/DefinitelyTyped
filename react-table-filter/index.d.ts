// Type definitions for react-table-filter 1.0.0
// Project: https://github.com/cheekujha/react-table-filter
// Definitions by: Gnanavel N <https://github.com/gjsln/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface TabfilterProps {
    rows: string | Array<string> | { [name: string]: boolean; };
	onFilterUpdate: (filteredArray: Array<string>, currentFilters: any[]) => any[] | void;
	rowClass?: string;
	initialFilters?: string | Array<string> | { [name: string]: boolean; };
}

export declare class TableFilter extends React.Component<TabfilterProps> {}