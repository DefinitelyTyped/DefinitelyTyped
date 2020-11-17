/**
 * Use a stub for MaskedView on all Platforms that don't support it.
 */
import type * as React from 'react';
declare type Props = {
    maskElement: React.ReactElement;
    children: React.ReactElement;
};
export default function MaskedView({ children }: Props): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
