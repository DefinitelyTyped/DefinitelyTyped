/*
The content of index.io.js could be something like

    'use strict';

     import { AppRegistry } from 'react-native'
     import Welcome from './gen/Welcome'

     AppRegistry.registerComponent('MopNative', () => Welcome);

For a list of complete Typescript examples: check https://github.com/bgrieder/RNTSExplorer
*/

import * as PropTypes from "prop-types";
import * as React from "react";
import {
    Alert,
    AppState,
    BackHandler,
    Button,
    CheckBox,
    ColorPropType,
    DataSourceAssetCallback,
    DeviceEventEmitter,
    DeviceEventEmitterStatic,
    Dimensions,
    Image,
    ImageStyle,
    ImageResizeMode,
    ImageLoadEventData,
    ImageErrorEventData,
    ImageResolvedAssetSource,
    ImageBackground,
    InteractionManager,
    Linking,
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
    SectionListRenderItemInfo,
    Share,
    ShareDismissedAction,
    ShareSharedAction,
    Switch,
    RefreshControl,
    RegisteredStyle,
    TabBarIOS,
    NativeModules,
    MaskedViewIOS,
    TextInput,
    TouchableNativeFeedback,
    TextInputFocusEventData,
    InputAccessoryView,
    StatusBar,
    NativeSyntheticEvent,
    NativeScrollEvent,
    GestureResponderEvent,
    TextInputScrollEventData,
    TextInputSelectionChangeEventData,
    TextInputKeyPressEventData,
    TextInputChangeEventData,
    TextInputContentSizeChangeEventData,
    TextInputEndEditingEventData,
    TextInputSubmitEditingEventData,
    KeyboardAvoidingView,
    Modal,
    TimePickerAndroid,
    DatePickerAndroid,
    Picker,
    ViewPropTypes,
    requireNativeComponent,
    Keyboard,
    PermissionsAndroid,
    Platform,
    ProgressBarAndroid,
    PushNotificationIOS,
    AccessibilityInfo,
    YellowBox,
    useWindowDimensions,
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

function dimensionsListener(dimensions: { window: ScaledSize; screen: ScaledSize }) {
    console.log("window dimensions: ", dimensions.window);
    console.log("screen dimensions: ", dimensions.screen);
}

function testDimensions() {
    const { width, height, scale, fontScale } = Dimensions.get(1 === 1 ? "window" : "screen");

    Dimensions.addEventListener("change", dimensionsListener);
    Dimensions.removeEventListener("change", dimensionsListener);
}

function TextUseWindowDimensions() {
    const {width, height, scale, fontScale} = useWindowDimensions()
}

BackHandler.addEventListener("hardwareBackPress", () => {}).remove();

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

StyleSheet.setStyleAttributePreprocessor("fontFamily", (family: string) => family);

const welcomeFontSize = StyleSheet.flatten(styles.welcome).fontSize;

const viewStyle: StyleProp<ViewStyle> = {
    backgroundColor: "#F5FCFF",
};
const textStyle: StyleProp<TextStyle> = {
    fontSize: 20,
};
const imageStyle: StyleProp<ImageStyle> = {
    resizeMode: "contain",
};
const fontVariantStyle: StyleProp<TextStyle> = {
    fontVariant: ['tabular-nums']
}

const viewProperty = StyleSheet.flatten(viewStyle).backgroundColor;
const textProperty = StyleSheet.flatten(textStyle).fontSize;
const imageProperty = StyleSheet.flatten(imageStyle).resizeMode;
const fontVariantProperty = StyleSheet.flatten(fontVariantStyle).fontVariant;

// correct use of the StyleSheet.flatten
const styleArray: StyleProp<ViewStyle>[] = [];
const flattenStyle = StyleSheet.flatten(styleArray);
const { top } = flattenStyle;

const s = StyleSheet.create({
    shouldWork: {
        fontWeight: "900", // if we comment this line, errors gone
        marginTop: 5, // if this line commented, errors also gone
    },
});
const f1: TextStyle = s.shouldWork;

// StyleSheet.compose
// It creates a new style object by composing two existing styles
const composeTextStyle: StyleProp<TextStyle> = {
    color: '#000000',
    fontSize: 20,
};

const composeImageStyle: StyleProp<ImageStyle> = {
    resizeMode: 'contain',
};

// The following use of the compose method is valid
const combinedStyle: StyleProp<TextStyle> = StyleSheet.compose(
    composeTextStyle,
    composeTextStyle,
);

const combinedStyle1: StyleProp<ImageStyle> = StyleSheet.compose(
    composeImageStyle,
    composeImageStyle,
);

const combinedStyle2: StyleProp<TextStyle> = StyleSheet.compose(
    [composeTextStyle],
    [composeTextStyle],
);

const combinedStyle3: StyleProp<TextStyle> = StyleSheet.compose(
    composeTextStyle,
    null,
);

const combinedStyle4: StyleProp<TextStyle> = StyleSheet.compose(
    [composeTextStyle],
    null,
);

const combinedStyle5: StyleProp<TextStyle> = StyleSheet.compose(
    composeTextStyle,
    Math.random() < 0.5 ? composeTextStyle : null,
);

const combinedStyle6: StyleProp<TextStyle | null> = StyleSheet.compose(
    null,
    null,
);

// The following use of the compose method is invalid:
const combinedStyle7 = StyleSheet.compose(composeImageStyle, composeTextStyle); // $ExpectError

const combinedStyle8: StyleProp<ImageStyle> = StyleSheet.compose(composeTextStyle, composeTextStyle); // $ExpectError

const combinedStyle9: StyleProp<ImageStyle> = StyleSheet.compose([composeTextStyle], null); // $ExpectError

const combinedStyle10: StyleProp<ImageStyle> = StyleSheet.compose(Math.random() < 0.5 ? composeTextStyle : null, null); // $ExpectError

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
};

