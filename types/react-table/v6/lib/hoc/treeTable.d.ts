import { ComponentClass, ComponentType } from "react";

import { TableProps } from "../../index";

declare function treeTableHOC<Props extends Partial<TableProps>>(
    WrappedComponent: ComponentType<Props>,
): ComponentClass<Props>;

export default treeTableHOC;
