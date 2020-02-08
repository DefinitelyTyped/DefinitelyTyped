export interface ColorsTones {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
}

declare const Colors: {
    primary: ColorsTones;
    secondary: ColorsTones;
    success: ColorsTones;
    warning: ColorsTones;
    error: ColorsTones;
    neutral: ColorsTones & { 0: string; 1000: string };
};

export default Colors;
