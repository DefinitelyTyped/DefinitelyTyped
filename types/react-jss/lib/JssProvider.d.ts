import * as React from "react";

import { GenerateClassName, JSS, SheetsRegistry } from "jss";

export interface Props {
  children: React.ReactNode;
  classNamePrefix?: string;
  disableStylesGeneration?: boolean;
  jss?: JSS;
  generateClassName?: GenerateClassName;
  registry?: SheetsRegistry;
}

export default class JssProvider extends React.Component<Props> {}
