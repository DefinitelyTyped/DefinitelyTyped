// Type definitions for react-native-navigation 1.1
// Project: https://github.com/wix/react-native-navigation
// Definitions by: Egor Shulga <https://github.com/egorshulga>
//                 Jason Merino <https://github.com/jasonmerino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

export namespace Navigation {
    function registerComponent(screenID: string, generator: () => React.ComponentType<any>, store?: any, provider?: any, options?: any): void;
    function startTabBasedApp(params: TabBasedApp): void;
    function startSingleScreenApp(params: SingleScreenApp): void;
    function showModal(params: ModalScreen): void;
    function dismissModal(params?: { animationType?: 'none' | 'slide-down' }): void;
    function dismissAllModals(params?: { animationType?: 'none' | 'slide-down' }): void;
    function showLightBox(params?: LightBox): void;
    function dismissLightBox(): void;
    function handleDeepLink(params?: { link: string; payload?: string; }): void;
    function registerScreen(screenId: string, generator: () => React.ComponentType<any>): void;
    function getCurrentlyVisibleScreenId(): Promise<string>;
    function isAppLaunched(): Promise<boolean>;
}

export interface TabBasedApp {
    tabs: TabScreen[];
    tabsStyle?: {
        tabBarButtonColor?: string;
        tabBarSelectedButtonColor?: string;
        tabBarBackgroundColor?: string;
        initialTabIndex?: number;
    };
    appStyle?: {
        orientation?: 'auto' | 'landscape' | 'portrait';
        bottomTabBadgeTextColor?: string;
        bottomTabBadgeBackgroundColor?: string;
        backButtonImage?: any;
        hideBackButtonTitle?: boolean;
    };
    drawer?: Drawer;
    passProps?: object;
    animationType?: 'none' | 'slide-down' | 'fade';
}