function eventHandler<T extends React.BaseSyntheticEvent>(e: T) {}

function handler(e: GestureResponderEvent) {
    eventHandler(e);
}

type ElementProps<C> = C extends React.Component<infer P, any> ? P : never;

class CustomView extends React.Component {
    render() {
        return <Text style={[StyleSheet.absoluteFill, { ...StyleSheet.absoluteFillObject }]}>Custom View</Text>;
    }
}

class Welcome extends React.Component<ElementProps<View> & { color: string }> {
    static propTypes = {
        ...ViewPropTypes,
        color: ColorPropType,
    };

    // tslint:disable-next-line:no-object-literal-type-assertion
    refs = {} as {
        [key: string]: React.ReactInstance;
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
        const { color, ...props } = this.props;
        return (
            <View {...props} ref="rootView" style={[[styles.container], undefined, null, false]}>
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
    };

    render() {
        return (
            <TouchableNativeFeedback onPress={this.onPressButton}>
                <View style={{ width: 150, height: 100, backgroundColor: "red" }}>
                    <Text style={{ margin: 30 }}>Button</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

// App State
function appStateListener(state: string) {
    console.log("New state: " + state);
}

function appStateTest() {
    console.log("Current state: " + AppState.currentState);
    AppState.addEventListener("change", appStateListener);
    AppState.addEventListener("blur", appStateListener);
    AppState.addEventListener("focus", appStateListener);
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
    list: FlatList<any> | null = null;

    componentDidMount(): void {
        if (this.list) {
            this.list.flashScrollIndicators();
        }
    }

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
                ref={list => (this.list = list)}
                data={[1, 2, 3, 4, 5]}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._renderSeparator}
                ListFooterComponent={null}
                ListFooterComponentStyle={{ padding: 8 }}
                ListHeaderComponent={null}
                ListHeaderComponentStyle={{ padding: 8 }}
            />
        );
    }
}

export class SectionListTest extends React.Component<SectionListProps<string>, {}> {
    myList: React.RefObject<SectionList<string>>;

    constructor(props: SectionListProps<string>) {
        super(props);
        this.myList = React.createRef();
    }

    scrollMe = () => {
        this.myList.current && this.myList.current.scrollToLocation({ itemIndex: 0, sectionIndex: 1 });
    };

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
                    ref={this.myList}
                    sections={sections}
                    renderSectionHeader={({ section }) => (
                        <View>
                            <Text>{section.title}</Text>
                        </View>
                    )}
                    renderItem={(info: SectionListRenderItemInfo<string>) => (
                        <View>
                            <Text>{`${info.section.title} - ${info.item}`}</Text>
                        </View>
                    )}
                    maxToRenderPerBatch={5}
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

const getInitialUrlTest = () => Linking.getInitialURL().then(val => {
    if (val !== null) {
        val.indexOf('val is now a string');
    }
})

class ScrollerListComponentTest extends React.Component<{}, { dataSource: ListViewDataSource }> {
    eventHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        console.log(event);
    };

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

