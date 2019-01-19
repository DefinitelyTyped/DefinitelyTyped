import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Glyphicon {
    export interface GlyphiconProps extends ReactDOM.HTMLProps<Glyphicon> {
        // Required
        glyph: string;
        // Optional
        bsClass?: string;
    }
}
declare class Glyphicon extends React.Component<Glyphicon.GlyphiconProps> { }
export = Glyphicon;
