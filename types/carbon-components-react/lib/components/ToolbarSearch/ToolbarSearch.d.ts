import * as React from "react";
import { ReactAttr, ReactInputAttr, SizingProps } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactInputAttr, "placeholder">, SizingProps {}

/**
 * @deprecated
 */
export interface ToolbarSearchProps extends InheritedProps {
    labelId?: ReactAttr["id"] | undefined;
    labelText?: React.ReactNode | undefined;
    placeHolderText?: string | undefined;
}

/**
 * @deprecated
 */
declare class ToolbarSearch extends React.Component<ToolbarSearchProps> {}

export default ToolbarSearch;
