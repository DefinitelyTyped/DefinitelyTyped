import { ComponentType } from '@wordpress/element';

// prettier-ignore
export default function withFallbackStyles<FSP>(
    mapNodeToProps: (parentNode: HTMLDivElement, ownProps: {[k: string]: any}) => FSP
): <T extends ComponentType<any>>(wrappedComponent: T) => T extends ComponentType<infer V>
    ? ComponentType<Omit<V, keyof FSP>>
    : never;
