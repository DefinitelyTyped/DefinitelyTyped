/**
 * The native MaskedView that we explicitly re-export for supported platforms: Android, iOS.
 */
import * as React from 'react';
declare type MaskedViewType = typeof import('@react-native-community/masked-view').default;
declare type Props = React.ComponentProps<MaskedViewType> & {
    children: React.ReactElement;
};
export default function MaskedView({ children, ...rest }: Props): JSX.Element;
export {};
