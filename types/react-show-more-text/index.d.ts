// Type definitions for react-show-more-text 1.4
// Project: https://github.com/devzonetech/react-show-more-text
// Definitions by: Ewe Seong, Yeoh <https://github.com/eweseong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface ReactShowMoreTextProps {
    anchorClass?: string;
    children?: React.ReactNode;
    className?: string;
    expanded?: boolean;
    keepNewLines?: boolean;
    less?: React.ReactNode;
    lines?: number;
    more?: React.ReactNode;
    onClick?: (expanded: boolean) => void;
    width?: number;
}

export class ReactShowMoreText extends React.Component<ReactShowMoreTextProps> { }

export default ReactShowMoreText;
