/*
The content of index.io.js could be something like

    'use strict';

     import { AppRegistry } from 'react-native'
     import Welcome from './gen/Welcome'

     AppRegistry.registerComponent('MopNative', () => Welcome);

For a list of complete Typescript examples: check https://github.com/bgrieder/RNTSExplorer
*/

import * as React from 'react'
import {
    AppState,
    AppStateIOS,
    BackAndroid,
    Dimensions,
    InteractionManager,
    ListView,
    ListViewDataSource,
    StyleSheet,
    Systrace,
    Text,
    TextStyle,
    TextProperties,
    View,
    ViewStyle,
    ViewPagerAndroid,
    FlatList,
    SectionList,
    findNodeHandle,
    ScrollView,
    ScrollViewProps,
    RefreshControl,
    TabBarIOS,
} from 'react-native';

function testDimensions() {
  const {
    width,
    height,
    scale,
    fontScale,
  } = Dimensions.get(1 === 1 ? "window" : "screen");
}

BackAndroid.addEventListener("hardwareBackPress", () => {
});

interface LocalStyles {
    container: ViewStyle;
    welcome: TextStyle;
    instructions: TextStyle;
}

const styles = StyleSheet.create<LocalStyles>(
    {
        container:    {
            flex:            1,
            justifyContent:  'center',
            alignItems:      'center',
            backgroundColor: '#F5FCFF',
        },
        welcome:   {
            fontSize:  20,
            textAlign: 'center',
            margin:    10,
        },
        instructions: {
            textAlign:    'center',
            color:        '#333333',
            marginBottom: 5,
        },
    }
)

//alternative declaration of styles (inline typings)
const stylesAlt = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        }
    }
);

class CustomView extends React.Component {

    render() {
        return (
            <Text>Custom View</Text>
        );
    }

}

class Welcome extends React.Component {
    refs: {
        [key: string]: any
        rootView: View
        customView: CustomView
    }

    testNativeMethods() {
        // this.setNativeProps({});

        const { rootView } = this.refs;

        rootView.measure((x: number, y: number, width: number, height: number) => {
        });

    }

    testFindNodeHandle() {

        const { rootView, customView } = this.refs;

        let nativeComponentHandle = findNodeHandle(rootView);

        let customComponentHandle = findNodeHandle(customView);

        let fromHandle = findNodeHandle(customComponentHandle);

    }

    render() {
        return (
            <View ref="rootView" style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                <CustomView ref="customView" />
            </View>
        )
    }
}

export default Welcome;

// App State

function appStateListener(state: string) {
    console.log('New state: ' + state);
}

function appStateTest() {
    console.log('Current state: ' + AppState.currentState);
    AppState.addEventListener('change', appStateListener);
}

function appStateIOSTest() {
    console.log('Current state: ' + AppStateIOS.currentState);
    AppStateIOS.addEventListener('change', appStateListener);
}

// ViewPagerAndroid

export class ViewPagerAndroidTest {
    render() {
        return (
            <ViewPagerAndroid style={{height: 56}}
                initialPage={0}
                keyboardDismissMode={'on-drag'}
                onPageScroll={(e) => {
                    console.log(`position: ${e.nativeEvent.position}`);
                    console.log(`offset: ${e.nativeEvent.offset}`);
                }}
                onPageSelected={(e) => {
                    console.log(`position: ${e.nativeEvent.position}`)
                }}
                />
        );
    }
}

const profiledJSONParse = Systrace.measure('JSON', 'parse', JSON.parse)
profiledJSONParse('[]')

InteractionManager.runAfterInteractions(() => {
    // ...
}).then(() => 'done')

export class FlatListTest {
    render() {
        <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={(itemInfo: number) => <View><Text>{itemInfo}</Text></View>}
        />
    }
}

export class SectionListTest {
    render() {
        var sections = [{
            key: 's1',
            data: ['A', 'B', 'C', 'D', 'E']
        }, {
            key: 's2',
            data: ['A2', 'B2', 'C2', 'D2', 'E2']
        }];

        <SectionList
            sections={sections}
            renderItem={(info: {item: string, index: number}) => <View><Text>{info.item}</Text></View>}
        />
    }
}

export class CapsLockComponent extends React.Component<TextProperties> {
    render() {
        const content = (this.props.children || "") as string
        return (
            <Text {...this.props} >
                {content.toUpperCase()}
            </Text>
        )
    }
}

class ScrollerListComponentTest extends React.Component<{}, { dataSource: ListViewDataSource}> {
    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                renderScrollComponent={(props) => {
                    if (props.scrollEnabled) {
                        throw new Error("Expected scroll to be enabled.")
                    }

                    return <ScrollView {...props} />
                }}
                renderRow={({ type, data }, _, row: number) => {
                    return <Text>Filler</Text>
                }
            } />
        )
    }
}


class TabBarTest extends React.Component {
    render() {
        return (
            <TabBarIOS
                barTintColor="darkslateblue"
                itemPositioning="center"
                tintColor="white"
                translucent={ true }
                unselectedTintColor="black"
                unselectedItemTintColor="red">
                <TabBarIOS.Item
                    badge={ 0 }
                    badgeColor="red"
                    icon={{uri: undefined}}
                    selected={ true }
                    onPress={() => {}}
                    renderAsOriginal={ true }
                    selectedIcon={ undefined }
                    systemIcon="history"
                    title="Item 1">
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
