import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace MediaListItem {
    interface MediaListItemProps extends ReactDOM.HTMLProps<MediaListItem> {
        componentClass?: React.ReactType;
    }
}
declare class MediaListItem extends React.Component<MediaListItem.MediaListItemProps> { }
export = MediaListItem;
