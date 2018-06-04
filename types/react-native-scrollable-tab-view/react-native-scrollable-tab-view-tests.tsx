import * as React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, TabProps } from 'react-native-scrollable-tab-view';

interface MyTextProps {
    style?: TextStyle;
}

const MyText: React.SFC<TabProps<MyTextProps>> = (props) => (
    <Text style={props.style}>{props.children}</Text>
);

interface MyViewProps {
    style?: ViewStyle;
}

class MyView extends React.Component<TabProps<MyViewProps>> {
    render() {
        return (
            <View style={this.props.style}>{this.props.children}</View>
        );
    }
}

const TabView1 = () => (
    <ScrollableTabView
        style={{ marginTop: 20, }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
    >
        <MyText tabLabel='Tab #1'>My</MyText>
        <MyText tabLabel='Tab #2 word word'>favorite</MyText>
        <MyText tabLabel='Tab #3 word word word'>project</MyText>
        <MyView tabLabel='Tab #4 word word word word'><Text>favorite</Text></MyView>
        <MyView tabLabel='Tab #5'><Text>project</Text></MyView>
    </ScrollableTabView>
);
