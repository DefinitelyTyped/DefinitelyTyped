import { ColorValue, OpaqueColorValue } from "./StyleSheet";

type DynamicColorIOSTuple = {
    light: ColorValue;
    dark: ColorValue;
    highContrastLight?: ColorValue | undefined;
    highContrastDark?: ColorValue | undefined;
};

/**
 * Specify color to display depending on the current system appearance settings
 *
 * @param tuple Colors you want to use for "light mode" and "dark mode"
 * @platform ios
 */
export function DynamicColorIOS(tuple: DynamicColorIOSTuple): OpaqueColorValue;
