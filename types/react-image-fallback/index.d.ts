// Type definitions for react-image-fallback 8.0
// Project: https://github.com/socialtables/react-image-fallback
// Definitions by: Ben Smith <https://github.com/8enSmith>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export default class ReactImageFallback extends React.Component<
    ReactImageFallbackProps &
    React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
    >,
    any
    > { }

export interface ReactImageFallbackProps {
    src: string;
    fallbackImage: string | React.ReactElement | string[] | React.ReactElement[];
    initialImage?: string | React.ReactElement;
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
    onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
    initialTimeout?: number;
}
