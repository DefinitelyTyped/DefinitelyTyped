import * as React from 'react';

declare class Glyphicon extends React.Component<GlyphiconProps> { }
declare namespace Glyphicon { }
export = Glyphicon

interface GlyphiconProps extends React.HTMLProps<Glyphicon> {
  // Required
  glyph: string;
}
