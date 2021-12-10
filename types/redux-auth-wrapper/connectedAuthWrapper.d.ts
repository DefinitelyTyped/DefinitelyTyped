import { ElementType } from "react";
import { AuthBaseConfig, AuthWrapperDecorator } from ".";
import { AuthWrapperConfig, InjectedAuthProps } from "./authWrapper";

export type ConnectedAuthWrapperConfig<OwnProps = {}, State = {}> = AuthWrapperConfig & AuthBaseConfig<OwnProps, State>;

export default function connectedAuthWrapper<OwnProps = {}, State = {}>(
    config: ConnectedAuthWrapperConfig<OwnProps, State>
): AuthWrapperDecorator<OwnProps & InjectedAuthProps>;
