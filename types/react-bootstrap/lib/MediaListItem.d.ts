import * as React from 'react';

interface MediaListItemProps extends React.HTMLProps<MediaListItem> {
  componentClass?: React.ReactType;
}

export default class MediaListItem extends React.Component<MediaListItemProps> { }
