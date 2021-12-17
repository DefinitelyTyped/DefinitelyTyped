import * as React from 'react';
import {
    Platform,
    ListView,
    Modal,
    Navigator,
    RefreshWrapper,
    ScrollView,
    TextInput,
    ViewPager,
    View,
    Text,
    Image,
    WaterfallView,
    HippyEventEmitter,
    callNativeWithPromise,
    UIManagerModule,
    Dimensions,
    Animation,
    AnimationSet,
    AsyncStorage,
    NetInfo,
    Hippy,
} from '@hippy/react';

function Comp() {
    const textInput = React.useRef<TextInput>(null);

    React.useEffect(() => {
        textInput.current?.focus();
    }, []);

    React.useEffect(() => {
        NetInfo.addEventListener('change', () => {});
    }, [NetInfo]);

    return (
        <View>
            <Text>
                'test'
                <Text>'nested'</Text>
            </Text>
            <TextInput ref={textInput} />
            <ListView numberOfRows={1} bounces={false} />;
            <ViewPager initialPage={0} keyboardDismissMode="none" horizontal />;
            <ScrollView keyboardDismissMode="none" />;
        </View>
    );
}

new Hippy({
    appName: 'demo',
    entryPage: () => {
        return <View />;
    },
    silent: true,
}).start();
