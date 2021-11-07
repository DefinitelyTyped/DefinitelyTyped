// Type definitions for react-show-more-text 1.4
// Project: https://github.com/devzonetech/react-show-more-text
// Definitions by: Ewe Seong, Yeoh <https://github.com/eweseong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface ReactShowMoreTextProps {
    anchorClass?: string | undefined;
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    expanded?: boolean | undefined;
    keepNewLines?: boolean | undefined;
    less?: React.ReactNode | undefined;
    lines?: number | undefined;
    more?: React.ReactNode | undefined;
    onClick?: ((expanded: boolean) => void) | undefined;
    width?: number | undefined;
    truncatedEndingComponent?: React.ReactNode | undefined;
}

export class ReactShowMoreText extends React.Component<ReactShowMoreTextProps> { }

export default ReactShowMoreText;
