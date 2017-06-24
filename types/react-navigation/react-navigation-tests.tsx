import * as React from 'react';
import { View } from 'react-native';
import {
    addNavigationHelpers,
    StackNavigator,
    TabNavigatorScreenOptions,
    TabNavigatorConfig,
    TabBarTop,
    TabBarBottom,
    NavigationProp,
    NavigationAction,
    NavigationTransitionProps,
    Transitioner
} from 'react-navigation';

const Start = (
    <View />
);

export const AppNavigator = StackNavigator({
    StartImage: {
        path: 'startImage',
        screen: Start,
    },
}, {
    initialRouteName: 'StartImage',
});

const Router = (props: any) => (
  <AppNavigator
    navigation={
      addNavigationHelpers({
            dispatch: {},
            state: {},
        })
      }
    />
);

const tabNavigatorScreenOptions: TabNavigatorScreenOptions = {
    title: 'title',
    tabBarVisible: true,
    tabBarIcon: <View />,
    tabBarLabel: 'label',
}

const tabNavigatorConfig: TabNavigatorConfig = {
    lazy: true,
    tabBarComponent: TabBarTop,
}

interface CustomTransitionerProps {
    navigation: NavigationProp<any, NavigationAction>
}

const configureTransition = (
    _transitionProps: NavigationTransitionProps,
    _prevTransitionProps: NavigationTransitionProps
  ) => {
    return {}
  }

const renderTransitioner = (props: NavigationTransitionProps, prevProps: NavigationTransitionProps) => {
    return <View />
}

const CustomTransitioner = (props: CustomTransitionerProps) => {
    <Transitioner
      configureTransition={configureTransition}
      navigation={props.navigation}
      render={renderTransitioner}
      onTransitionStart={() => { }}
      onTransitionEnd={() => { }}
    />
}

const BasicStackNavigation = StackNavigator({
    StartScreen: { screen: Start }
});

<BasicStackNavigation style={{ marginTop: 52 }} />
