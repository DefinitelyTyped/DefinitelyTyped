// Type definitions for react-responsive-embed 2.1
// Project: https://github.com/tableflip/react-responsive-embed
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentType } from 'react';

type Props = { ratio?: string; } & JSX.IntrinsicElements['iframe'];
declare const ResponsiveEmbed: ComponentType<Props>;

export = ResponsiveEmbed;
