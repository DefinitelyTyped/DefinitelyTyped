// Type definitions for react-with-direction 1.3.0
// Project: https://github.com/airbnb/react-with-direction
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
//                 Brie Bunge <https://github.com/brieb>
//                 Joe Lencioni <https://github.com/lencioni>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { Direction, DIRECTIONS } from 'react-with-direction/dist/constants';
import directionPropType from 'react-with-direction/dist/proptypes/direction';

declare const withDirectionPropTypes: {
    direction: typeof directionPropType.isRequired;
};

type WithDirectionProps = {
    direction: Direction;
};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type ComponentClassProps<C> = C extends new (props: infer P, context?: any) => any ? P : never;
type SFCProps<C> = C extends (
    props: infer P & { children?: React.ReactNode },
    context?: any
) => any
    ? P
    : never;
type ElementProps<C> = C extends React.ComponentClass<any>
    ? ComponentClassProps<C>
    : C extends React.SFC<any> ? SFCProps<C> : never;
type ElementConfig<C> = JSX.LibraryManagedAttributes<C, ElementProps<C>>;

declare function withDirection<C extends React.ComponentType<any>>(
    WrappedComponent: C
): React.ComponentClass<Omit<ElementConfig<C>, keyof WithDirectionProps>>;

export default withDirection;
export { withDirectionPropTypes, WithDirectionProps, Direction, DIRECTIONS };
  
  

