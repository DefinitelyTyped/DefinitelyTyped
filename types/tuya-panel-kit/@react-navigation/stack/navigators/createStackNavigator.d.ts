/// <reference types="react" />
import { DefaultNavigatorOptions, StackRouterOptions, StackNavigationState } from '../../native';
import type { StackNavigationConfig, StackNavigationOptions, StackNavigationEventMap } from '../types';
// tslint:disable-next-line strict-export-declare-modifiers
declare type Props = DefaultNavigatorOptions<StackNavigationOptions> & StackRouterOptions & StackNavigationConfig;
declare function StackNavigator({ initialRouteName, children, screenOptions, ...rest }: Props): JSX.Element;
/* eslint-disable no-unnecessary-generics */
/* eslint-disable prefer-declare-function */
// tslint:disable-next-line max-line-length
declare const _default: <ParamList extends Record<string, object | undefined>>() => import("../../native").TypedNavigator<ParamList, StackNavigationState<Record<string, object | undefined>>, StackNavigationOptions, StackNavigationEventMap, typeof StackNavigator>;
/* eslist-enable prefer-declare-function */
/* eslist-enable no-unnecessary-generics */
export default _default;
