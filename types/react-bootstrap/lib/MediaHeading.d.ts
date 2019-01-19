import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace MediaHeading {
    interface MediaHeadingProps extends ReactDOM.HTMLProps<MediaHeading> {
        componentClass?: React.ReactType;
    }
}
declare class MediaHeading extends React.Component<MediaHeading.MediaHeadingProps> { }
export = MediaHeading;
