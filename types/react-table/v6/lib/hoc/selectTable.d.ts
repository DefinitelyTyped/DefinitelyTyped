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
    keyField?: string | undefined;

    isSelected?: ((key: string) => boolean) | undefined;

    selectAll?: boolean | undefined;

    toggleAll?: SelectAllInputComponentProps['onClick'] | undefined;

    toggleSelection?: SelectInputComponentProps['onClick'] | undefined;

    /**
     * Default: checkbox
     */
    selectType?: SelectType | undefined;
    selectWidth?: number | undefined;
    SelectInputComponent?: ComponentType<SelectInputComponentProps> | undefined;
    SelectAllInputComponent?: ComponentType<SelectAllInputComponentProps> | undefined;
}

export interface SelectTableHOCOptions {
    /**
     * Default: false
     */
    floatingLeft?: boolean | undefined;
}

declare function selectTableHOC<Props extends Partial<TableProps>>(
    WrappedComponent: ComponentType<Props>,
    options?: SelectTableHOCOptions
): ComponentClass<Props & SelectTableAdditionalProps>;

export default selectTableHOC;
