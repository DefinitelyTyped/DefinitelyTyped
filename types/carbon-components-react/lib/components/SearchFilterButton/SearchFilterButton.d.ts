import React = require("react");
import { ReactButtonAttr } from "../../../typings/shared";

/**
 * @deprecated
 */
export interface SearchFilterButtonProps extends ReactButtonAttr {
    iconDescription?: string | undefined;
    labelText?: string | undefined;
}

/**
 * @deprecated
 */
declare const SearchFilterButton: React.FC<SearchFilterButtonProps>;

export default SearchFilterButton;
