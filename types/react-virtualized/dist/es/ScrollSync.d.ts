import { PureComponent, Validator, Requireable } from 'react'

export type OnScrollParams = {
    clientHeight: number,
    clientWidth: number,
    scrollHeight: number,
    scrollLeft: number,
    scrollTop: number,
    scrollWidth: number
}

export type ScrollSyncChildProps = {
    clientHeight: number,
    clientWidth: number,
    onScroll: (params: OnScrollParams) => void,
    scrollHeight: number,
    scrollLeft: number,
    scrollTop: number,
    scrollWidth: number
}

export type ScrollSyncProps = {
    /**
     * Function responsible for rendering 2 or more virtualized components.
     * This function should implement the following signature:
     * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
     */
    children?: (props: ScrollSyncChildProps) => React.ReactNode
    /**
     * PLEASE NOTE
     * The [key: string]: any; line is here on purpose
     * This is due to the need of force re-render of PureComponent
     * Check the following link if you want to know more
     * https://github.com/bvaughn/react-virtualized#pass-thru-props
     */
    [key: string]: any;
};

export type ScrollSyncState = {
    clientHeight: number,
    clientWidth: number,
    scrollHeight: number,
    scrollLeft: number,
    scrollTop: number,
    scrollWidth: number
};

/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */
export class ScrollSync extends PureComponent<ScrollSyncProps, ScrollSyncState> {
    static propTypes: {
        children: Validator<(props: ScrollSyncChildProps) => React.ReactNode>
    };

    constructor(props: ScrollSyncProps, context: any);

    render(): JSX.Element;
}
