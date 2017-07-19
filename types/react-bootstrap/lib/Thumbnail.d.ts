import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare class Thumbnail extends React.Component<ThumbnailProps> { }
declare namespace Thumbnail { }
export = Thumbnail

interface ThumbnailProps extends React.HTMLProps<Thumbnail> {
  bsSize?: Sizes;
  bsStyle?: string;
}
