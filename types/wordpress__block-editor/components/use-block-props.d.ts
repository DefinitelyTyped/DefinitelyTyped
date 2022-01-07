import { Ref } from 'react';

export type UseBlockPropsProps<Props extends Record<string, unknown>, R = unknown> = { ref?: Ref<R> } & Props;

export type UseBlockPropsOut<Props extends Record<string, unknown>> = Props &
    Ref<unknown> & {
        id: string;
        tabIndex: 0;
        role: 'document';
        'aria-label': string;
        'data-block': string;
        'data-type': string;
        'data-title': string;
        className: string;
        style: Record<string, unknown>;
    };

export function useBlockProps<Props extends Record<string, unknown>>(
    props?: UseBlockPropsProps<Props>,
): UseBlockPropsOut<Props>;

export namespace useBlockProps {
    function save(props?: Record<string, unknown>): unknown;
}
