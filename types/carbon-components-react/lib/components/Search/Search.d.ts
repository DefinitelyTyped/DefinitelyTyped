import * as React from "react";
import { ReactInputAttr, SizingProps } from "../../../typings/shared";

type ExcludedAttributes = "defaultValue" | "placeholder" | "ref" | "value";
interface InheritedProps extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    SizingProps
{ }

export interface SearchProps extends InheritedProps {
    closeButtonLabelText?: string,
    defaultValue?: string | number,
    labelText: NonNullable<React.ReactNode>,
    placeHolderText?: string,
    value?: string | number,
}

declare class Search extends React.Component<SearchProps> { }

export default Search;
