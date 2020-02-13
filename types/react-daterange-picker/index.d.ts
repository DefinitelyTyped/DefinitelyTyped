// Type definitions for React Daterange Picker 2.0
// Project: https://github.com/onefinestay/react-daterange-picker
// Definitions by: UNCOVER TRUTH Inc. <https://github.com/uncovertruth>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
//                 Donald Ford <https://github.com/donaldtf>
//                 Vlad Florescu <https://github.com/vladflorescu94>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as moment from 'moment';
import * as momentRange from 'moment-range';

export default class DateRangePicker extends React.Component<Props> {}
export as namespace ReactDateRangePicker;

export interface BaseProps<T = DateRangePicker> extends React.Props<T> {
    bemBlock?: string;
    bemNamespace?: string;
    dateStates?: DateState[];
    defaultState?: string;
    disableNavigation?: boolean;
    // Use Number Literal Types after TypeScript 2.0 GA released.
    firstOfWeek?: number; // React.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
    helpMessage?: string;
    initialFromValue?: boolean;
    initialDate?: Date;
    initialMonth?: number;
    initialYear?: number;
    initialRange?: {};
    maximumDate?: Date;
    minimumDate?: Date;
    numberOfCalendars?: number;
    onHighlightDate?(date: Date): void;
    onHighlightRange?(date: Date): void;
    onSelectStart?(value: momentRange.MomentRange & typeof moment): void;
    paginationArrowComponent?: React.ComponentClass<PaginationArrowProps> | React.SFC<PaginationArrowProps>;
    selectedLabel?: string;
    singleDateRange?: boolean;
    showLegend?: boolean;
    stateDefinitions?: StateDefinitions;
    value?: (momentRange.MomentRange & typeof moment) | momentRange.DateRange | moment.Moment;
}

export interface RangeProps<T = DateRangePicker> extends BaseProps<T> {
    onSelect?(value: OnSelectCallbackParam): void;
    selectionType?: 'range';
}

export interface SingleProps<T = DateRangePicker> extends BaseProps<T> {
    onSelect?(value: moment.Moment): void;
    selectionType?: 'single';
}

export type Props<T = DateRangePicker> = RangeProps<T> | SingleProps<T>;

export interface DateState {
    state: string;
    range: momentRange.DateRange;
}

export interface StateDefinitions {
    [key: string]: StateDefinition;
}

export interface StateDefinition {
    color: string;
    label: string;
    selectable?: boolean;
}

export interface PaginationArrowProps<T = {}> extends React.Props<T> {
    disabled?: boolean;
    onTrigger?(): void;
    direction?: 'next' | 'previous';
}

export interface OnSelectCallbackParam {
    start: moment.Moment;
    end: moment.Moment;
}
