/*
The content of index.io.js could be something like

    'use strict';

     import { AppRegistry } from 'react-native'
     import Welcome from './gen/Welcome'

     AppRegistry.registerComponent('MopNative', () => Welcome);

For a list of complete Typescript examples: check https://github.com/bgrieder/RNTSExplorer
*/

import * as React from "react";
import {
    Alert,
    AppState,
    AppStateIOS,
    BackAndroid,
    Button,
    DataSourceAssetCallback,
    DeviceEventEmitterStatic,
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
    FlatListProperties,
    ScaledSize,
    SectionList,
    SectionListProperties,
    findNodeHandle,
    ScrollView,
    ScrollViewProps,
    RefreshControl,
    TabBarIOS,
    NativeModules,
    MaskedViewIOS,
} from "react-native";

declare module "react-native" {
    interface NativeTypedModule {
        someFunction(): void;
        someProperty: string;
    }
    interface NativeModulesStatic {
        NativeTypedModule: NativeTypedModule;
    }
}

NativeModules.NativeUntypedModule;

NativeModules.NativeTypedModule.someFunction();
NativeModules.NativeTypedModule.someProperty = "";

function dimensionsListener(dimensions: { window: ScaledSize, screen: ScaledSize }) {
    console.log("window dimensions: ", dimensions.window);
    console.log("screen dimensions: ", dimensions.screen);
}

function testDimensions() {
    const { width, height, scale, fontScale } = Dimensions.get(1 === 1 ? "window" : "screen");

    Dimensions.addEventListener('change', dimensionsListener);
    Dimensions.removeEventListener('change', dimensionsListener);
}

BackAndroid.addEventListener("hardwareBackPress", () => {});

interface LocalStyles {
    container: ViewStyle;
    welcome: TextStyle;
    instructions: TextStyle;
}

const styles = StyleSheet.create<LocalStyles>({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});

//alternative declaration of styles (inline typings)
const stylesAlt = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});

const welcomeFontSize = StyleSheet.flatten(styles.welcome).fontSize;

class CustomView extends React.Component {
    render() {
        return <Text style={[StyleSheet.absoluteFill, { ...StyleSheet.absoluteFillObject }]}>Custom View</Text>;
    }
}

class Welcome extends React.Component {
    refs: {
        [key: string]: any;
        rootView: View;
        customView: CustomView;
    };

    testNativeMethods() {
        // this.setNativeProps({});

        const { rootView } = this.refs;

        rootView.measure((x: number, y: number, width: number, height: number) => {});
    }

    testFindNodeHandle() {
        const { rootView, customView } = this.refs;

        const nativeComponentHandle = findNodeHandle(rootView);

        const customComponentHandle = findNodeHandle(customView);

        const fromHandle = findNodeHandle(customComponentHandle);
    }

    render() {
        return (
            <View ref="rootView" style={[[styles.container], undefined, null, false]}>
                <Text style={styles.welcome}>Welcome to React Native</Text>
                <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{"\n"}
                    Cmd+D or shake for dev menu
                </Text>
                <CustomView ref="customView" />
            </View>
        );
    }
}

export default Welcome;

// App State

function appStateListener(state: string) {
    console.log("New state: " + state);
}

function appStateTest() {
    console.log("Current state: " + AppState.currentState);
    AppState.addEventListener("change", appStateListener);
}

function appStateIOSTest() {
    console.log("Current state: " + AppStateIOS.currentState);
    AppStateIOS.addEventListener("change", appStateListener);
}

// ViewPagerAndroid

export class ViewPagerAndroidTest {
    render() {
        return (
            <ViewPagerAndroid
                style={{ height: 56 }}
                initialPage={0}
                keyboardDismissMode={"on-drag"}
                onPageScroll={e => {
                    console.log(`position: ${e.nativeEvent.position}`);
                    console.log(`offset: ${e.nativeEvent.offset}`);
                }}
                onPageSelected={e => {
                    console.log(`position: ${e.nativeEvent.position}`);
                }}
            />
        );
    }
}

const profiledJSONParse = Systrace.measure("JSON", "parse", JSON.parse);
profiledJSONParse("[]");

