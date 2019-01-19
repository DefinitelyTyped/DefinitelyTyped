import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace ResponsiveEmbed {
    export interface ResponsiveEmbedProps extends ReactDOM.HTMLProps<ResponsiveEmbed> {
        a16by9?: boolean;
        a4by3?: boolean;
        bsClass?: string;
    }
}
declare class ResponsiveEmbed extends React.Component<ResponsiveEmbed.ResponsiveEmbedProps> { }
export = ResponsiveEmbed;
