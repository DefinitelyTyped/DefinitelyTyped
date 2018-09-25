// Type definitions for react-jss 8.6
// Project: https://github.com/cssinjs/react-jss#readme
// Definitions by: Sebastian Silbermann <https://github.com/eps1lon>, Alan Williams <https://github.com/amwill04>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9
import { createGenerateClassName, JSS, SheetsRegistry } from "jss";
import { createTheming, ThemeProvider, withTheme } from "theming";

import injectSheet from "./lib/injectSheet";
import JssProvider, { Props as JssProviderProps } from "./lib/JssProvider";

// re-export types
export * from "./lib/injectSheet";
export { JssProviderProps };
// library implementations
export const jss: JSS;
export {
  createGenerateClassName,
  createTheming,
  JssProvider,
  SheetsRegistry,
  ThemeProvider,
  withTheme
};
export default injectSheet;
