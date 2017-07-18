import * as React from 'react';

interface ResponsiveEmbedProps extends React.HTMLProps<ResponsiveEmbed> {
  a16by9?: boolean;
  a4by3?: boolean;
  bsClass?: string;
}

export default class ResponsiveEmbed extends React.Component<ResponsiveEmbedProps> { }
