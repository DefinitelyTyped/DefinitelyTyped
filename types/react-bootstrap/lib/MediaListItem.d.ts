import * as React from 'react';

declare namespace MediaListItem {
    interface MediaListItemProps extends React.HTMLProps<MediaListItem> {
        componentClass?: React.ReactType | undefined;
    }
}
declare class MediaListItem extends React.Component<MediaListItem.MediaListItemProps> { }
export = MediaListItem;
