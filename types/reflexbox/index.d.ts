// Type definitions for reflexbox 4.0
// Project: https://github.com/rebassjs/rebass/tree/master/packages/reflexbox
// Definitions by: Danyil Karuna <https://github.com/iamkd>
//                 Anton Vasin <https://github.com/antonvasin>
//                 Victor Orlov <https://github.com/vittorio>
//                 Louis Hache <https://github.com/lhache>
//                 Adam Lavin <https://github.com/lavoaster>
//                 Erin Noe-Payne <https://github.com/autoric>
//                 akameco <https://github.com/akameco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';
import * as StyledSystem from 'styled-system';
import { StyledComponent } from '@emotion/styled/types/index';
import { Omit } from '@emotion/styled-base/types/helper';

export interface BoxProps
    extends StyledSystem.SpaceProps,
        StyledSystem.LayoutProps,
        StyledSystem.TypographyProps,
        StyledSystem.ColorProps,
        StyledSystem.FlexboxProps {
    as?: React.ElementType;
}

export type BoxType = StyledComponent<
    JSX.IntrinsicElements['div'],
    Omit<JSX.IntrinsicElements['div'] & BoxProps, keyof React.ClassAttributes<any>>,
    {}
>;

export const Box: BoxType;

export const Flex: BoxType;
