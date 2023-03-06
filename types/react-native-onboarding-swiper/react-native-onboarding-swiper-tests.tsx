import * as React from 'react';
import { Image, StyleProp, TextStyle, View, ViewStyle, TouchableOpacity } from 'react-native';
import Onboarding, {
    DoneButtonProps,
    DotProps,
    NextButtonProps,
    SkipButtonProps,
} from 'react-native-onboarding-swiper';

const backgroundColor = (isLight: boolean) => (isLight ? 'blue' : 'lightblue');

const color = (isLight: boolean) => backgroundColor(!isLight);

const Square: React.FC<DotProps> = ({ isLight, selected }) => {
    const backgroundColor = isLight
        ? selected
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(0, 0, 0, 0.3)'
        : selected
        ? '#fff'
        : 'rgba(255, 255, 255, 0.5)';

    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor,
            }}
        />
    );
};

const Done: React.FC<DoneButtonProps> = ({ isLight, ...props }) => (
    <Button
        title={'Done'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
        }}
        containerViewStyle={{
            marginVertical: 10,
            width: 70,
            backgroundColor: backgroundColor(isLight),
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    />
);

const Skip: React.FC<SkipButtonProps> = ({ isLight, skipLabel, ...props }) => (
    <Button
        title={'Skip'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
        }}
        containerViewStyle={{
            marginVertical: 10,
            width: 70,
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    >
        {skipLabel}
    </Button>
);

const Next: React.FC<NextButtonProps> = ({ isLight, ...props }) => (
    <Button
        title={'Next'}
        buttonStyle={{
            backgroundColor: backgroundColor(isLight),
        }}
        containerViewStyle={{
            marginVertical: 10,
            width: 70,
            backgroundColor: backgroundColor(isLight),
        }}
        textStyle={{ color: color(isLight) }}
        {...props}
    />
);

const App = () => {
    const onboardingRef = React.useRef<Onboarding>(null);
    const next = () => onboardingRef.current?.goNext();
    return (
        <Onboarding
            ref={onboardingRef}
            DotComponent={Square}
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            DoneButtonComponent={Done}
            onSkip={() =>
                onboardingRef.current?.flatList?.scrollToIndex({
                    animated: true,
                    index: 2,
                })
            }
            titleStyles={{ color: 'blue' }} // set default color for the title
            pages={[
                {
                    backgroundColor: '#fff',
                    image: (
                        <TouchableOpacity onPress={next}>
                            <Image source={require('./images/circle.png')} />
                        </TouchableOpacity>
                    ),
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                    titleStyles: { color: 'red' }, // overwrite default color
                },
                {
                    backgroundColor: '#fe6e58',
                    image: <Image source={require('./images/square.png')} />,
                    title: 'The Title',
                    subtitle: 'This is the subtitle that sumplements the title.',
                },
                {
                    backgroundColor: '#999',
                    image: <Image source={require('./images/triangle.png')} />,
                    title: 'Triangle',
                    subtitle: "Beautiful, isn't it?",
                },
            ]}
        />
    );
};

export default App;

// mock Button component
const Button: React.FC<{
    children?: React.ReactNode;
    title: string | JSX.Element;
    buttonStyle: StyleProp<ViewStyle>;
    containerViewStyle: StyleProp<ViewStyle>;
    textStyle: StyleProp<TextStyle>;
}> = () => null;
