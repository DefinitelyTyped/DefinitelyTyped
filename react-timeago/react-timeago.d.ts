// Type definitions for react-timeago v2.2.1
// Project: https://github.com/naman34/react-timeago
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "react-timeago" {
  import React = __React

  interface Props {
    date: string | Date | number;
    live?: boolean;
    formatter?: (value: number, unit: string, suffix: string, date: Date) => string;
    component?: string;
    minPeriod?: number;
    maxPeriod?: number;
    // [k: string]: any;
  }

  export default class ReactTimeago extends React.Component<Props, {}> {}
}
