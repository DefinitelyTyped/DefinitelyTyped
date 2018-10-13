import * as React from "react";
import { View } from "react-native";
import { TabStack, renderSubView } from "react-router-navigation-core";
import { TabBarProps, TabProps } from "react-router-navigation";
import { TabView } from "react-native-tab-view";

type Props = TabBarProps & {
    children?: Array<React.ReactElement<TabProps>>;
    lazy?: boolean;
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
                                ownProps
                            )}
                            renderTabBar={renderSubView(
                                sceneProps => <View />,
                                ownProps
                            )}
                            tabBarPosition="bottom"
                            renderScene={renderSubView(
                                sceneProps => <View />,
                                ownProps
                            )}
                        />
                    );
                }}
            />
        );
    }
}
