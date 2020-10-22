import * as React from 'react';
import { StyleSheet, View, Animated, Easing, ViewStyle, Insets } from 'react-native';
import Ripple from 'react-native-material-ripple';

const RippleTestOptionalProps: React.FC = () => {
    return <Ripple />;
};

const RippleTest: React.FC = () => {
    const aNumber = 10;
    const aString = 'string';
    const callback = () => {};
    const predicate = () => true;

    const insets: Insets = {
        top: aNumber,
        left: aNumber,
        bottom: aNumber,
        right: aNumber,
    };

    const animation = Animated.timing(new Animated.Value(0), {
        toValue: aNumber,
        easing: Easing.out(Easing.ease),
        duration: aNumber,
        useNativeDriver: true,
    });

    return (
        <Ripple
            rippleColor={aString}
            rippleOpacity={aNumber}
            rippleDuration={aNumber}
            rippleSize={aNumber}
            rippleContainerBorderRadius={aNumber}
            rippleCentered={false}
            rippleSequential={false}
            rippleFades={false}
            disabled={false}
            onRippleAnimation={callback}
            accessibilityActions={[{ name: 'activate' }]}
            accessibilityComponentType="radiobutton_checked"
            accessibilityElementsHidden
            accessibilityHint="string"
            accessibilityIgnoresInvertColors
            accessibilityLabel={aString}
            accessibilityLiveRegion="none"
            accessibilityRole="button"
            accessibilityState={{ disabled: false }}
            accessibilityTraits="header"
            accessibilityValue={{
                min: aNumber,
                max: aNumber,
                now: aNumber,
                text: aString,
            }}
            accessibilityViewIsModal
            accessible
            collapsable
            delayLongPress={aNumber}
            delayPressIn={aNumber}
            delayPressOut={aNumber}
            hasTVPreferredFocus
            hitSlop={insets}
            importantForAccessibility="auto"
            isTVSelectable
            key={aNumber}
            nativeID={aString}
            style={[styles.wrapper]}
            testID={aString}
            needsOffscreenAlphaCompositing
            onAccessibilityAction={callback}
            onAccessibilityEscape={callback}
            onAccessibilityTap={callback}
            onBlur={callback}
            onFocus={callback}
            onLayout={callback}
            onLongPress={callback}
            onMagicTap={callback}
            onMoveShouldSetResponder={predicate}
            onMoveShouldSetResponderCapture={predicate}
            onPress={callback}
            onPressIn={callback}
            onPressOut={callback}
            onResponderEnd={callback}
            onResponderGrant={callback}
            onResponderMove={callback}
            onResponderReject={callback}
            onResponderRelease={callback}
            onResponderStart={callback}
            onResponderTerminate={callback}
            onResponderTerminationRequest={predicate}
            onStartShouldSetResponder={predicate}
            onStartShouldSetResponderCapture={predicate}
            onTouchCancel={callback}
            onTouchEnd={callback}
            onTouchEndCapture={callback}
            onTouchMove={callback}
            onTouchStart={callback}
            pointerEvents="box-only"
            pressRetentionOffset={insets}
            removeClippedSubviews
            renderToHardwareTextureAndroid
            shouldRasterizeIOS
            tvParallaxMagnification={aNumber}
            tvParallaxProperties={{
                enabled: true,
                shiftDistanceX: aNumber,
                shiftDistanceY: aNumber,
                tiltAngle: aNumber,
                magnification: aNumber,
                pressMagnification: aNumber,
                pressDuration: aNumber,
                pressDelay: aNumber,
            }}
            tvParallaxShiftDistanceX={aNumber}
            tvParallaxShiftDistanceY={aNumber}
            tvParallaxTiltAngle={aNumber}
        >
            <View />
        </Ripple>
    );
};

const styles = StyleSheet.create({
    wrapper: {} as any as ViewStyle,
});
