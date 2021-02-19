// Type definitions for styled-components-react-native 5.1
// Project: https://github.com/styled-components/styled-components
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:no-single-declare-module
declare module "styled-components/native" {
    import * as ReactNative from "react-native";
    import * as React from "react";

    export {
        css,
        DefaultTheme,
        isStyledComponent,
        ThemeConsumer,
        ThemeContext,
        ThemeProps,
        ThemeProvider,
        withTheme,
        useTheme,
    } from "styled-components";

    import {
        AnyStyledComponent,
        DefaultTheme,
        isStyledComponent,
        StyledComponentInnerAttrs,
        StyledComponentInnerComponent,
        StyledComponentInnerOtherProps,
        ThemedCssFunction,
        ThemedStyledFunction,
        ThemedStyledInterface,
        ThemeProviderComponent,
        WithThemeFnInterface,
    } from "styled-components";

    type AnyIfEmpty<T extends object> = keyof T extends never ? any : T;

    export type ReactNativeThemedStyledFunction<
        C extends React.ComponentType<any>,
        T extends object
    > = ThemedStyledFunction<C, T>;

    // Copied over from "ThemedBaseStyledInterface" in index.d.ts in order to remove DOM element typings
    interface ReactNativeThemedBaseStyledInterface<T extends object> {
        <C extends AnyStyledComponent>(component: C): ThemedStyledFunction<
            StyledComponentInnerComponent<C>,
            T,
            StyledComponentInnerOtherProps<C>,
            StyledComponentInnerAttrs<C>
        >;
        <C extends React.ComponentType<any>>(
            // unfortunately using a conditional type to validate that it can receive a `theme?: Theme`
            // causes tests to fail in TS 3.1
            component: C
        ): ThemedStyledFunction<C, T>;
    }

    type ReactNativeThemedStyledInterface<T extends object> = ReactNativeThemedBaseStyledInterface<AnyIfEmpty<T>>;

    export interface ReactNativeStyledInterface<T extends object> extends ReactNativeThemedStyledInterface<T> {
        ActivityIndicator: ReactNativeThemedStyledFunction<typeof ReactNative.ActivityIndicator, T>;
        ActivityIndicatorIOS: ReactNativeThemedStyledFunction<typeof ReactNative.ActivityIndicator, T>;
        Button: ReactNativeThemedStyledFunction<typeof ReactNative.Button, T>;
        DatePickerIOS: ReactNativeThemedStyledFunction<typeof ReactNative.DatePickerIOS, T>;
        DrawerLayoutAndroid: ReactNativeThemedStyledFunction<typeof ReactNative.DrawerLayoutAndroid, T>;
        Image: ReactNativeThemedStyledFunction<typeof ReactNative.Image, T>;
        ImageBackground: ReactNativeThemedStyledFunction<typeof ReactNative.ImageBackground, T>;
        KeyboardAvoidingView: ReactNativeThemedStyledFunction<typeof ReactNative.KeyboardAvoidingView, T>;
        ListView: ReactNativeThemedStyledFunction<typeof ReactNative.ListView, T>;
        Modal: ReactNativeThemedStyledFunction<typeof ReactNative.Modal, T>;
        NavigatorIOS: ReactNativeThemedStyledFunction<typeof ReactNative.NavigatorIOS, T>;
        Picker: ReactNativeThemedStyledFunction<typeof ReactNative.Picker, T>;
        PickerIOS: ReactNativeThemedStyledFunction<typeof ReactNative.PickerIOS, T>;
        Pressable: ReactNativeThemedStyledFunction<typeof ReactNative.Pressable, T>;
        ProgressBarAndroid: ReactNativeThemedStyledFunction<typeof ReactNative.ProgressBarAndroid, T>;
        ProgressViewIOS: ReactNativeThemedStyledFunction<typeof ReactNative.ProgressViewIOS, T>;
        ScrollView: ReactNativeThemedStyledFunction<typeof ReactNative.ScrollView, T>;
        SegmentedControlIOS: ReactNativeThemedStyledFunction<typeof ReactNative.SegmentedControlIOS, T>;
        Slider: ReactNativeThemedStyledFunction<typeof ReactNative.Slider, T>;
        SliderIOS: ReactNativeThemedStyledFunction<typeof ReactNative.Slider, T>;
        SnapshotViewIOS: ReactNativeThemedStyledFunction<typeof ReactNative.SnapshotViewIOS, T>;
        Switch: ReactNativeThemedStyledFunction<typeof ReactNative.Switch, T>;
        RecyclerViewBackedScrollView: ReactNativeThemedStyledFunction<
            typeof ReactNative.RecyclerViewBackedScrollView,
            T
        >;
        RefreshControl: ReactNativeThemedStyledFunction<typeof ReactNative.RefreshControl, T>;
        SafeAreaView: ReactNativeThemedStyledFunction<typeof ReactNative.SafeAreaView, T>;
        StatusBar: ReactNativeThemedStyledFunction<typeof ReactNative.StatusBar, T>;
        SwipeableListView: ReactNativeThemedStyledFunction<typeof ReactNative.SwipeableListView, T>;
        SwitchAndroid: ReactNativeThemedStyledFunction<typeof ReactNative.Switch, T>;
        SwitchIOS: ReactNativeThemedStyledFunction<typeof ReactNative.SwitchIOS, T>;
        TabBarIOS: ReactNativeThemedStyledFunction<typeof ReactNative.TabBarIOS, T>;
        Text: ReactNativeThemedStyledFunction<typeof ReactNative.Text, T>;
        TextInput: ReactNativeThemedStyledFunction<typeof ReactNative.TextInput, T>;
        ToolbarAndroid: ReactNativeThemedStyledFunction<typeof ReactNative.ToolbarAndroid, T>;
        TouchableHighlight: ReactNativeThemedStyledFunction<typeof ReactNative.TouchableHighlight, T>;
        TouchableNativeFeedback: ReactNativeThemedStyledFunction<typeof ReactNative.TouchableNativeFeedback, T>;
        TouchableOpacity: ReactNativeThemedStyledFunction<typeof ReactNative.TouchableOpacity, T>;
        TouchableWithoutFeedback: ReactNativeThemedStyledFunction<typeof ReactNative.TouchableWithoutFeedback, T>;
        View: ReactNativeThemedStyledFunction<typeof ReactNative.View, T>;
        ViewPagerAndroid: ReactNativeThemedStyledFunction<typeof ReactNative.ViewPagerAndroid, T>;
        FlatList: ReactNativeThemedStyledFunction<typeof ReactNative.FlatList, T>;
        SectionList: ReactNativeThemedStyledFunction<typeof ReactNative.SectionList, T>;
    }

    export interface ReactNativeThemedStyledComponentsModule<T extends object, U extends object = T> {
        default: ReactNativeStyledInterface<T>;

        css: ThemedCssFunction<T>;

        withTheme: WithThemeFnInterface<T>;
        ThemeProvider: ThemeProviderComponent<T, U>;
        ThemeConsumer: React.Consumer<T>;
        ThemeContext: React.Context<T>;
        useTheme(): T;

        // This could be made to assert `target is StyledComponent<any, T>` instead, but that feels not type safe
        isStyledComponent: typeof isStyledComponent;
    }

    const styled: ReactNativeStyledInterface<DefaultTheme>;

    export default styled;
}
