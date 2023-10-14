import type { Animated } from "./Animated";

export function useAnimatedValue(
    initialValue: number,
    config?: Animated.AnimatedConfig,
): Animated.Value;
