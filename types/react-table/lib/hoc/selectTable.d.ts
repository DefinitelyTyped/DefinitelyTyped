import { ComponentType, ComponentClass } from 'react';

import { TableProps } from '../../index';

export type SelectType = 'checkbox' | 'radio';

export interface SelectInputComponentProps {
    selectType: SelectType;
    onClick: (key: string, shiftKeyPressed: boolean, row: any) => any;
    checked: boolean;
    id: string;
    row: any;
}

export interface SelectAllInputComponentProps {
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

    toggleAll?: SelectAllInputComponentProps['onClick'];

    toggleSelection?: SelectInputComponentProps['onClick'];

    /**
     * Default: checkbox
     */
    selectType?: SelectType;
    selectWidth?: number;
    SelectInputComponent?: ComponentType<SelectInputComponentProps>;
    SelectAllInputComponent?: ComponentType<SelectAllInputComponentProps>;
}

export interface SelectTableHOCOptions {
    /**
     * Default: false
     */
    floatingLeft?: boolean;
}

declare function selectTableHOC<Props extends Partial<TableProps>>(
    WrappedComponent: ComponentType<Props>,
    options?: SelectTableHOCOptions
): ComponentClass<Props & SelectTableAdditionalProps>;

export default selectTableHOC;
