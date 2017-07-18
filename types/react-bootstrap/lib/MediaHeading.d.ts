import * as React from 'react';

interface MediaHeadingProps extends React.HTMLProps<MediaHeading> {
  componentClass?: React.ReactType;
}

export default class MediaHeading extends React.Component<MediaHeadingProps> { }
