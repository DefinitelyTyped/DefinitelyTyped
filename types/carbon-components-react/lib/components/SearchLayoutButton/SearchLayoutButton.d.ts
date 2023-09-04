import * as React from "react";

export type SearchLayoutButtonFormat = "grid" | "list";

/**
 * @deprecated
 */
export interface SearchLayoutButtonProps {
    format?: SearchLayoutButtonFormat | undefined;
    iconDescriptionGrid?: string | undefined;
    iconDescriptionList?: string | undefined;
    labelText?: string | undefined;
    onChangeFormat?(data: { format: NonNullable<SearchLayoutButtonProps["format"]> }): void;
}

/**
 * @deprecated
 */
declare class SearchLayoutButton extends React.Component<SearchLayoutButtonProps> {}

export default SearchLayoutButton;
