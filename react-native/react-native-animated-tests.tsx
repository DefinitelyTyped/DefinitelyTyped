///<reference path="../react-native/react-native.d.ts" />

import * as React from 'react-native'

import {
  Animated,
  View,
} from 'react-native';

function TestAnimatedAPI() {
  // Value
  const v1 = new Animated.Value(0);
  const v2 = new Animated.Value(0);

  v1.setValue(0.1);

  v1.addListener(e => {
    let n: number = e.value;
  });

  const v200 = v1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  // ValueXY
  const position = new Animated.ValueXY({ x: 0, y: 0 });

  // Animation functions
  const spring1 = Animated.spring(v1, {
    toValue: 0.5,
    tension: 10,
  });

  const springXY =  Animated.spring(position, {
    toValue: {
      x: 1,
      y: 2,
    }
  });

  spring1.start();
  spring1.stop();

  Animated.parallel([
    Animated.spring(v1, { toValue: 1 }),
    Animated.spring(v2, { toValue: 1 }),
  ], {
    stopTogether: true,
  });

  Animated.decay(v1, {
    velocity: 2,
  });

  Animated.timing(v1, {
    toValue: 1,
    duration: 100,
    delay: 100,
    easing: v => v,
  });

  Animated.add(v1, v2);
  Animated.multiply(v1, v2);
  Animated.modulo(v1, 2);

  Animated.delay(100);

  Animated.sequence([
    spring1,
    springXY,
  ]);

  Animated.stagger(100, [
    spring1,
    springXY,
  ]);

  return (
    <View>
      <Animated.View
        style={[
          position.getLayout(),
          {
            opacity: v1,
          }]}>
      </Animated.View>

      <Animated.Image
        style={position.getTranslateTransform()}
        >
      </Animated.Image>
    </View>
  );
}