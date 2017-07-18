import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface ThumbnailProps extends React.HTMLProps<Thumbnail> {
  bsSize?: Sizes;
  bsStyle?: string;
}

export default class Thumbnail extends React.Component<ThumbnailProps> { }
