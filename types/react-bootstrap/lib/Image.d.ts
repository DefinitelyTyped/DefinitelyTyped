import * as React from 'react';

declare class Image extends React.Component<ImageProps> { }
declare namespace Image { }
export = Image

interface ImageProps extends React.HTMLProps<Image> {
  circle?: boolean;
  responsive?: boolean;
  rounded?: boolean;
  thumbnail?: boolean;
}
