import * as React from 'react';

interface Props {
  text: string;
}

export const AComponent: React.FC<Props> = ({ text }) => <span>{text}</span>;
