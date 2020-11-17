import { Animated } from 'react-native';
/**
 * Use an Animated Node based on a condition. Similar to Reanimated's `cond`.
 *
 * @param condition Animated Node representing the condition, must be 0 or 1, 1 means `true`, 0 means `false`
 * @param main Animated Node to use if the condition is `true`
 * @param fallback Animated Node to use if the condition is `false`
 */
export default function conditional(condition: Animated.AnimatedInterpolation, main: Animated.AnimatedInterpolation, fallback: Animated.AnimatedInterpolation): Animated.AnimatedAddition;
