import * as React from "react";

export default class ReactImageFallback extends React.Component<
    & ReactImageFallbackProps
    & React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    >,
    any
> {}

export interface ReactImageFallbackProps {
    src?: string | undefined;
    fallbackImage: string | React.ReactElement | string[] | Array<string | undefined> | React.ReactElement[];
    initialImage?: string | React.ReactElement | undefined;
    onLoad?: ((event: React.SyntheticEvent<HTMLImageElement>) => void) | undefined;
    onError?: ((event: React.SyntheticEvent<HTMLImageElement>) => void) | undefined;
    initialTimeout?: number | undefined;
}
