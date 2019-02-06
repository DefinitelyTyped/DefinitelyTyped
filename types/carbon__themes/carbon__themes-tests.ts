import ThemePackage from "@carbon/themes";

interface Theme {
    active01: string;
    activeDanger: string;
    activePrimary: string;
    activeSecondary: string;
    activeTertiary: string;
    activeUI: string;
    brand01: string;
    brand02: string;
    brand03: string;
    disabled01: string;
    disabled02: string;
    disabled03: string;
    field01: string;
    field02: string;
    focus: string;
    highlight: string;
    hoverDanger: string;
    hoverField: string;
    hoverPrimary: string;
    hoverPrimaryText: string;
    hoverRow: string;
    hoverSecondary: string;
    hoverSelectedUI: string;
    hoverTertiary: string;
    hoverUI: string;
    icon01: string;
    icon02: string;
    interactive01: string;
    interactive02: string;
    interactive03: string;
    inverse01: string;
    inverse02: string;
    overlay01: string;
    selectedUI: string;
    support01: string;
    support02: string;
    support03: string;
    support04: string;
    text01: string;
    text02: string;
    text03: string;
    text04: string;
    ui01: string;
    ui02: string;
    ui03: string;
    ui04: string;
    ui05: string;
    uiBackground: string;
    visitedLink: string;
}

const getDefaultTheme = (): Theme => {
    return ThemePackage.white;
};

getDefaultTheme();
