import * as React from 'react';

declare namespace MediaLeft {
    export interface MediaLeftProps extends React.HTMLProps<MediaLeft> {
        align?: string | undefined;
    }
}
declare class MediaLeft extends React.Component<MediaLeft.MediaLeftProps> { }
export = MediaLeft;
