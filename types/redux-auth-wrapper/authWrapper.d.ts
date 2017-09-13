import { ReactType } from "react";
import { AuthConfig, AuthWrapperDecorator } from "redux-auth-wrapper";

export interface InjectedAuthProps {
    isAuthenticated: boolean;
    isAuthenticating: boolean;
}

export interface AuthWrapperConfig extends AuthConfig {
    FailureComponent?: ReactType;
}

export default function authWrapper<OwnProps = {}>(
    config: AuthWrapperConfig
): AuthWrapperDecorator<OwnProps & InjectedAuthProps>;
