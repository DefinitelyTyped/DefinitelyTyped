import type { NavigationState, PartialState, CommonActions } from '../routers';
import type { PathConfigMap, NavigatorScreenParams } from './types';
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
declare type Options = {
    initialRouteName?: string;
    screens: PathConfigMap;
};
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
declare type NavigateAction<State extends NavigationState> = {
    type: 'NAVIGATE';
    payload: {
        name: string;
        params?: NavigatorScreenParams<State>;
    };
};
export default function getActionFromState(state: PartialState<NavigationState>, options?: Options): NavigateAction<NavigationState> | CommonActions.Action | undefined;
export {};
