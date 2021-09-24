// Type definitions for react-select 4.0
// Project: https://github.com/JedWatson/react-select#readme
// Definitions by: Jon Freedman <https://github.com/jonfreedman>
//                 Nathan Bierema <https://github.com/Methuselah96>
//                 Thomas Chia <https://github.com/thchia>
//                 Joonas Rouhiainen <https://github.com/rjoonas>
//                 Kyle Holmberg <https://github.com/kylemh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { StateManager } from './src/stateManager';

export default StateManager;

export * from './src/types';
export { createFilter } from './src/filters';
export { mergeStyles, Styles, StylesConfig } from './src/styles';
export { defaultTheme } from './src/theme';

export { NonceProvider } from './src/NonceProvider';
export { Props, FormatOptionLabelMeta, NamedProps } from './src/Select';

export { components, SelectComponentsConfig, IndicatorComponentType } from './src/components';
export { ValueContainerProps, ContainerProps, IndicatorContainerProps } from './src/components/containers';
export { IndicatorProps } from './src/components/indicators';
export { ControlProps } from './src/components/Control';
export { GroupProps } from './src/components/Group';
export { InputProps } from './src/components/Input';
export { MenuProps, MenuListComponentProps } from './src/components/Menu';
export { MultiValueProps } from './src/components/MultiValue';
export { OptionProps } from './src/components/Option';
export { PlaceholderProps } from './src/components/Placeholder';
export { SingleValueProps } from './src/components/SingleValue';
