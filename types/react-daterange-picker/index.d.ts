// Type definitions for React Daterange Picker 2.0
// Project: https://github.com/onefinestay/react-daterange-picker
// Definitions by: UNCOVER TRUTH Inc. <https://github.com/uncovertruth>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
//                 Donald Ford <https://github.com/donaldtf>
//                 Vlad Florescu <https://github.com/vladflorescu94>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as moment from 'moment';
import * as momentRange from 'moment-range';

export default class DateRangePicker extends React.Component<Props> {}
export as namespace ReactDateRangePicker;

/**
 * see {@link https://github.com/onefinestay/react-daterange-picker#available-props}
 */
export interface BaseProps<T = DateRangePicker> extends React.Props<T> {
    bemBlock?: string | undefined;
    bemNamespace?: string | undefined;
    className?: string | undefined;
    dateStates?: DateState[] | undefined;
    defaultState?: string | undefined;
    disableNavigation?: boolean | undefined;
    // Use Number Literal Types after TypeScript 2.0 GA released.
    firstOfWeek?: number | undefined; // React.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
    helpMessage?: string | undefined;
    initialFromValue?: boolean | undefined;
    initialDate?: Date | undefined;
    initialMonth?: number | undefined;
    initialYear?: number | undefined;
    initialRange?: {} | undefined;
    /**
     * @default moment().locale()
     */
    locale?: string | undefined;
    maximumDate?: Date | undefined;
    minimumDate?: Date | undefined;
    numberOfCalendars?: number | undefined;
    onHighlightDate?(date: Date): void;
    onHighlightRange?(date: Date): void;
    onSelectStart?(value: momentRange.MomentRange & typeof moment): void;
    paginationArrowComponent?: React.ComponentClass<PaginationArrowProps> | React.SFC<PaginationArrowProps> | undefined;
    selectedLabel?: string | undefined;
    singleDateRange?: boolean | undefined;
    showLegend?: boolean | undefined;
    stateDefinitions?: StateDefinitions | undefined;
    value?: (momentRange.MomentRange & typeof moment) | momentRange.DateRange | moment.Moment | undefined;
}

export interface RangeProps<T = DateRangePicker> extends BaseProps<T> {
    onSelect?(value: OnSelectCallbackParam): void;
    selectionType?: 'range' | undefined;
}

export interface SingleProps<T = DateRangePicker> extends BaseProps<T> {
    onSelect?(value: moment.Moment): void;
    selectionType?: 'single' | undefined;
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
    selectable?: boolean | undefined;
}

export interface PaginationArrowProps<T = {}> extends React.Props<T> {
    disabled?: boolean | undefined;
    onTrigger?(): void;
    direction?: 'next' | 'previous' | undefined;
}

export interface OnSelectCallbackParam {
    start: moment.Moment;
    end: moment.Moment;
}
