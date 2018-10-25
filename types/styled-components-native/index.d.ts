// Type definitions for styled-components/native 4.0
// Project: https://github.com/styled-components/styled-components
// Definitions by: Sota Ohara <https://github.com/sottar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as ReactNative from 'react-native';
import * as React from 'react';

export interface ThemeProps<T> {
    theme: T;
}

type ThemedStyledProps<P, T> = P & ThemeProps<T>;
type ThemedOuterStyledProps<P, T> = P & {
    as?: React.ReactType | keyof StyledInterface;
    theme?: T;
};
export type OuterStyledProps<P> = ThemedOuterStyledProps<P, any>;

type FalseyValue = undefined | null | false;
export type Interpolation<P> =
    | FlattenInterpolation<P>
    | ReadonlyArray<
          FlattenInterpolation<P> | ReadonlyArray<FlattenInterpolation<P>>
      >;
type FlattenInterpolation<P> =
    | InterpolationValue
    | InterpolationFunction<P>;
export type InterpolationValue =
    | string
    | number
    | Styles
    | FalseyValue
    | StyledComponentClass<any, any>;
type SimpleInterpolation =
    | InterpolationValue
    | ReadonlyArray<InterpolationValue | ReadonlyArray<InterpolationValue>>;
interface Styles {
    [ruleOrSelector: string]: string | number | Styles;
}
export type InterpolationFunction<P> = (props: P) => Interpolation<P>;

type Attrs<P, A extends Partial<P>, T> = {
    [K in keyof A]: ((props: ThemedStyledProps<P, T>) => A[K]) | A[K]
};

interface StyledComponentClass<P, T, O = P>
    extends React.ComponentClass<ThemedOuterStyledProps<O, T>> {
    withComponent<K extends keyof StyledInterface>(
        tag: K,
    ): StyledComponentClass<
        StyledInterface[K],
        T,
        StyledInterface[K] & O
    >;
    withComponent<U = {}>(
        element: React.ComponentType<U>,
    ): StyledComponentClass<U, T, U & O>;
}

interface ThemedStyledFunction<P, T, O = P> {
    (
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ): StyledComponentClass<P, T, O>;
    <U>(
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P & U, T>>>
    ): StyledComponentClass<P & U, T, O & U>;
    attrs<U, A extends Partial<P & U> = {}>(
        attrs: Attrs<P & U, A, T>,
    ): ThemedStyledFunction<DiffBetween<A, P & U>, T, DiffBetween<A, O & U>>;
}

export type StyledFunction<P> = ThemedStyledFunction<P, any>;
type ThemedStyledComponentFactories<T> = {
    [TTag in keyof StyledInterface]: ThemedStyledFunction<
        StyledInterface[TTag],
        T
    >
};

export interface ThemedBaseStyledInterface<T>
    extends ThemedStyledComponentFactories<T> {
    <P, TTag extends keyof StyledInterface>(
        tag: TTag,
    ): ThemedStyledFunction<P, T, P & StyledInterface[TTag]>;
    <P, O>(component: StyledComponentClass<P, T, O>): ThemedStyledFunction<
        P,
        T,
        O
    >;
    <P extends { [prop: string]: any; theme?: T }>(
        component: React.ComponentType<P>,
    ): ThemedStyledFunction<P, T, WithOptionalTheme<P, T>>;
}

// tslint:disable-next-line:no-empty-interface
interface DefaultTheme {}

interface ThemeProviderProps<T> {
    theme?: T | ((theme: T) => T);
}
type BaseThemeProviderComponent<T> = React.ComponentClass<
    ThemeProviderProps<T>
    >;
type ThemeProviderComponent<T> = BaseThemeProviderComponent<Extract<keyof T, string> extends never ? any : T>;
interface BaseThemedCssFunction<T> {
    (
        strings: TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
    ): InterpolationValue[];
    <P>(
        strings: TemplateStringsArray,
        ...interpolations: Array<Interpolation<ThemedStyledProps<P, T>>>
    ): Array<FlattenInterpolation<ThemedStyledProps<P, T>>>;
}
type ThemedCssFunction<T> = BaseThemedCssFunction<Extract<keyof T, string> extends never ? any : T>;

