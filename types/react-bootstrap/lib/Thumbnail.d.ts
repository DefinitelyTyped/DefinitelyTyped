import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sizes } from 'react-bootstrap';

declare namespace Thumbnail {
    export interface ThumbnailProps extends ReactDOM.HTMLProps<Thumbnail> {
        bsSize?: Sizes;
        bsStyle?: string;
    }
}
declare class Thumbnail extends React.Component<Thumbnail.ThumbnailProps> { }
export = Thumbnail;
