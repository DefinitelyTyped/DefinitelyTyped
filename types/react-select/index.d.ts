// Type definitions for react-select 3.0
// Project: https://github.com/JedWatson/react-select#readme
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
//                 Jon Freedman <https://github.com/jonfreedman>
//                 Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { StateManager } from './src/stateManager';

export default StateManager;

export { createFilter, Config as CreateFilterConfig, Option as CreateFilterOption } from './src/filters';
export { components } from './src/components/index';
export { mergeStyles, Styles, StylesConfig, GetStyles } from './src/styles';
export {
    ActionMeta,
    ActionTypes,
    ClassNameList,
    ClassNamesState,
    CommonProps,
    FocusDirection,
    FocusEventHandler,
    GroupedOptionsType,
    GroupType,
    InnerRef,
    InputActionMeta,
    InputActionTypes,
    KeyboardEventHandler,
    MenuPlacement,
    MenuPosition,
    MouseEventHandler,
    OptionProps,
    OptionsInnerProps,
    OptionStateProps,
    OptionsType,
    PropsWithInnerRef,
    PropsWithStyles,
    Theme,
    ThemeSpacing,
    ValueType,
} from './src/types';
