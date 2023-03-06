// Type definitions for reflexbox 4.0
// Project: https://github.com/rebassjs/rebass/tree/master/packages/reflexbox
// Definitions by: Danyil Karuna <https://github.com/iamkd>
//                 Anton Vasin <https://github.com/antonvasin>
//                 Victor Orlov <https://github.com/vittorio>
//                 akameco <https://github.com/akameco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import * as React from 'react';
import * as StyledSystem from 'styled-system';
import { StyledComponent } from '@emotion/styled/types/index';

export interface BoxProps
    extends StyledSystem.SpaceProps,
        StyledSystem.LayoutProps,
        StyledSystem.TypographyProps,
        StyledSystem.ColorProps,
        StyledSystem.FlexboxProps {
    as?: React.ElementType | undefined;
}

export type BoxType = StyledComponent<
    JSX.IntrinsicElements['div'],
    Omit<JSX.IntrinsicElements['div'] & BoxProps, keyof React.ClassAttributes<any>>
>;

export const Box: BoxType;

export const Flex: BoxType;
