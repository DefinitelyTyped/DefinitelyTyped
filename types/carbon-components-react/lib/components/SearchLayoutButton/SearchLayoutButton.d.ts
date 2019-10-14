import * as React from "react";

interface InheritedProps { }

export type SearchLayoutButtonFormat = "grid" | "list";

export interface SearchLayoutButtonProps extends InheritedProps {
    format?: SearchLayoutButtonFormat,
    iconDescriptionGrid?: string,
    iconDescriptionList?: string,
    labelText?: string,
    onChangeFormat?(data: { format: NonNullable<SearchLayoutButtonProps["format"]> }): void,
}

declare class SearchLayoutButton extends React.Component<SearchLayoutButtonProps> { }

export default SearchLayoutButton;
