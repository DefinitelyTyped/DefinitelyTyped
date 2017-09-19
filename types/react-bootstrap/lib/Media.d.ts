import * as React from 'react';
import * as MediaBody from './MediaBody';
import * as MediaHeading from './MediaHeading';
import * as MediaLeft from './MediaLeft';
import * as MediaList from './MediaList';
import * as MediaListItem from './MediaListItem';
import * as MediaRight from './MediaRight';

declare namespace Media {
    export interface MediaProps extends React.HTMLProps<Media> {
        componentClass?: React.ReactType;
    }
}
declare class Media extends React.Component<Media.MediaProps> {
    static Body: typeof MediaBody;
    static Heading: typeof MediaHeading;
    static Left: typeof MediaLeft;
    static Right: typeof MediaRight;
    static List: typeof MediaList;
    static ListItem: typeof MediaListItem;
}
export = Media;
