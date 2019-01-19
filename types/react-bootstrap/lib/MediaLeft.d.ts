import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace MediaLeft {
    export interface MediaLeftProps extends ReactDOM.HTMLProps<MediaLeft> {
        align?: string;
    }
}
declare class MediaLeft extends React.Component<MediaLeft.MediaLeftProps> { }
export = MediaLeft;
