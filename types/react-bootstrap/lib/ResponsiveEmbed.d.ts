import * as React from 'react';

declare class ResponsiveEmbed extends React.Component<ResponsiveEmbedProps> { }
declare namespace ResponsiveEmbed { }
export = ResponsiveEmbed

interface ResponsiveEmbedProps extends React.HTMLProps<ResponsiveEmbed> {
  a16by9?: boolean;
  a4by3?: boolean;
  bsClass?: string;
}
