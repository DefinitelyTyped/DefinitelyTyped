import * as React from "react";
import { ReactAttr, ReactInputAttr, SizingProps } from '../../../typings/shared';

interface InheritedProps extends
    Omit<ReactInputAttr, "placeholder">,
    SizingProps
{ }

/**
 * @deprecated
 */
export interface ToolbarSearchProps extends InheritedProps {
    labelId?: ReactAttr['id'];
    labelText?: React.ReactNode;
    placeHolderText?: string;
}

/**
 * @deprecated
 */
declare class ToolbarSearch extends React.Component<ToolbarSearchProps> { }

export default ToolbarSearch;
