import * as React from 'react';

declare class MediaListItem extends React.Component<MediaListItemProps> { }
declare namespace MediaListItem { }
export = MediaListItem

interface MediaListItemProps extends React.HTMLProps<MediaListItem> {
  componentClass?: React.ReactType;
}
