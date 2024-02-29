import * as React from "react";

export interface TabfilterProps {
    rows: string | string[] | { [name: string]: boolean };
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onFilterUpdate: (filteredArray: string[], currentFilters: any[]) => any[] | void;
    rowClass?: string | undefined;
    initialFilters?: string | string[] | { [name: string]: boolean } | undefined;
}

export class TableFilter extends React.Component<TabfilterProps> {}
