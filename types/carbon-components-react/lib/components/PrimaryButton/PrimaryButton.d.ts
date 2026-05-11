import * as React from "react";
import { FCProps, FCReturn, ReactComponentConstructor } from "../../../typings/shared";
import { ButtonAnchorProps, ButtonCustomComponentProps, ButtonDefaultProps, ButtonIntrinsicProps } from "../Button";

declare function PrimaryButton(props: FCProps<ButtonDefaultProps>): FCReturn;
// tslint:disable:unified-signatures breaks certain usages
declare function PrimaryButton(props: FCProps<ButtonAnchorProps>): FCReturn;
declare function PrimaryButton<T extends keyof React.JSX.IntrinsicElements>(
    props: FCProps<ButtonIntrinsicProps<T>>,
): FCReturn;
declare function PrimaryButton<T extends ReactComponentConstructor<never>>(
    props: FCProps<ButtonCustomComponentProps<T>>,
): FCReturn;

export default PrimaryButton;
