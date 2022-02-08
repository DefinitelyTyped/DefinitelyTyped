import { PureComponent, Validator, Requireable } from 'react';
import { Index, IndexRange } from '../../index';

export type InfiniteLoaderChildProps = {
    onRowsRendered: (params: IndexRange) => void;
    registerChild: (registeredChild: any) => void;
};

export type InfiniteLoaderProps = {
    /**
     * Function responsible for rendering a virtualized component.
     * This function should implement the following signature:
     * ({ onRowsRendered, registerChild }) => PropTypes.element
     *
     * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
     * The :registerChild callback should be set as the virtualized component's :ref.
     */
    children: (props: InfiniteLoaderChildProps) => React.ReactNode;
    /**
     * Function responsible for tracking the loaded state of each row.
     * It should implement the following signature: ({ index: number }): boolean
     */
    isRowLoaded: (params: Index) => boolean;
    /**
     * Callback to be invoked when more rows must be loaded.
     * It should implement the following signature: ({ startIndex, stopIndex }): Promise
     * The returned Promise should be resolved once row data has finished loading.
     * It will be used to determine when to refresh the list with the newly-loaded data.
     * This callback may be called multiple times in reaction to a single scroll event.
     */
    loadMoreRows: (params: IndexRange) => Promise<any>;
    /**
     * Minimum number of rows to be loaded at a time.
     * This property can be used to batch requests to reduce HTTP requests.
     */
    minimumBatchSize?: number | undefined;
    /**
     * Number of rows in list; can be arbitrary high number if actual number is unknown.
     */
    rowCount?: number | undefined;
    /**
     * Threshold at which to pre-fetch data.
     * A threshold X means that data will start loading when a user scrolls within X rows.
     * This value defaults to 15.
     */
    threshold?: number | undefined;
    /**
     * PLEASE NOTE
     * The [key: string]: any; line is here on purpose
     * This is due to the need of force re-render of PureComponent
     * Check the following link if you want to know more
     * https://github.com/bvaughn/react-virtualized#pass-thru-props
     */
    [key: string]: any;
};

/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */
export class InfiniteLoader extends PureComponent<InfiniteLoaderProps> {
    static propTypes: {
        children: Validator<(props: InfiniteLoaderChildProps) => React.ReactNode>;
        isRowLoaded: Validator<(params: Index) => boolean>;
        loadMoreRows: Validator<(params: IndexRange) => Promise<any>>;
        minimumBatchSize: Validator<number>;
        rowCount: Validator<number>;
        threshold: Validator<number>;
    };

    static defaultProps: {
        minimumBatchSize: 10;
        rowCount: 0;
        threshold: 15;
    };

    resetLoadMoreRowsCache(autoReload?: boolean): void;
}

export default InfiniteLoader;
