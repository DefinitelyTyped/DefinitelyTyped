import { PureComponent, Validator, Requireable } from 'react';
import * as PropTypes from 'prop-types';
import { RenderedSection } from './Grid';

export type OnSectionRenderedParams = RenderedSection;

export type ChildProps = {
    onSectionRendered: (params: RenderedSection) => void;
    scrollToColumn: number;
    scrollToRow: number;
};
/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */
export type ArrowKeyStepperProps = {
    children: (props: ChildProps) => React.ReactNode;
    className?: string;
    columnCount: number;
    rowCount: number;
    mode?: 'edges' | 'cells';
    disabled?: boolean;
    isControlled?: boolean;
    onScrollToChange?: (params: ScrollIndices) => void;
    scrollToColumn?: number;
    scrollToRow?: number;
    /**
     * PLEASE NOTE
     * The [key: string]: any; line is here on purpose
     * This is due to the need of force re-render of PureComponent
     * Check the following link if you want to know more
     * https://github.com/bvaughn/react-virtualized#pass-thru-props
     */
    [key: string]: any;
};
export type ScrollIndices = {
    scrollToRow: number;
    scrollToColumn: number;
};

export type ScrollIndexes = ScrollIndices;

export class ArrowKeyStepper extends PureComponent<ArrowKeyStepperProps, ScrollIndices> {
    static defaultProps: {
        disabled: false;
        isControlled: false;
        mode: 'edges';
        scrollToColumn: 0;
        scrollToRow: 0;
    };
}
