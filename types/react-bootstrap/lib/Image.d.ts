import * as React from 'react';

declare namespace Image {
    export interface ImageProps extends React.HTMLProps<Image> {
        circle?: boolean | undefined;
        responsive?: boolean | undefined;
        rounded?: boolean | undefined;
        thumbnail?: boolean | undefined;
    }
}
declare class Image extends React.Component<Image.ImageProps> { }
export = Image;
