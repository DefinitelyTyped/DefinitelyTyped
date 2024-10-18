import * as React from "react";
import { View } from "react-native";
import { TabView } from "react-native-tab-view";
import { TabBarProps, TabProps } from "react-router-navigation";
import { renderSubView, TabStack } from "react-router-navigation-core";

type Props = TabBarProps & {
    children?: Array<React.ReactElement<TabProps>> | undefined;
    lazy?: boolean | undefined;
};

type State = {
    key: string;
};

class BottomNavigation extends React.Component<Props, State> {
    state = { key: Math.random().toString(10) };

    render() {
        return (
            <TabStack
                {...this.props}
                forceSync
                render={props => {
                    const ownProps = { ...this.props, ...props };
                    return (
                        <TabView
                            {...props}
                            key={`transitioner_${this.state.key}`}
                            animationEnabled={false}
                            renderPager={renderSubView(
                                sceneProps => <View />,
                                ownProps,
                            )}
                            renderTabBar={renderSubView(
                                sceneProps => <View />,
                                ownProps,
                            )}
                            tabBarPosition="bottom"
                            renderScene={renderSubView(
                                sceneProps => <View />,
                                ownProps,
                            )}
                        />
                    );
                }}
            />
        );
    }
}
