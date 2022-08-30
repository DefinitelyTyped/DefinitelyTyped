import * as React from 'react';

declare namespace MediaBody {
    export interface MediaBodyProps extends React.ClassAttributes<MediaBody> {
        children?: React.ReactNode;
        componentClass?: React.ElementType | undefined;
    }
}
declare class MediaBody extends React.Component<MediaBody.MediaBodyProps> { }
export = MediaBody;
