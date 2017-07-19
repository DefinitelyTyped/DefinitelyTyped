import * as React from 'react';

declare class Position extends React.Component<Position.PositionProps> { }
export = Position;

declare namespace Position {
  interface PositionProps {
    /**
     * A node, element, or function that returns either. The child will be
     * be positioned next to the `target` specified.
     */
    target?: React.ReactNode | Function;

    /**
     * "offsetParent" of the component
     */
    container?: React.ReactNode | Function;

    /**
     * Minimum spacing in pixels between container border and component border
     */
    containerPadding?: number;

    /**
     * How to position the component relative to the target
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';

    /**
     * Whether the position should be changed on each update
     */
    shouldUpdatePosition?: boolean;
  }
}
