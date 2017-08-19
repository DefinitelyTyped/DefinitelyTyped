import { PropTypes, PureComponent, Validator, Requireable } from 'react'

export type OnSectionRenderedParams = {
    columnStartIndex: number,
    columnStopIndex: number,
    rowStartIndex: number,
    rowStopIndex: number
}

export type ChildProps = {
    onSectionRendered: (params: OnSectionRenderedParams) => void,
    scrollToColumn: number,
    scrollToRow: number
};
/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */
export type ArrowKeyStepperProps = {
    children?: (props: ChildProps) => React.ReactNode;
    className?: string;
    columnCount: number;
    rowCount: number;
    mode?: 'edges' | 'cells';
}
export type ScrollIndexes = {
    scrollToRow: number,
    scrollToColumn: number
}
export class ArrowKeyStepper extends PureComponent<ArrowKeyStepperProps, ScrollIndexes> {
    static defaultProps: {
        disabled: false,
        mode: 'edges',
        scrollToColumn: 0,
        scrollToRow: 0
    };

    static propTypes: {
        children: Validator<(props: ChildProps) => React.ReactNode>,
        className: Requireable<string>,
        columnCount: Validator<number>,
        disabled: Validator<boolean>,
        mode: Validator<'cells' | 'edges'>,
        rowCount: Validator<number>,
        scrollToColumn: Validator<number>,
        scrollToRow: Validator<number>
    };

    constructor(props: ArrowKeyStepperProps, context: any);

    componentWillReceiveProps(nextProps: ArrowKeyStepperProps): void;

    setScrollIndexes(params: ScrollIndexes): void;

    render(): JSX.Element;
}
