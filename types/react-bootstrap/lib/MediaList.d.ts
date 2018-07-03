import * as React from 'react';

declare namespace MediaList {
    export type MediaListProps = React.HTMLProps<MediaList>;
}
declare class MediaList extends React.Component<MediaList.MediaListProps> { render(): React.ReactNode }
export = MediaList;
