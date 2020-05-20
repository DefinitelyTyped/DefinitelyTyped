import { Action } from "redux";
import { Location } from "history";
import { AuthWrapperDecorator } from "..";
import {
    ConnectedRouterRedirectConfig,
    InjectedAuthReduxProps
} from "../history3/redirect";

export {
    connectedRouterRedirect,
    ConnectedRouterRedirectConfig,
    InjectedAuthReduxProps,
    InjectedAuthRouterProps
} from "../history3/redirect";

export interface ConnectedReduxRedirectConfig<OwnProps = {}, State = {}> extends ConnectedRouterRedirectConfig<OwnProps, State> {
    redirectAction(location: Location): Action;
}

export function connectedReduxRedirect<OwnProps = {}, State = {}>(
    config: ConnectedReduxRedirectConfig<OwnProps, State>
): AuthWrapperDecorator<OwnProps & InjectedAuthReduxProps>;
