import * as React from 'react';

interface ImageProps extends React.HTMLProps<Image> {
  circle?: boolean;
  responsive?: boolean;
  rounded?: boolean;
  thumbnail?: boolean;
}

export default class Image extends React.Component<ImageProps> { }
