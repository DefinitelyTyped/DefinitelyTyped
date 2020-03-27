import { Component, ReactNode, CSSProperties } from "react";

export interface SearchBarProps {
  onSearch?: (keyword: string) => void;
  onClearSearch?: () => void;
  onFilterLinesWithMatches?: (isFiltered: boolean) => void;
  resultsCount?: number;
  filterActive?: boolean;
  disabled?: boolean;
}

export default class SearchBar extends Component<SearchBarProps> {
  static defaultProps: Partial<SearchBarProps>;
}
