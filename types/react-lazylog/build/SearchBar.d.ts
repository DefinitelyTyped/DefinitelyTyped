import { Component, CSSProperties, ReactNode } from "react";

export interface SearchBarProps {
    onSearch?: ((keyword: string) => void) | undefined;
    onClearSearch?: (() => void) | undefined;
    onFilterLinesWithMatches?: ((isFiltered: boolean) => void) | undefined;
    resultsCount?: number | undefined;
    filterActive?: boolean | undefined;
    disabled?: boolean | undefined;
}

export default class SearchBar extends Component<SearchBarProps> {
    static defaultProps: Partial<SearchBarProps>;
}
