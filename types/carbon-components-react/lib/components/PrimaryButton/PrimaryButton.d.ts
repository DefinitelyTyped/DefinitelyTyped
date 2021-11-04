import * as React from "react";
import {
    ButtonDefaultProps,
    ButtonAnchorProps,
    ButtonIntrinsicProps,
    ButtonCustomComponentProps
} from "../Button";
import { FCProps, FCReturn, ReactComponentConstructor } from "../../../typings/shared";

declare function PrimaryButton(props: FCProps<ButtonDefaultProps>): FCReturn;
// tslint:disable:unified-signatures breaks certain usages
declare function PrimaryButton(props: FCProps<ButtonAnchorProps>): FCReturn;
declare function PrimaryButton<T extends keyof JSX.IntrinsicElements>(props: FCProps<ButtonIntrinsicProps<T>>): FCReturn;
declare function PrimaryButton<T extends ReactComponentConstructor<never>>(props: FCProps<ButtonCustomComponentProps<T>>): FCReturn;

export default PrimaryButton;
