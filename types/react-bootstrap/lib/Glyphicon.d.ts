import * as React from 'react';

interface GlyphiconProps extends React.HTMLProps<Glyphicon> {
  // Required
  glyph: string;
}

export default class Glyphicon extends React.Component<GlyphiconProps> { }
