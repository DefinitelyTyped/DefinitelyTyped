import { ComponentType, ComponentClass } from 'react';

import { TableProps } from '../../index';

declare function treeTableHOC<Props extends Partial<TableProps<any>>>(
    WrappedComponent: ComponentType<Props>
): ComponentClass<Props>;

export default treeTableHOC;
