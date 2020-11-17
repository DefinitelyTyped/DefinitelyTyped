import * as React from 'react';
import { BaseButton } from 'react-native-gesture-handler';
declare type Props = React.ComponentProps<typeof BaseButton> & {
    activeOpacity: number;
};
export default class BorderlessButton extends React.Component<Props> {
    static defaultProps: {
        activeOpacity: number;
        borderless: boolean;
    };
    private opacity;
    private handleActiveStateChange;
    render(): JSX.Element;
}
export {};
