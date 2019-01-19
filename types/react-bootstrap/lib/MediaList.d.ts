import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace MediaList {
    export type MediaListProps = ReactDOM.HTMLProps<MediaList>;
}
declare class MediaList extends React.Component<MediaList.MediaListProps> { }
export = MediaList;