export interface IconInsets {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export interface TabScreen {
    label?: string;
    screen: string;
    icon?: any;
    iconInsets?: IconInsets;
    selectedIcon?: any;
    title?: string;
    navigatorStyle?: NavigatorStyle;
    navigatorButtons?: NavigatorButtons;
    titleImage?: any;
}

export interface SingleScreenApp {
    screen: Screen;
    drawer?: Drawer;
    passProps?: object;
    animationType?: 'none' | 'slide-down' | 'fade';
    appStyle?: {
        orientation?: 'auto' | 'landscape' | 'portrait';
        backButtonImage?: any;
        hideBackButtonTitle?: boolean;
    };
}

export interface Screen {
    screen: string;
    title?: string;
    navigatorStyle?: NavigatorStyle;
    navigatorButtons?: NavigatorButtons;
    overrideBackPress?: boolean;
}

export interface ModalScreen extends Screen {
    passProps?: object;
    animationType?: 'slide-up' | 'none';
}

export interface ResetScreen<P> extends Screen {
    passProps?: P;
    animated?: boolean;
    animationType?: 'fade' | 'slide-horizontal';
}

export interface PushedScreen<P> extends ResetScreen<P> {
    titleImage?: any;
    backButtonTitle?: string;
    backButtonHidden?: boolean;
    previewView?: React.Component<any, any> | number;
    previewHeight?: number;
    previewCommit?: boolean;
    previewActions?: Action[];
}

export interface Action {
    id: string;
    title: string;
    style?: 'selected' | 'destructive';
    actions: Action[];
}

export interface LightBox {
    screen: string;
    passProps?: object;
    style?: {
        backgroundBlur?: 'dark' | 'light' | 'xlight' | 'none';
        backgroundColor?: string;
    };
    adjustSoftInput?: 'nothing' | 'pan' | 'resize' | 'unspecified';
}

export interface NavigatorEvent {
    id: 'willAppear' | 'didAppear' | 'willDisappear' | 'didDisappear' | 'willCommitPreview' | 'backPress' | 'bottomTabSelected' | 'bottomTabReselected' | string;
    type: 'NavBarButtonPress' | 'DeepLink';
}

export class Navigator {
    push<P>(params: PushedScreen<P>): void;
    pop(params?: { animated?: boolean; animationType?: 'fade' | 'slide-horizontal'; }): void;
    popToRoot(params?: { animated?: boolean; animationType?: 'fade' | 'slide-horizontal'; }): void;
    resetTo<P>(params: PushedScreen<P>): void;
    showModal(params: ModalScreen): void;
    dismissModal(params?: { animationType?: 'none' | 'slide-down' }): void;
    dismissAllModals(params?: { animationType?: 'none' | 'slide-down' }): void;
    showLightBox(params: LightBox): void;
    dismissLightBox(): void;
    showInAppNotification(params?: { screen: string; passProps?: object; autoDismissTimerSec?: number }): void;
    handleDeepLink(params: { link: string }): void;
    setButtons(params: NavigatorButtons & { animated?: boolean }): void;
    setTitle(params: { title: string }): void;
    setSubTitle(params: { subtitle: string }): void;
    toggleDrawer(params: { side: 'left' | 'right'; animated?: boolean; to?: 'open' | 'closed' }): void;
    setDrawerEnabled(params: { side: 'left' | 'right'; enabled: boolean }): void;
    toggleTabs(params: { to: 'hidden' | 'shown'; animated?: boolean }): void;
    setTabBadge(params?: { tabIndex?: number; badge: number | null; badgeColor?: string; }): void;
    setTabButton(params?: { tabIndex?: number; icon?: any; selectedIcon?: any; label?: string; }): void;
    switchToTab(params?: { tabIndex?: number }): void;
    toggleNavBar(params: { to: 'hidden' | 'shown'; animated?: boolean }): void;
    setOnNavigatorEvent(callback: (event: NavigatorEvent) => void): void;
    addOnNavigatorEvent(callback: (event: NavigatorEvent) => void): () => void;
    screenIsCurrentlyVisible(): Promise<boolean>;
    setStyle(params: NavigatorStyle): void;
}

export class ScreenVisibilityListener {
    constructor(params: ScreenVisibilityListenerParams);
    register(): void;
    unregister(): void;
}

export class NativeEventsReceiver {
    constructor();
    appLaunched(callback: () => void): void;
}

export interface ScreenVisibilityListenerParams {
    willAppear?: (params: ListenerParams) => void;
    didAppear?: (params: ListenerParams) => void;
    willDisappear?: (params: ListenerParams) => void;
    didDisappear?: (params: ListenerParams) => void;
}

export interface ListenerParams {
    screen: string;
    startTime: number;
    endTime: number;
    commandType: string;
}

export interface NavigationComponentProps {
    navigator: Navigator;
}

export interface NavigatorStyle {
    navBarTextColor?: string;
    navBarTextFontSize?: number;
    navBarTextFontFamily?: string;
    navBarBackgroundColor?: string;
    navBarCustomView?: string;
    navBarComponentAlignment?: 'center' | 'fill';
    navBarCustomViewInitialProps?: object;
    navBarButtonColor?: string;
    topBarElevationShadowEnabled?: boolean;
    navBarHidden?: boolean;
    navBarHideOnScroll?: boolean;
    navBarTranslucent?: boolean;
    navBarTransparent?: boolean;
    navBarNoBorder?: boolean;
    drawUnderNavBar?: boolean;
    drawUnderTabBar?: boolean;
    navBarBlur?: boolean;
    tabBarHidden?: boolean;
    statusBarHidden?: boolean;
    statusBarTextColorScheme?: string;
    navBarSubtitleColor?: string;
    navBarSubtitleFontFamily?: string;
    navBarSubtitleFontSize?: number;
    screenBackgroundColor?: string;
    orientation?: 'auto' | 'landscape' | 'portrait';
    disabledButtonColor?: string;
    // iOS only
    statusBarTextColorSchemeSingleScreen?: string;
    statusBarHideWithNavBar?: boolean;
    statusBarBlur?: boolean;
    disabledBackGesture?: boolean;
    disabledSimultaneousGesture?: boolean;
    screenBackgroundImageName?: string;
    rootBackgroundImageName?: string;
    navBarButtonFontSize?: number;
    navBarButtonFontWeight?: string | number;
    navBarLeftButtonFontSize?: number;
    navBarLeftButtonColor?: string;
    navBarLeftButtonFontWeight?: string | number;
    navBarRightButtonFontSize?: number;
    navBarRightButtonColor?: string;
    navBarRightButtonFontWeight?: string | number;
    topBarShadowColor?: string;
    topBarShadowOpacity?: number;
    topBarShadowOffset?: number;
    topBarShadowRadius?: number;
    preferredContentSize?: { width: number, height: number };
    modalPresentationStyle?: 'formSheet' | 'pageSheet' | 'overFullScreen' | 'overCurrentContext' | 'fullScreen';
    largeTitle?: boolean;
    // Android only
    navigationBarColor?: string;
    navBarTitleTextCentered?: boolean;
    navBarButtonFontFamily?: string;
    statusBarColor?: string;
    drawUnderStatusBar?: boolean;
    collapsingToolBarImage?: object;
    collapsingToolBarCollapsedColor?: string;
    navBarTextFontBold?: boolean;
    navBarHeight?: number;
    navBarTopPadding?: number;
    topTabsHeight?: number;
    topBarBorderColor?: string;
    topBarBorderWidth?: number;
}

export interface NavigatorButtons {
    leftButtons?: NavigatorButton[];
    rightButtons?: NavigatorButton[];
    fab?: FABAndroid;
}

export type IdAndroid = 'back' | 'cancel' | 'accept' | 'sideMenu';

export type SystemItemIOS = 'done' | 'cancel' | 'edit' | 'save' | 'add' |
    'flexibleSpace' | 'fixedSpace' | 'compose' | 'reply' | 'action' | 'organize' |
    'bookmarks' | 'search' | 'refresh' | 'stop' | 'camera' | 'trash' | 'play' |
    'pause' | 'rewind' | 'fastForward' | 'undo' | 'redo';

export type ShowAsActionAndroid = 'ifRoom' | 'always' | 'withText' | 'never';

export interface NavigatorButton {
    id: string | IdAndroid;
    title?: string;
    icon?: any;
    component?: string;
    passProps?: object;
    testID?: string;
    disabled?: boolean;
    disableIconTint?: boolean;
    buttonColor?: string;
    buttonFontSize?: number;
    buttonFontWeight?: string | number;
    systemItem?: SystemItemIOS;
    showAsAction?: ShowAsActionAndroid;
}

export interface FABAndroid {
    collapsedId?: string;
    collapsedIcon?: any;
    collapsedIconColor?: string;
    expendedId?: string;
    expendedIcon?: any;
    expendedIconColor?: string;
    backgroundColor?: string;
    actions?: NavigatorButton[];
}

export interface Drawer {
    left?: {
        screen: string;
        passProps?: any;
        disableOpenGesture?: boolean;
        fixedWidth?: number;
    };
    right?: {
        screen: string;
        passProps?: any;
        disableOpenGesture?: boolean;
        fixedWidth?: number;
    };
    style?: {
        drawerShadow?: boolean;
        contentOverlayColor?: string;
        leftDrawerWidth?: number;
        rightDrawerWidth?: number;
        shouldStretchDrawer?: boolean;
    };
    type?: string;
    animationType?: string;
    disableOpenGesture?: boolean;
}
