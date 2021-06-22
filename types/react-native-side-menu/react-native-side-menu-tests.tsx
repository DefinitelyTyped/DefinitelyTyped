import * as React from 'react';
import { View, Animated } from 'react-native';
import ReactNativeSideMenu from 'react-native-side-menu';

export default () => (
    <ReactNativeSideMenu
        menu={<View />}
        isOpen={false}
        openMenuOffset={100}
        hiddenMenuOffset={100}
        edgeHitWidth={100}
        toleranceX={100}
        toleranceY={100}
        disableGestures={false}
        onStartShouldSetResponderCapture={() => false}
        onChange={() => {}}
        onMove={() => {}}
        onSliding={() => {}}
        menuPosition="left"
        animationFunction={(prop, value) =>
            Animated.spring(prop, {
                useNativeDriver: false,
                toValue: value,
                friction: 8,
            })
        }
        animationStyle={() => ({
            transform: [{ translateX: 40 }],
        })}
        onAnimationComplete={() => {}}
        bounceBackOnOverdraw={false}
        autoClosing={false}
    />
);
