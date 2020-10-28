// Type definitions for @carbon/icons-react 10.19
// Project: https://github.com/carbon-design-system/carbon/tree/master/packages/icons-react
// Definitions by: Eric Liu <https://github.com/metonym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

export interface CarbonIconProps
    extends Omit<React.SVGProps<React.ReactSVGElement>, 'ref' | 'tabIndex' | 'aria-hidden'> {
    'aria-hidden'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    height?: number;
    preserveAspectRatio?: string;
    tabIndex?: string;
    title?: string;
    viewBox?: string;
    width?: number;
    xmlns?: string;
}

export type CarbonIconType = React.ForwardRefExoticComponent<CarbonIconProps & React.RefAttributes<SVGSVGElement>>;

export * from './lib';
import * as __esIcons from './es';
