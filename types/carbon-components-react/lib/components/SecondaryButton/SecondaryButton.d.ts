import * as React from "react";
import { FCProps, FCReturn, ReactComponentConstructor } from "../../../typings/shared";
import { ButtonAnchorProps, ButtonCustomComponentProps, ButtonDefaultProps, ButtonIntrinsicProps } from "../Button";

declare function SecondaryButton(props: FCProps<ButtonDefaultProps>): FCReturn;
// tslint:disable:unified-signatures breaks certain usages
declare function SecondaryButton(props: FCProps<ButtonAnchorProps>): FCReturn;
declare function SecondaryButton<T extends keyof React.JSX.IntrinsicElements>(
    props: FCProps<ButtonIntrinsicProps<T>>,
): FCReturn;
declare function SecondaryButton<T extends ReactComponentConstructor<never>>(
    props: FCProps<ButtonCustomComponentProps<T>>,
): FCReturn;

export default SecondaryButton;
