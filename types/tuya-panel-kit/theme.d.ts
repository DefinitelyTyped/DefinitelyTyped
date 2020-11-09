export interface StopsProps {
    offset: string;
    stopColor: string;
    stopOpacity: string;
}
export interface LinearGradientBackground {
    x1?: string;
    x2?: string;
    y1?: string;
    y2?: string;
    stops?: Record<string, string>;
}

export interface RadialGradientBackground {
    cx?: string;
    cy?: string;
    fx?: string;
    fy?: string;
    rx?: string;
    ry?: string;
    stops?: StopsProps[];
}

// Button
export type BackgroundProps = string | LinearGradientBackground | RadialGradientBackground;

export interface GlobalTheme {
    type: 'light' | 'dark' | string;
    global: Global;
    text: Text;
    picker: Picker;
    button: Button;
    topbar: Topbar;
    switchButton: SwitchButton;
    slider: Slider;
    checkbox: Checkbox;
    list: List;
    brickButton: BrickButton;
    tips: Tips;
    dialog: Dialog;
    popup: Popup;
}

export type BrickButton = {
    light: BrickButtonTheme;
    dark: BrickButtonTheme;
} & Partial<BrickButtonTheme>;

export interface BrickButtonTheme {
    fontSize: number;
    fontColor: string;
    bgRadius: number;
    bgBorder: string;
    bgBorderWidth: number;
    loadingColor: string;
    loadingBackground: string;
}

export type Button = {
    light: ButtonTheme;
    dark: ButtonTheme;
} & Partial<ButtonTheme>;

export interface ButtonTheme {
    margin: number[];
    fontSize: number;
    iconSize: number;
    bgWidth: number | null;
    bgHeight: number | null;
    bgRadius: number | null;
}

export type Checkbox = {
    light: CheckboxTheme;
    dark: CheckboxTheme;
} & Partial<CheckboxTheme>;

export interface CheckboxTheme {
    size: number;
    fontColor: string;
    activeColor: string;
    disabledColor: string;
}

export type Dialog = {
    type: string;
    basic: DialogTheme;
    dark: DialogTheme;
    system: DialogTheme;
} & Partial<DialogTheme>;

export interface DialogTheme {
    width: number;
    bg: string;
    radius: number;
    cellHeight: number;
    lineColor: string;
    titleFontSize: number;
    titleFontColor: string;
    subTitleFontSize: number;
    subTitleFontColor: string;
    cancelFontSize: number;
    cancelFontColor: string;
    confirmFontSize: number;
    confirmFontColor: string;
    prompt: PromptTheme;
}

export interface PromptTheme {
    bg: string;
    radius: number;
    padding: string;
    placeholder: string;
}

export interface Global {
    brand: string;
    background: BackgroundProps;
    fontSizeBase: number;
    dividerColor: string;
    success: string;
    warning: string;
    error: string;
    mask: string;
    text: GlobalText;
}

export interface GlobalText {
    light: string;
    dark: string;
}

export type List = {
    light: ListTheme;
    dark: ListTheme;
} & Partial<ListTheme>;

export interface ListTheme {
    boardBg: string;
    fontColor: string;
    iconColor: string;
    subFontColor: string;
    descFontColor: string;
    cellLine: string;
    cellBg: string;
    cellRadius: number;
    margin: number[];
    padding: number[];
}

export type Picker = {
    light: PickerTheme;
    dark: PickerTheme;
} & Partial<PickerTheme>;

export interface PickerTheme {
    fontSize: number;
    fontColor: string;
    unitFontSize: number;
    unitFontColor: string;
}

export type Popup = {
    type: string;
    basic: PopupTheme;
    dark: PopupTheme;
} & Partial<PopupTheme>;

export interface PopupTheme {
    cellHeight: number;
    cellBg: string;
    cellFontColor: string;
    cellFontSize: number;
    subTitleFontColor: string;
    titleRadius: number;
    titleBg: string;
    titleHeight: number;
    footerRadius: number;
    bottomBg: string;
    lineColor: string;
    titleFontSize: number;
    checkboxColor: string;
    titleFontColor: string;
    cancelFontSize: number;
    cancelFontColor: string;
    confirmFontSize: number;
    confirmFontColor: string;
    backIconColor: string;
    tintColor: string;
    numberSelector: PopupNumberSelectorTheme;
    list: PopupListTheme;
}

export interface PopupListTheme {
    cellFontColor: string;
}

export interface PopupNumberSelectorTheme {
    cellPlusColor: string;
    maximumTrackTintColor: string;
}

export type Slider = {
    light: SliderTheme;
    dark: SliderTheme;
} & Partial<SliderTheme>;

export interface SliderTheme {
    width: number | null;
    trackRadius: number;
    trackHeight: number;
    maximumTrackTintColor: string;
    thumbSize: number;
    thumbRadius: number;
    thumbTintColor: string;
}

export type SwitchButton = {
    light: SwitchButtonTheme;
    dark: SwitchButtonTheme;
} & Partial<SwitchButtonTheme>;

export interface SwitchButtonTheme {
    width: number;
    height: number;
    thumbSize: number;
    margin: number;
    tintColor: string;
    onTintColor: string;
    thumbTintColor: string;
    onThumbTintColor: string;
}

export interface Text {
    heading: TextThemeMap;
    title: TextThemeMap;
    paragraph: TextThemeMap;
}

export interface TextThemeMap {
    small: (props: any) => { fontSize: number; lineHeight: number };
    normal: (props: any) => { fontSize: number; lineHeight: number };
    large: (props: any) => { fontSize: number; lineHeight: number };
}

export type Tips = {
    light: TipsTheme;
    dark: TipsTheme;
} & Partial<TipsTheme>;

export interface TipsTheme {
    bgColor: string;
}

export type Topbar = {
    light: TopbarTheme;
    dark: TopbarTheme;
} & Partial<TopbarTheme>;

export interface TopbarTheme {
    background: BackgroundProps;
    color: string;
}
