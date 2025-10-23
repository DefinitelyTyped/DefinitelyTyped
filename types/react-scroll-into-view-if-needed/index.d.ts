import React = require("react");
import ScrollIntoViewIfNeeded = require("scroll-into-view-if-needed");

export interface ReactScrollIntoViewIfNeededProps extends React.HTMLProps<HTMLElement> {
    options?: ScrollIntoViewIfNeeded.Options | undefined;
    active?: boolean | undefined;
    elementType?: keyof React.JSX.IntrinsicElements | undefined;
}

export default class ReactScrollIntoViewIfNeeded extends React.Component<
    ReactScrollIntoViewIfNeededProps
> {}
