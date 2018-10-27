import { ComponentType } from 'react';

import { TableProps } from '../../index';

declare function treeTableHOC<Props extends Partial<TableProps>>(
    Component: ComponentType<Props>
): ComponentType<Props>;

export default treeTableHOC;