// Helper type operators
type KeyofBase = keyof any;
type Diff<T extends KeyofBase, U extends KeyofBase> = ({ [P in T]: P } &
    { [P in U]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
type DiffBetween<T, U> = Pick<T, Diff<keyof T, keyof U>> &
    Pick<U, Diff<keyof U, keyof T>>;
type WithOptionalTheme<P extends { theme?: T }, T> = Omit<P, 'theme'> & {
    theme?: T;
};

export const css: ThemedCssFunction<DefaultTheme>;

type BaseWithThemeFnInterface<T> = <P extends { theme?: T }>(
        component: React.ComponentType<P>,
    ) => React.ComponentClass<WithOptionalTheme<P, T>>;
type WithThemeFnInterface<T> = BaseWithThemeFnInterface<Extract<keyof T, string> extends never ? any : T>;
export const withTheme: WithThemeFnInterface<DefaultTheme>;

export interface ThemeConsumerProps<T> {
    children(theme: T): React.ReactNode;
}
type BaseThemeConsumerComponent<T> = React.ComponentClass<ThemeConsumerProps<T>>;
export type ThemeConsumerComponent<T> = BaseThemeConsumerComponent<Extract<keyof T, string> extends never ? any : T>;
export const ThemeConsumer: ThemeConsumerComponent<object>;

export function isStyledComponent(
    target: any,
): target is StyledComponentClass<{}, {}>;

export const ThemeProvider: ThemeProviderComponent<object>;

export type ReactNativeStyledFunction<P> = StyledFunction<P>;

export interface StyledInterface extends ThemedBaseStyledInterface<any> {
  ActivityIndicator: ReactNativeStyledFunction<
    ReactNative.ActivityIndicatorProperties
  >;
  ActivityIndicatorIOS: ReactNativeStyledFunction<
    ReactNative.ActivityIndicatorProperties
  >;

  // ART: StyledFunction<ReactNative.ART>;
  Button: ReactNativeStyledFunction<ReactNative.ButtonProperties>;
  DatePickerIOS: ReactNativeStyledFunction<ReactNative.DatePickerIOSProperties>;
  DrawerLayoutAndroid: ReactNativeStyledFunction<
    ReactNative.DrawerLayoutAndroidProperties
  >;
  Image: ReactNativeStyledFunction<ReactNative.ImageProperties>;
  ImageBackground: ReactNativeStyledFunction<
    ReactNative.ImageBackgroundProperties
  >;

  KeyboardAvoidingView: ReactNativeStyledFunction<
    ReactNative.KeyboardAvoidingViewProps
  >;
  ListView: ReactNativeStyledFunction<ReactNative.ListViewProperties>;
  MapView: ReactNativeStyledFunction<ReactNative.MapViewProperties>;
  Modal: ReactNativeStyledFunction<ReactNative.ModalProperties>;
  NavigatorIOS: ReactNativeStyledFunction<ReactNative.NavigatorIOSProperties>;
  Picker: ReactNativeStyledFunction<ReactNative.PickerProperties>;
  PickerIOS: ReactNativeStyledFunction<ReactNative.PickerIOSProperties>;
  ProgressBarAndroid: ReactNativeStyledFunction<
    ReactNative.ProgressBarAndroidProperties
  >;
  ProgressViewIOS: ReactNativeStyledFunction<
    ReactNative.ProgressViewIOSProperties
  >;
  ScrollView: ReactNativeStyledFunction<ReactNative.ScrollViewProps>;
  SegmentedControlIOS: ReactNativeStyledFunction<
    ReactNative.SegmentedControlIOSProperties
  >;
  Slider: ReactNativeStyledFunction<ReactNative.SliderProperties>;
  SliderIOS: ReactNativeStyledFunction<ReactNative.SliderPropertiesIOS>;
  SnapshotViewIOS: ReactNativeStyledFunction<
    ReactNative.SnapshotViewIOSProperties
  >;
  RecyclerViewBackedScrollView: ReactNativeStyledFunction<
    ReactNative.RecyclerViewBackedScrollViewProperties
  >;
  RefreshControl: ReactNativeStyledFunction<
    ReactNative.RefreshControlProperties
  >;
  SafeAreaView: ReactNativeStyledFunction<ReactNative.SafeAreaView>;
  StatusBar: ReactNativeStyledFunction<ReactNative.StatusBarProperties>;
  SwipeableListView: ReactNativeStyledFunction<
    ReactNative.SwipeableListViewProps
  >;
  Switch: ReactNativeStyledFunction<ReactNative.SwitchProperties>;
  SwitchIOS: ReactNativeStyledFunction<ReactNative.SwitchIOSProperties>;
  Text: ReactNativeStyledFunction<ReactNative.TextProperties>;
  TextInput: ReactNativeStyledFunction<ReactNative.TextInputProperties>;
  TouchableHighlight: ReactNativeStyledFunction<
    ReactNative.TouchableHighlightProperties
  >;
  TouchableNativeFeedback: ReactNativeStyledFunction<
    ReactNative.TouchableNativeFeedbackProperties
  >;
  TouchableOpacity: ReactNativeStyledFunction<
    ReactNative.TouchableOpacityProperties
  >;
  TouchableWithoutFeedback: ReactNativeStyledFunction<
    ReactNative.TouchableWithoutFeedbackProps
  >;
  View: ReactNativeStyledFunction<ReactNative.ViewProperties>;
  ViewPagerAndroid: ReactNativeStyledFunction<
    ReactNative.ViewPagerAndroidProperties
  >;
  WebView: ReactNativeStyledFunction<ReactNative.WebViewProperties>;
}

declare const styled: StyledInterface;

export default styled;
