import { ComponentType } from 'react';

import { TableProps } from '../../index';
import { HOC } from './hoc-type';

interface TreeTableAdditionalProps {}

declare const treeTableHOC: HOC<Partial<TableProps>, TreeTableAdditionalProps>;

export default treeTableHOC;
