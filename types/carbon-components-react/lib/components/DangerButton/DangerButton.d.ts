import * as React from "react";
import {
    ButtonAnchorProps,
    ButtonDefaultProps,
    ButtonIntrinsicProps,
    ButtonCustomComponentProps,
} from '../Button';
import { FCReturn, FCProps } from '../../../typings/shared';

declare function DangerButton(props: FCProps<ButtonDefaultProps>): FCReturn;
// tslint:disable:unified-signatures breaks certain usages
declare function DangerButton(props: FCProps<ButtonAnchorProps>): FCReturn;
declare function DangerButton<T extends keyof JSX.IntrinsicElements>(props: FCProps<ButtonIntrinsicProps<T>>): FCReturn;
declare function DangerButton<T extends React.JSXElementConstructor<any>>(props: FCProps<ButtonCustomComponentProps<T>>): FCReturn;

export default DangerButton;
