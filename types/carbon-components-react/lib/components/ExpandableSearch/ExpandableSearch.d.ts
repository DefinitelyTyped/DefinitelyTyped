import * as React from "react";
import { SearchProps } from "../Search";

type ExcludedPropKeys = "onBlur" | "onFocus" | "ref";
export interface ExpandableSearchProps extends Omit<SearchProps, ExcludedPropKeys> { }

declare const ExpandableSearch: React.FC<ExpandableSearchProps>;

export default ExpandableSearch;
