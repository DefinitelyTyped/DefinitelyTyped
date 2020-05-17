/**
 * @author admin
 */
import * as React from 'react';
import { ReactAttr } from 'carbon-components-react/typings/shared';

interface InheritedProps extends ReactAttr<HTMLDivElement> {}

export interface RowProps extends InheritedProps {}

declare const Row: React.FC<RowProps>;

export default Row;
