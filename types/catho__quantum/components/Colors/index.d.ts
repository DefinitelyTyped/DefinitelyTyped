type colorsTones = {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
};

declare const Colors: {
    primary: colorsTones;
    secondary: colorsTones;
    success: colorsTones;
    warning: colorsTones;
    error: colorsTones;
    neutral: colorsTones & { 0: string; 1000: string };
};

export default Colors;
