import { ComponentType } from 'react';

import { TableProps } from '../../index';
import { HOC } from './hoc-type';

export type SelectType = 'checkbox' | 'radio';

export interface SelectInputComponentProps {
    selectType: SelectType;
    onClick: (key: string, shiftKeyPressed: boolean, row: any) => any;
    checked: boolean;
    id: string;
    row: any;
}

export interface SelectAllInputComponent {
    selectType: SelectType;
    checked: boolean;
    onClick: () => any;
}

export interface SelectTableAdditionalProps {
    /**
     * Default: _id
     */
    keyField?: string;

    isSelected?: (key: string) => boolean;

    selectAll?: boolean;

    toggleAll?: SelectAllInputComponent['onClick'];

    toggleSelection?: SelectInputComponentProps['onClick'];

    /**
     * Default: checkbox
     */
    selectType?: SelectType;

    SelectInputComponent?: ComponentType<SelectInputComponentProps>;
    SelectAllInputComponent?: ComponentType<SelectAllInputComponent>;
}

declare const selectTableHOC: HOC<
    Partial<TableProps>,
    SelectTableAdditionalProps
>;

export default selectTableHOC;
