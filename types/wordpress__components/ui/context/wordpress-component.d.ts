import type { ElementType, ComponentPropsWithRef } from 'react';

/**
 * This file copied from https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/ui/context/wordpress-component.ts
 */

/**
 * Based on https://github.com/reakit/reakit/blob/master/packages/reakit-utils/src/types.ts
 *
 * The `children` prop is being explicitely omitted since it is otherwise implicitly added
 * by `ComponentPropsWithRef`. The context is that components should require the `children`
 * prop explicitely when needed (see https://github.com/WordPress/gutenberg/pull/31817).
 */
export type WordPressComponentProps<P, T extends ElementType, IsPolymorphic extends boolean = true> = P &
    Omit<ComponentPropsWithRef<T>, 'as' | keyof P | 'children'> &
    (IsPolymorphic extends true
        ? {
              as?: T | keyof JSX.IntrinsicElements;
          }
        : { as?: never });
