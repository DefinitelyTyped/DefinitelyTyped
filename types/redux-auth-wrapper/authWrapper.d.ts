import { ElementType } from "react";
import { AuthConfig, AuthWrapperDecorator } from ".";

export interface InjectedAuthProps {
    isAuthenticated: boolean;
    isAuthenticating: boolean;
}

export interface AuthWrapperConfig extends AuthConfig {
    FailureComponent?: ElementType | undefined;
}

export default function authWrapper<OwnProps = {}>(
    config: AuthWrapperConfig
): AuthWrapperDecorator<OwnProps & InjectedAuthProps>;
