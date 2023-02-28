import * as React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, TabProps, DefaultTabBar } from 'react-native-scrollable-tab-view';

interface MyTextProps {
    children?: React.ReactNode;
    style?: TextStyle | undefined;
}

const MyText: React.FC<TabProps<MyTextProps>> = (props) => (
    <Text style={props.style}>{props.children}</Text>
);

interface MyViewProps {
    children?: React.ReactNode;
    style?: ViewStyle | undefined;
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

const DefaultTabBarView2 = () => (
    <ScrollableTabView
        style={{ marginTop: 20, }}
        initialPage={0}
        renderTabBar={() => <DefaultTabBar style={{
            height: 35, paddingTop: 5, backgroundColor: '#FFFFFF', borderWidth: 1
        }}/>}
    >
        <MyText tabLabel='Tab #1'>My</MyText>
        <MyText tabLabel='Tab #2 word word'>favorite</MyText>
        <MyText tabLabel='Tab #3 word word word'>project</MyText>
        <MyView tabLabel='Tab #4 word word word word'><Text>favorite</Text></MyView>
        <MyView tabLabel='Tab #5'><Text>project</Text></MyView>
    </ScrollableTabView>
);