InteractionManager.runAfterInteractions(() => {
    // ...
}).then(() => "done");

export class FlatListTest extends React.Component<FlatListProperties<number>, {}> {
    _renderItem = (rowData: any) => {
        return (
            <View>
                <Text> {rowData.item} </Text>
            </View>
        );
    };

    _renderSeparator = () => <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />;

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._renderSeparator}
            />
        );
    }
}

export class SectionListTest extends React.Component<SectionListProperties<string>, {}> {
    render() {
        const sections = [
            {
                title: "Section 1",
                data: ["A", "B", "C", "D", "E"],
            },
            {
                title: "Section 2",
                data: ["A2", "B2", "C2", "D2", "E2"],
                renderItem: (info: { item: string }) => (
                    <View>
                        <Text>{info.item}</Text>
                    </View>
                ),
            },
        ];

        return (
            <SectionList
                sections={sections}
                renderSectionHeader={({ section }) => (
                    <View>
                        <Text>{section.title}</Text>
                    </View>
                )}
                renderItem={(info: { item: string }) => (
                    <View>
                        <Text>{info.item}</Text>
                    </View>
                )}
            />
        );
    }
}

export class CapsLockComponent extends React.Component<TextProperties> {
    render() {
        const content = (this.props.children || "") as string;
        return <Text {...this.props}>{content.toUpperCase()}</Text>;
    }
}

class ScrollerListComponentTest extends React.Component<{}, { dataSource: ListViewDataSource }> {
    render() {
        const scrollViewStyle1 = StyleSheet.create({
            scrollView: {
                backgroundColor: "red",
            },
        });
        const scrollViewStyle2 = {
            flex: 1,
        };
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderScrollComponent={props => {
                    if (props.scrollEnabled) {
                        throw new Error("Expected scroll to be enabled.");
                    }

                    return <ScrollView {...props} style={[scrollViewStyle1.scrollView, scrollViewStyle2]} />;
                }}
                renderRow={({ type, data }, _, row) => {
                    return <Text>Filler</Text>;
                }}
            />
        );
    }
}

class TabBarTest extends React.Component {
    render() {
        return (
            <TabBarIOS
                barTintColor="darkslateblue"
                itemPositioning="center"
                tintColor="white"
                translucent={true}
                unselectedTintColor="black"
                unselectedItemTintColor="red"
            >
                <TabBarIOS.Item
                    badge={0}
                    badgeColor="red"
                    icon={{ uri: undefined }}
                    selected={true}
                    onPress={() => {}}
                    renderAsOriginal={true}
                    selectedIcon={undefined}
                    systemIcon="history"
                    title="Item 1"
                />
            </TabBarIOS>
        );
    }
}

class AlertTest extends React.Component {
    showAlert() {
        Alert.alert(
            "Title",
            "Message",
            [
                { text: "First button", onPress: () => {} },
                { text: "Second button", onPress: () => {} },
                { text: "Third button", onPress: () => {} },
            ],
            {
                cancelable: false,
                onDismiss: () => {},
            }
        );
    }

    render() {
        return <Button title="Press me" onPress={this.showAlert} />;
    }
}

class MaskedViewTest extends React.Component {
    render() {
        return (
            <MaskedViewIOS maskElement={<View />}>
                <View />
            </MaskedViewIOS>
        );
    }
}

// DataSourceAssetCallback
const dataSourceAssetCallback1: DataSourceAssetCallback = {
    rowHasChanged: (r1, r2) => true,
    sectionHeaderHasChanged: (h1, h2) => true,
    getRowData: (dataBlob, sectionID, rowID) => (sectionID as number) + (rowID as number),
    getSectionHeaderData: (dataBlob, sectionID) => sectionID as string,
};

const dataSourceAssetCallback2: DataSourceAssetCallback = {};

// DeviceEventEmitterStatic
const deviceEventEmitterStatic: DeviceEventEmitterStatic = null;
deviceEventEmitterStatic.addListener("keyboardWillShow", data => true);
deviceEventEmitterStatic.addListener("keyboardWillShow", data => true, {});
