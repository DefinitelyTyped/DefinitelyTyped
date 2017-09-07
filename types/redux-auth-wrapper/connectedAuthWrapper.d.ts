import { ReactType } from "react";
import { AuthBaseConfig, AuthWrapperDecorator } from "redux-auth-wrapper";
import { AuthWrapperConfig, InjectedAuthProps } from "redux-auth-wrapper/authWrapper";

export type ConnectedAuthWrapperConfig<OwnProps = {}, State = {}> = AuthWrapperConfig & AuthBaseConfig<OwnProps, State>;

export default function connectedAuthWrapper<OwnProps = {}, State = {}>(
    config: ConnectedAuthWrapperConfig<OwnProps, State>
): AuthWrapperDecorator<OwnProps & InjectedAuthProps>;
