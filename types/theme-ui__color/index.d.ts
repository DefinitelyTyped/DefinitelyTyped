// Type definitions for @theme-ui/color 0.3
// Project: https://github.com/system-ui/theme-ui
// Definitions by: Allan Pope <https://github.com/allanpope>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export * from 'polished';
// A few polished functions have been renamed in theme-ui
// If these are updated in polished, then the code below can be deleted
import {
    adjustHue as rotate,
    rgba as alpha,
    setHue as hue,
    setLightness as lightness,
    setSaturation as saturation,
} from 'polished';
export { alpha, hue, lightness, rotate, saturation };
