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
    BackHandler,
    Button,
    DataSourceAssetCallback,
    DeviceEventEmitterStatic,
    Dimensions,
    Image,
    ImageStyle,
    ImageResizeMode,
    ImageLoadEventData,
    ImageErrorEventData,
    ImageResolvedAssetSource,
    InteractionManager,
    ListView,
    ListViewDataSource,
    StyleSheet,
    StyleProp,
    Systrace,
    Text,
    TextStyle,
    TextProps,
    View,
    ViewStyle,
    ViewPagerAndroid,
    FlatList,
    FlatListProps,
    ScaledSize,
    SectionList,
    SectionListProps,
    findNodeHandle,
    ScrollView,
    ScrollViewProps,
    RefreshControl,
    TabBarIOS,
    NativeModules,
    MaskedViewIOS,
    TextInput,
    TouchableNativeFeedback,
    TextInputFocusEventData,
    InputAccessoryView,
    StatusBar,
    NativeSyntheticEvent,
    GestureResponderEvent,
    TextInputScrollEventData,
    TextInputSelectionChangeEventData,
    TextInputKeyPressEventData,
    TextInputChangeEventData,
    TextInputContentSizeChangeEventData,
    TextInputEndEditingEventData,
    TextInputSubmitEditingEventData,
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

BackHandler.addEventListener("hardwareBackPress", () => {}).remove();

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

const viewStyle: StyleProp<ViewStyle> = {
  backgroundColor: "#F5FCFF",
}
const textStyle: StyleProp<TextStyle> = {
  fontSize: 20,
}
const imageStyle: StyleProp<ImageStyle> = {
  resizeMode: 'contain',
}

const viewProperty = StyleSheet.flatten(viewStyle).backgroundColor;
const textProperty = StyleSheet.flatten(textStyle).fontSize;
const imageProperty = StyleSheet.flatten(imageStyle).resizeMode;

const testNativeSyntheticEvent = <T extends {}>(e: NativeSyntheticEvent<T>): void => {
    e.isDefaultPrevented();
    e.preventDefault();
    e.isPropagationStopped();
    e.stopPropagation();
    e.persist();
    e.cancelable;
    e.bubbles;
    e.currentTarget;
    e.defaultPrevented;
    e.eventPhase;
    e.isTrusted;
    e.nativeEvent;
    e.target;
    e.timeStamp;
    e.type;
    e.nativeEvent;
}

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

// TouchableNativeFeedbackTest
export class TouchableNativeFeedbackTest extends React.Component {
    onPressButton = (e: GestureResponderEvent) => {
        e.persist();
        e.isPropagationStopped();
        e.isDefaultPrevented();
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.onPressButton}
            >
                <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                    <Text style={{margin: 30}}>Button</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

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

export class FlatListTest extends React.Component<FlatListProps<number>, {}> {
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

export class SectionListTest extends React.Component<SectionListProps<string>, {}> {
    myList: SectionList<any>

    scrollMe = () => {
        this.myList.scrollToLocation({itemIndex: 0, sectionIndex: 1});
    }

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
            <React.Fragment>
                <Button title="Press" onPress={this.scrollMe} />

                <SectionList
                    ref={(ref: any) => this.myList = ref}
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
            </React.Fragment>
        );
    }
}

export class CapsLockComponent extends React.Component<TextProps> {
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

                    return <ScrollView horizontal={true} contentOffset={{x: 0, y: 0}} {...props} style={[scrollViewStyle1.scrollView, scrollViewStyle2]} />;
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

class InputAccessoryViewTest extends React.Component {
    render() {
        const uniqueID = "foobar";
        return (
            <InputAccessoryView nativeID={uniqueID}>
                <TextInput inputAccessoryViewID={uniqueID} />
            </InputAccessoryView>
        )
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


class TextInputTest extends React.Component<{}, {username: string}> {
    username: TextInput | null = null;

    handleUsernameChange = (text: string) => {
        console.log(`text: ${ text }`);
    }

    onScroll = (e: NativeSyntheticEvent<TextInputScrollEventData>) => {
        testNativeSyntheticEvent(e);
        console.log(`x: ${ e.nativeEvent.contentOffset.x }`);
        console.log(`y: ${ e.nativeEvent.contentOffset.y }`);
    }

    handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        testNativeSyntheticEvent(e);
    }

    handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        testNativeSyntheticEvent(e);
    }

