import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Image {
    export interface ImageProps extends ReactDOM.HTMLProps<Image> {
        circle?: boolean;
        responsive?: boolean;
        rounded?: boolean;
        thumbnail?: boolean;
    }
}
declare class Image extends React.Component<Image.ImageProps> { }
export = Image;
