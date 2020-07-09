import * as React from "react";
import { ReactInputAttr, CarbonInputSize, SizingProps } from "../../../typings/shared";

type ExcludedAttributes = "defaultValue" | "placeholder" | "ref" | "size" | "value";
interface InheritedProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    /**
     * @deprecated
     */
    small?: SizingProps["small"],
}

export interface SearchProps extends InheritedProps {
    closeButtonLabelText?: string,
    defaultValue?: string | number,
    labelText: NonNullable<React.ReactNode>,
    placeHolderText?: string,
    size?: CarbonInputSize,
    value?: string | number,
}

declare class Search extends React.Component<SearchProps> { }

export default Search;