                    return (
                        <ScrollView
                            horizontal={true}
                            nestedScrollEnabled={true}
                            invertStickyHeaders={true}
                            contentOffset={{ x: 0, y: 0 }}
                            snapToStart={false}
                            snapToEnd={false}
                            snapToOffsets={[100, 300, 500]}
                            {...props}
                            style={[scrollViewStyle1.scrollView, scrollViewStyle2]}
                            onScrollToTop={() => {}}
                            scrollToOverflowEnabled={true}
                        />
                    );
                }}
                renderRow={({ type, data }, _, row) => {
                    return <Text>Filler</Text>;
                }}
                onScroll={this.eventHandler}
                onScrollBeginDrag={this.eventHandler}
                onScrollEndDrag={this.eventHandler}
                onMomentumScrollBegin={this.eventHandler}
                onMomentumScrollEnd={this.eventHandler}
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

Alert.prompt(
    'Enter password',
    'Enter your password to claim your $1.5B in lottery winnings',
    text => {
        console.log(text);
    },
    'secure-text',
);

Alert.prompt(
    'Enter password',
    'Enter your password to claim your $1.5B in lottery winnings',
    [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {
            text: 'OK',
            onPress: password => console.log('OK Pressed, password: ' + password),
        },
    ],
    'secure-text',
);

class MaskedViewTest extends React.Component {
    render() {
        return (
            <MaskedViewIOS maskElement={<View />}>
                <View />
            </MaskedViewIOS>
        );
    }
}

const CheckboxTest = () => (
    <CheckBox
        testID="testId"
        disabled={false}
        onChange={value => { console.log(value); }}
        onValueChange={value => { console.log(value); }}
        value={true}
    />
);

class InputAccessoryViewTest extends React.Component {
    render() {
        const uniqueID = "foobar";
        return (
            <InputAccessoryView nativeID={uniqueID}>
                <TextInput inputAccessoryViewID={uniqueID} />
            </InputAccessoryView>
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
const deviceEventEmitterStatic: DeviceEventEmitterStatic = DeviceEventEmitter;
deviceEventEmitterStatic.addListener("keyboardWillShow", data => true);
deviceEventEmitterStatic.addListener("keyboardWillShow", data => true, {});

class TextInputTest extends React.Component<{}, { username: string }> {
    username: TextInput | null = null;

    handleUsernameChange = (text: string) => {
        console.log(`text: ${text}`);
    };

    onScroll = (e: NativeSyntheticEvent<TextInputScrollEventData>) => {
        testNativeSyntheticEvent(e);
        console.log(`x: ${e.nativeEvent.contentOffset.x}`);
        console.log(`y: ${e.nativeEvent.contentOffset.y}`);
    };

    handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        testNativeSyntheticEvent(e);
    };

    handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        testNativeSyntheticEvent(e);
    };

    handleOnSelectionChange = (e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => {
        testNativeSyntheticEvent(e);

        console.log(`target: ${e.nativeEvent.target}`);
        console.log(`start: ${e.nativeEvent.selection.start}`);
        console.log(`end: ${e.nativeEvent.selection.end}`);
    };

    handleOnKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        testNativeSyntheticEvent(e);
        console.log(`key: ${e.nativeEvent.key}`);
    };

    handleOnChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        testNativeSyntheticEvent(e);

        console.log(`eventCount: ${e.nativeEvent.eventCount}`);
        console.log(`target: ${e.nativeEvent.target}`);
        console.log(`text: ${e.nativeEvent.text}`);
    };

    handleOnContentSizeChange = (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
        testNativeSyntheticEvent(e);
        console.log(`contentSize.width: ${e.nativeEvent.contentSize.width}`);
        console.log(`contentSize.height: ${e.nativeEvent.contentSize.height}`);
    };

    handleOnEndEditing = (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        testNativeSyntheticEvent(e);
        console.log(`text: ${e.nativeEvent.text}`);
    };

    handleOnSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        testNativeSyntheticEvent(e);
        console.log(`text: ${e.nativeEvent.text}`);
    };

    render() {
        return (
            <View>
                <Text onPress={() => this.username && this.username.focus()}>Username</Text>

                <TextInput
                    ref={input => (this.username = input)}
                    textContentType="username"
                    autoCompleteType="username"
                    value={this.state.username}
                    onChangeText={this.handleUsernameChange}
                />

                <TextInput multiline onScroll={this.onScroll} />

                <TextInput onBlur={this.handleOnBlur} onFocus={this.handleOnFocus} />

                <TextInput onSelectionChange={this.handleOnSelectionChange} />

                <TextInput onKeyPress={this.handleOnKeyPress} />

                <TextInput onChange={this.handleOnChange} />

                <TextInput onChange={this.handleOnChange} />

                <TextInput onEndEditing={this.handleOnEndEditing} />

                <TextInput onSubmitEditing={this.handleOnSubmitEditing} />

                <TextInput multiline onContentSizeChange={this.handleOnContentSizeChange} />

                <TextInput contextMenuHidden={true} textAlignVertical="top"/>
            </View>
        );
    }
}

class StatusBarTest extends React.Component {
    render() {
        StatusBar.setBarStyle("dark-content", true);

        console.log("height:", StatusBar.currentHeight);

        return <StatusBar backgroundColor="blue" barStyle="light-content" translucent />;
    }
}

export class ImageTest extends React.Component {
    componentDidMount(): void {
        const uri = "https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png";
        const image: ImageResolvedAssetSource = Image.resolveAssetSource({ uri });
        console.log(image.width, image.height, image.scale, image.uri);

        Image.queryCache && Image.queryCache([uri]).then(({ [uri]: status }) => {
            if (status === undefined) {
                console.log("Image is not in cache");
            } else {
                console.log(`Image is in ${status} cache`);
            }
        })
    }

    handleOnLoad = (e: NativeSyntheticEvent<ImageLoadEventData>) => {
        testNativeSyntheticEvent(e);
        console.log("height:", e.nativeEvent.source.height);
        console.log("width:", e.nativeEvent.source.width);
        console.log("url:", e.nativeEvent.source.url);
    };

    handleOnError = (e: NativeSyntheticEvent<ImageErrorEventData>) => {
        testNativeSyntheticEvent(e);
        console.log("error:", e.nativeEvent.error);
    };

    render() {
        const resizeMode: ImageResizeMode = "contain";

        return (
            <View>
                <Image
                    source={{ uri: "https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png" }}
                    onLoad={this.handleOnLoad}
                    onError={this.handleOnError}
                />

                <Image
                    source={{ uri: "https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png" }}
                    resizeMode={resizeMode}
                />
            </View>
        );
    }
}

export class ImageBackgroundProps extends React.Component {
    private _imageRef: Image | null = null;

    setImageRef = (image: Image) => {
        this._imageRef = image;
    };

    render() {
        return (
            <View>
                <ImageBackground
                    source={{ uri: "https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png" }}
                    imageRef={this.setImageRef}
                />
            </View>
        );
    }
}

const listViewDataSourceTest = new ListView.DataSource({ rowHasChanged: () => true });

class AccessibilityTest extends React.Component {
    render() {
        return (
            <View
                accessibilityElementsHidden={true}
                importantForAccessibility={"no-hide-descendants"}
                accessibilityTraits={"none"}
                onAccessibilityTap={() => {}}
                accessibilityRole="header"
                accessibilityStates={["selected"]}
                accessibilityState={{checked: true}}
                accessibilityHint="Very importent header"
                onMagicTap={() => {}}
                onAccessibilityEscape={() => {}}
            >
                <Text accessibilityTraits={["key", "text"]} accessibilityIgnoresInvertColors>
                    Text
                </Text>
                <View />
            </View>
        );
    }
}

const AccessibilityInfoFetchTest = AccessibilityInfo.fetch().then((isEnabled) => {console.log(isEnabled)});

const KeyboardAvoidingViewTest = () => <KeyboardAvoidingView enabled />;

const ModalTest = () => <Modal hardwareAccelerated />;

const TimePickerAndroidTest = () => {
    TimePickerAndroid.open({
        hour: 8,
        minute: 15,
        is24Hour: true,
        mode: "spinner",
    }).then(result => {
        if (result.action === TimePickerAndroid.timeSetAction) {
            console.log('Time', result.hour, result.minute)
        }
    });
}

