import * as React from "react";
import * as ScrollIntoViewIfNeeded from "scroll-into-view-if-needed";

export interface ReactScrollIntoViewIfNeededProps extends React.HTMLProps<HTMLElement> {
    options?: ScrollIntoViewIfNeeded.Options | undefined;
    active?: boolean | undefined;
    elementType?: keyof JSX.IntrinsicElements | undefined;
}

export default class ReactScrollIntoViewIfNeeded extends React.Component<
    ReactScrollIntoViewIfNeededProps
> {}
