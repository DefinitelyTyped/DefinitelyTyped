import * as React from 'react';

declare namespace ResponsiveEmbed {
    export interface ResponsiveEmbedProps extends React.HTMLProps<ResponsiveEmbed> {
        a16by9?: boolean | undefined;
        a4by3?: boolean | undefined;
        bsClass?: string | undefined;
    }
}
declare class ResponsiveEmbed extends React.Component<ResponsiveEmbed.ResponsiveEmbedProps> { }
export = ResponsiveEmbed;
