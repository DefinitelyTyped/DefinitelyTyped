import * as React from "react";

interface Props {
  foo: string;
}

export const MyComponent: React.SFC<Props> = ({ foo: text }) => <span>{text}</span>;