    handleOnSelectionChange = (e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => {
        testNativeSyntheticEvent(e);

        console.log(`target: ${ e.nativeEvent.target }`);
        console.log(`start: ${ e.nativeEvent.selection.start }`);
        console.log(`end: ${ e.nativeEvent.selection.end }`);
    }

    handleOnKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        testNativeSyntheticEvent(e);
        console.log(`key: ${ e.nativeEvent.key }`);
    }

    handleOnChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        testNativeSyntheticEvent(e);

        console.log(`eventCount: ${ e.nativeEvent.eventCount }`);
        console.log(`target: ${ e.nativeEvent.target }`);
        console.log(`text: ${ e.nativeEvent.text }`);
    }

    handleOnContentSizeChange = (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
        testNativeSyntheticEvent(e);
        console.log(`contentSize.width: ${ e.nativeEvent.contentSize.width }`);
        console.log(`contentSize.height: ${ e.nativeEvent.contentSize.height }`);
    }

    handleOnEndEditing = (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        testNativeSyntheticEvent(e);
        console.log(`text: ${ e.nativeEvent.text }`);
    }

    handleOnSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        testNativeSyntheticEvent(e);
        console.log(`text: ${ e.nativeEvent.text }`);
    }

    render() {
        return (
            <View>
                <Text onPress={() => this.username.focus()}>Username</Text>

                <TextInput
                    ref={input => this.username = input}
                    value={this.state.username}
                    onChangeText={this.handleUsernameChange}
                />

                <TextInput
                    multiline
                    onScroll={this.onScroll}
                />

                <TextInput
                    onBlur={this.handleOnBlur}
                    onFocus={this.handleOnFocus}
                />

                <TextInput
                    onSelectionChange={this.handleOnSelectionChange}
                />

                <TextInput
                    onKeyPress={this.handleOnKeyPress}
                />

                <TextInput
                    onChange={this.handleOnChange}
                />

                <TextInput
                    onChange={this.handleOnChange}
                />

                <TextInput
                    onEndEditing={this.handleOnEndEditing}
                />

                <TextInput
                    onSubmitEditing={this.handleOnSubmitEditing}
                />

                <TextInput
                    multiline
                    onContentSizeChange={this.handleOnContentSizeChange}
                />
            </View>
        );
    }
}

class StatusBarTest extends React.Component {
    render() {
        StatusBar.setBarStyle("dark-content", true);

        console.log('height:', StatusBar.currentHeight);

        return (
            <StatusBar
                backgroundColor="blue"
                barStyle="light-content"
                translucent
            />
        );
    }
}

export class ImageTest extends React.Component {
    componentDidMount(): void {
        const image: ImageResolvedAssetSource = Image.resolveAssetSource({
            uri: 'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png'
        });
        console.log(image.width, image.height, image.scale, image.uri);
    }

    handleOnLoad = (e: NativeSyntheticEvent<ImageLoadEventData>) => {
        testNativeSyntheticEvent(e);
        console.log('height:', e.nativeEvent.source.height);
        console.log('width:', e.nativeEvent.source.width);
        console.log('url:', e.nativeEvent.source.url);
    }

    handleOnError = (e: NativeSyntheticEvent<ImageErrorEventData>) => {
        testNativeSyntheticEvent(e);
        console.log('error:', e.nativeEvent.error);
    }

    render() {
        const resizeMode: ImageResizeMode = 'contain';

        return (
            <View>
                <Image
                    source={{ uri: 'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png' }}
                    onLoad={this.handleOnLoad}
                    onError={this.handleOnError}
                />

                <Image
                    source={{ uri: 'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png' }}
                    resizeMode={resizeMode}
                />
            </View>
        );
    }
}

class StylePropsTest extends React.PureComponent {
    render() {
        const uri = 'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png'

        return (
            <View backgroundColor="lightgray" flex={1} overflow="scroll">
                <Image
                    borderRadius={100}
                    // height={200}
                    margin={20}
                    overflow="visible" // ps: must fail if "scroll"
                    source={{ uri }}
                    style={{ width: 200, height: 200, tintColor: 'green' }}
                    // tintColor="green"
                    // width={200}
                />
            </View>
        );
    }
}

const listViewDataSourceTest = new ListView.DataSource({rowHasChanged: () => true})

class AccessibilityViewHidingTest extends React.Component {
    render() {
        return (
            <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
                <View />
            </View>
        );
    }
}
