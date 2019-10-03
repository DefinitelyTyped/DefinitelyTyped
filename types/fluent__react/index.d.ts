// Type definitions for @fluent/react 0.10
// Project: http://projectfluent.org
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>, Mark Weaver <https://github.com/blushingpenguin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { FluentBundle } from "@fluent/bundle";

export { default as LocalizationProvider, Context, LocalizationProviderProps } from "./provider";
export { default as withLocalization, GetString, LocalizationProps, Omit } from "./with_localization";
export { default as Localized, LocalizedProps } from "./localized";
export { default as ReactLocalization, ReactLocalizationNotification, isReactLocalization }
  from "./localization";