const DatePickerAndroidTest = () => {
    DatePickerAndroid.open({
        date: new Date(),
        mode: 'calendar'
    }).then(result => {
        if (result.action === DatePickerAndroid.dateSetAction) {
            console.log('Date', result.year, result.month, result.day)
        }
    });
}

const PickerTest = () => (
    <Picker mode="dropdown" selectedValue="v1" onValueChange={(val: string) => {}}>
        <Picker.Item label="Item1" value="v1" />
        <Picker.Item label="Item2" value="v2" />
    </Picker>
);

class BridgedComponentTest extends React.Component {
    static propTypes = {
        jsProp: PropTypes.string.isRequired,
        ...ViewPropTypes,
    };

    render() {
        return <NativeBridgedComponent {...this.props} nativeProp="test" />;
    }
}

const NativeBridgedComponent = requireNativeComponent("NativeBridgedComponent");

const SwitchColorTest = () => <Switch trackColor={{ true: "pink", false: "red" }} />;

const SwitchThumbColorTest = () => <Switch thumbColor={"red"} />;

const NativeIDTest = () => (
    <ScrollView nativeID={"nativeID"}>
        <View nativeID={"nativeID"} />
        <Text nativeID={"nativeID"}>Text</Text>
    </ScrollView>
);

const MaxFontSizeMultiplierTest = () => <Text maxFontSizeMultiplier={0}>Text</Text>;

const ShareTest = () => {
    Share.share(
        { title: "title", message: "message" },
        { dialogTitle: "dialogTitle", excludedActivityTypes: ["activity"], tintColor: "red", subject: "Email subject" }
    );
    Share.share({ title: "title", url: "url" });
    Share.share({ message: "message" }).then(result => {
        if (result.action === Share.sharedAction) {
            const activity = result.activityType;
        } else if (result.action === Share.dismissedAction) {
        }
    });
};

const KeyboardTest = () => {
    const subscriber = Keyboard.addListener("keyboardDidHide", (event) => {event});
    subscriber.remove();
}

const PermissionsAndroidTest = () => {
    PermissionsAndroid.request('android.permission.CAMERA').then(result => {
        switch (result) {
            case 'granted':
                break;
            case 'denied':
                break;
            case 'never_ask_again':
                break;
        }
    })

    PermissionsAndroid.requestMultiple(['android.permission.CAMERA', 'android.permission.ACCESS_FINE_LOCATION']).then(results => {
        switch (results['android.permission.CAMERA']) {
            case 'granted':
                break;
            case 'denied':
                break;
            case 'never_ask_again':
                break;
        }
        switch (results['android.permission.ACCESS_FINE_LOCATION']) {
            case 'granted':
                break;
            case 'denied':
                break;
            case 'never_ask_again':
                break;
        }
    })
}

// Platform
const PlatformTest = () => {
    switch (Platform.OS) {
        case 'ios':
            if (!Platform.isPad) {
                return 32;
            } else {
                return 44;
            }
        case 'android':
        case 'macos':
        case 'windows':
            return Platform.isTV ? 64 : 56;
        default:
            return Platform.isTV ? 40 : 44;
    }
};

Platform.select({ android: 1 }); // $ExpectType number | undefined
Platform.select({ android: 1, ios: 2, default: 0 }); // $ExpectType number
Platform.select({ android: 1, ios: 2, macos: 3, web: 4, windows: 5 }); // $ExpectType number
Platform.select({ android: 1, ios: 2, macos: 3, web: 4, windows: 5, default: 0 }); // $ExpectType number

// ProgressBarAndroid
const ProgressBarAndroidTest = () => {
    <ProgressBarAndroid
        animating
        color="white"
        styleAttr="Horizontal"
        progress={0.42}
    />
};

// Push notification
const PushNotificationTest = () => {
    PushNotificationIOS.presentLocalNotification({
        alertBody: "notificatus",
        userInfo: "informius",
        alertTitle: "Titulus",
        alertAction: "view",
    });

    PushNotificationIOS.scheduleLocalNotification({
        alertAction: 'view',
        alertBody: 'Look at me!',
        alertTitle: 'Hello!',
        applicationIconBadgeNumber: 999,
        category: 'engagement',
        fireDate: (new Date()).toISOString(),
        isSilent: false,
        repeatInterval: 'minute',
        userInfo: {
            abc: 123,
        },
    });
}

// YellowBox
const YellowBoxTest = () => <YellowBox />;
