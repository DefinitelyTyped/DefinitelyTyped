import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace MediaRight {
    export interface MediaRightProps extends ReactDOM.HTMLProps<MediaRight> {
        align?: string;
    }
}
declare class MediaRight extends React.Component<MediaRight.MediaRightProps> { }
export = MediaRight;
