import * as React from 'react';

interface Props {
  text: string;
}

export const AComponent: React.SFC<Props> = ({ text }) => <span>{text}</span>;
