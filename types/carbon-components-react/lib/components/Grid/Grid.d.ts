/**
 * @author admin
 */

import * as React from "react";
import {ReactAttr} from "carbon-components-react/typings/shared";

interface InheritedProps extends ReactAttr<HTMLDivElement>{

}

export interface GridProps extends InheritedProps{

}

declare const Grid: React.FC<GridProps>;

export default Grid;
