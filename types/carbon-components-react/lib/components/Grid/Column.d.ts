/**
 * @author admin
 */
import * as React from "react";
import {ReactAttr} from "carbon-components-react/typings/shared";

interface InheritedProps extends ReactAttr<HTMLDivElement>{

}

type ColumnSizing = number | {span: number, offset: number}

export interface ColumnProps extends InheritedProps{
    sm?: ColumnSizing;
    md?: ColumnSizing;
    lg?: ColumnSizing;
}

declare const Column: React.FC<ColumnProps>;

export default Column;
