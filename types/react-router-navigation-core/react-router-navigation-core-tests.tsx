import * as React from "react";
import {
    StyleSheet,
    Dimensions,
    View,
    StyleProp,
    ViewStyle
} from "react-native";
import { TabStack, renderSubView } from "react-router-navigation-core";
import { TabViewAnimated } from "react-native-tab-view";
import {
    TabBarProps,
    TabSubViewProps,
    TabProps
} from "react-router-navigation";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scene: {
        flex: 1,
        overflow: "hidden"
    }
});

type Props = TabBarProps & {
    children?: Array<React.ReactElement<TabProps>>;
    lazy?: boolean;
    style?: StyleProp<ViewStyle>;
};

type State = {
    key: string;
};

class BottomNavigation extends React.Component<Props, State> {
    static defaultProps = {
        lazy: true
    };

    state = { key: Math.random().toString(10) };

    renderPager = (sceneProps: TabSubViewProps) => <View />;

    renderNavigationBar = (
        sceneProps: TabSubViewProps,
        props: TabSubViewProps
    ) => {
        // Hide tab bar
        if (sceneProps.hideTabBar) return null;
        // Custom tab bar
        if (sceneProps.renderTabBar) {
            return React.createElement(sceneProps.renderTabBar, sceneProps);
        }
        // Default tab bar
        return <View />;
    };

    renderSceneView = (sceneProps: TabSubViewProps) => {
        const { render, children, component, lazy, loadedTabs } = sceneProps;
        const { key } = sceneProps;
        if (lazy && !loadedTabs.includes(key)) {
            return null;
        } else if (render) {
            return render(sceneProps);
        } else if (children && typeof children === "function") {
            return children(sceneProps);
        } else if (component) {
            return React.createElement(component, sceneProps);
        }
        return null;
    };

    renderScene = (sceneProps: TabSubViewProps) => {
        return (
            <View style={styles.scene}>{this.renderSceneView(sceneProps)}</View>
        );
    };

    render() {
        return (
            <TabStack
                {...this.props}
                style={styles.container}
                forceSync
                render={props => {
                    const ownProps = { ...this.props, ...props };
                    return (
                        <TabViewAnimated
                            {...props}
                            key={`transitioner_${this.state.key}`}
                            style={[styles.container, this.props.style]}
                            initialLayout={Dimensions.get("window")}
                            animationEnabled={false}
                            renderPager={renderSubView(
                                this.renderPager,
                                ownProps
                            )}
                            renderFooter={renderSubView(
                                this.renderNavigationBar,
                                ownProps
                            )}
                            renderScene={renderSubView(
                                this.renderScene,
                                ownProps
                            )}
                        />
                    );
                }}
            />
        );
    }
}

export default BottomNavigation;
