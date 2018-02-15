import * as React from 'react';
import { View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

interface TabTestState {
    selectedTab: string;
}

const tabBarImage = 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';

class TabTest extends React.Component<any, TabTestState> {
    constructor() {
        super({});

        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="Home"
                renderIcon={() => <Image source={{uri: tabBarImage }} />}
                renderSelectedIcon={() => <Image source={{uri: tabBarImage}} />}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'home' })}>
                    <View />
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image source={{uri: tabBarImage }} />}
                    renderSelectedIcon={() => <Image source={{uri: tabBarImage}} />}
                    renderBadge={() => <View />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <View />
                </TabNavigator.Item>
          </TabNavigator>
        );
    }
}
