import {
    Animation,
    AnimationSet,
    AsyncStorage,
    callNativeWithPromise,
    Clipboard,
    ConsoleModule,
    Dimensions,
    Hippy,
    HippyEventEmitter,
    Image,
    ListView,
    Modal,
    Navigator,
    NetInfo,
    NetworkModule,
    PixelRatio,
    Platform,
    RefreshWrapper,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    UIManagerModule,
    View,
    ViewPager,
    WaterfallView,
    WebView,
} from "@hippy/react";
import * as React from "react";

function Comp() {
    const textInput = React.useRef<TextInput>(null);

    React.useEffect(() => {
        textInput.current?.focus();
    }, []);

    React.useEffect(() => {
        NetInfo.addEventListener("change", () => {});
    }, [NetInfo]);

    React.useEffect(() => {
        (async () => {
            const str = await Clipboard.getString();
            ConsoleModule.log("Clipboard.getString", str);
            Clipboard.setString("something");
        })();
    }, []);

    return (
        <View overflow="hidden" style={{ overflow: "hidden", collapsable: true }}>
            <View overflow="visible" style={{ overflow: "visible", collapsable: false }} />
            <Text>
                'test'
                <Text>'nested'</Text>
            </Text>
            <TextInput ref={textInput} />
            <ListView numberOfRows={1} bounces={false} />;
            <ScrollView keyboardDismissMode="none">
                <View />
            </ScrollView>
            <RefreshWrapper>
                <View />
            </RefreshWrapper>
            <Modal visible={true}>
                <View />
            </Modal>
            <ViewPager keyboardDismissMode="none" horizontal>
                {[<View />, <View />]}
            </ViewPager>
        </View>
    );
}

new Hippy({
    appName: "demo",
    entryPage: () => {
        return <View />;
    },
    silent: true,
}).start();

const styles = StyleSheet.create({
    style1: {
        borderStyle: "solid",
        overflow: "visible",
    },
});
