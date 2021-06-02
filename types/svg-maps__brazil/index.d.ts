// Type definitions for @svg-maps/brazil 1.0
// Project: https://github.com/VictorCazanave/svg-maps/tree/master/packages/brazil
// Definitions by: Joao Sutel <https://github.com/joaosutel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line no-single-declare-module
declare module '@svg-maps/brazil' {
  export interface Location {
    path: string;
    id: string;
    name?: string;
  }

  export interface Map {
    viewBox: string;
    locations: Location[];
    label?: string;
  }

  const Brazil: Map;
  export default Brazil;
}
