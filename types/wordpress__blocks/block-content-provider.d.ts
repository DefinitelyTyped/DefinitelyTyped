import { ComponentType, ReactNode } from '@wordpress/element';

/**
 * A Higher Order Component used to inject BlockContent using context to the
 * wrapped component.
 */
export function withBlockContentContext<T extends ComponentType<any>>(
    wrapped: T
): T extends ComponentType<infer U> ? ComponentType<Omit<U, 'BlockContent'>> : never;
