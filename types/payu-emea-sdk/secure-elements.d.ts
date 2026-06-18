declare namespace payu {
    interface SecureElementsEntry {
        (options: SecureElementsOptions): SecureElements;
    }

    interface SecureElementsOptions {
        dev: boolean;
    }

    type ElementId = "cards";

    interface Font {
        family: string;
        src: Array<{
            url: string;
            format:
                | "collection"
                | "embedded-opentype"
                | "opentype"
                | "svg"
                | "truetype"
                | "woff"
                | "woff2";
        }>;
        style?: "normal" | "italic" | "oblique" | undefined;
        weight?:
            | "normal"
            | "bold"
            | "lighter"
            | "bolder"
            | "inherit"
            | "initial"
            | "unset"
            | number
            | undefined;
        stretch?:
            | "normal"
            | "ultra-condensed"
            | "extra-condensed"
            | "condensed"
            | "semi-condensed"
            | "semi-expanded"
            | "expanded"
            | "extra-expanded"
            | "ultra-expanded"
            | `${number}%`
            | undefined;
        unicodeRange?: string | undefined;
    }

    interface PaddingAware {
        padding?: string | undefined;
        paddingLeft?: string | undefined;
        paddingRight?: string | undefined;
        paddingTop?: string | undefined;
        paddingBottom?: string | undefined;
    }

    interface MarginAware {
        margin?: string | undefined;
        marginLeft?: string | undefined;
        marginRight?: string | undefined;
        marginTop?: string | undefined;
        marginBottom?: string | undefined;
    }

    interface BorderStyle {
        width?: string | undefined;
        color?: string | undefined;
        style?: "solid" | "dashed" | "dotted" | undefined;
    }

    interface BorderAware {
        borderRadius?: string | undefined;
        border?: BorderStyle | undefined;
        borderLeft?: BorderStyle | undefined;
        borderRight?: BorderStyle | undefined;
        borderTop?: BorderStyle | undefined;
        borderBottom?: BorderStyle | undefined;
    }

    interface FontsAware {
        fontFamily?: string | undefined;
        fontColor?: string | undefined;
        fontSize?: string | undefined;
        fontWeight?: Font["weight"] | undefined;
        lineHeight?: string | undefined;
        letterSpacing?: string | undefined;
        textDecoration?: string | undefined;
        textAlign?: string | undefined;
    }

    interface BackgroundAware {
        backgroundColor?: string | undefined;
    }

    interface ShadowAware {
        boxShadow?: {
            offsetX?: string | undefined;
            offsetY?: string | undefined;
            blurRadius?: string | undefined;
            spreadRadius?: string | undefined;
            color?: string | undefined;
        } | undefined;
    }

    interface OutlineAware {
        outline?: BorderStyle | undefined;
        outlineOffset?: string | undefined;
    }

    interface BaseButtonStyle
        extends PaddingAware, MarginAware, BorderAware, FontsAware, BackgroundAware, ShadowAware, OutlineAware
    {}
    interface BaseInputStyle
        extends PaddingAware, MarginAware, BorderAware, FontsAware, BackgroundAware, OutlineAware
    {}
    interface BaseRadioStyle extends PaddingAware, MarginAware, FontsAware, OutlineAware {
        iconColor?: string | undefined;
    }
    interface BaseCheckboxStyle extends PaddingAware, MarginAware, FontsAware, OutlineAware {
        iconColor?: string | undefined;
    }
    interface BaseTypographyStyle extends PaddingAware, MarginAware, FontsAware, BorderAware, OutlineAware {}
    interface BaseSelectStyle
        extends PaddingAware, MarginAware, BorderAware, FontsAware, BackgroundAware, OutlineAware
    {
        iconColor?: string | undefined;
    }

    interface Customization {
        lang?: string | undefined;
        options?: {
            enableCardFormFieldsAutoJump?: boolean | undefined;
            showCardNumberBrandIcon?: boolean | undefined;
            skipStyleDefaults?: boolean | undefined;
            forceStyleUpdate?: boolean | undefined;
            darkMode?: boolean | undefined;
        } | undefined;
        styles?: {
            base?: {
                fontSize?: string | undefined;
                fontFamily?: Font["family"] | undefined;
                fontWeight?: Font["weight"] | undefined;
                lineHeight?: string | undefined;
                gap?: string | undefined;
            } | undefined;
            fonts?: Font[] | undefined;
            body?: MarginAware | undefined;
            button?: {
                primary?: {
                    default?: BaseButtonStyle | undefined;
                    hover?: BaseButtonStyle | undefined;
                    focus?: BaseButtonStyle | undefined;
                    active?: BaseButtonStyle | undefined;
                    disabled?: BaseButtonStyle | undefined;
                    loading?: BaseButtonStyle | undefined;
                } | undefined;
                secondary?: {
                    default?: BaseButtonStyle | undefined;
                    hover?: BaseButtonStyle | undefined;
                    focus?: BaseButtonStyle | undefined;
                    active?: BaseButtonStyle | undefined;
                    disabled?: BaseButtonStyle | undefined;
                    loading?: BaseButtonStyle | undefined;
                } | undefined;
            } | undefined;
            input?: {
                default?: BaseInputStyle | undefined;
                error?: BaseInputStyle | undefined;
                focus?: BaseInputStyle | undefined;
                placeholder?: BaseInputStyle | undefined;
                disabled?: BaseInputStyle | undefined;
            } | undefined;
            select?: {
                default?: BaseSelectStyle | undefined;
                menu?: BaseSelectStyle | undefined;
                option?: BaseSelectStyle | undefined;
                error?: BaseSelectStyle | undefined;
                focus?: BaseSelectStyle | undefined;
                disabled?: BaseSelectStyle | undefined;
                placeholder?: BaseInputStyle | undefined;
            } | undefined;
            radio?: {
                default?: BaseRadioStyle | undefined;
                focus?: BaseRadioStyle | undefined;
                label?: BaseTypographyStyle | undefined;
            } | undefined;
            checkbox?: {
                default?: BaseCheckboxStyle | undefined;
                focus?: BaseCheckboxStyle | undefined;
                label?: BaseTypographyStyle | undefined;
                helperText?: BaseTypographyStyle | undefined;
            } | undefined;
            header?: BaseTypographyStyle | undefined;
            paragraph?: BaseTypographyStyle | undefined;
            label?: BaseTypographyStyle | undefined;
            helperText?: BaseTypographyStyle | undefined;
            error?: BaseTypographyStyle | undefined;
            link?: {
                default?: BaseTypographyStyle | undefined;
                hover?: BaseTypographyStyle | undefined;
                focus?: BaseTypographyStyle | undefined;
                active?: BaseTypographyStyle | undefined;
            } | undefined;
        } | undefined;
    }

    interface Configuration {
        elements: ElementId[];
        posId: string;
        buyer?: {
            email?: string | undefined;
        } | undefined;
        clickToPay?: {
            dpaName?: string | undefined;
            mastercard?: {
                dpaId?: string | undefined;
            } | undefined;
            visa?: {
                dpaId?: string | undefined;
                acquirerBIN?: string | undefined;
                acquirerMerchantId?: string | undefined;
            } | undefined;
        } | undefined;
    }

    interface SecureElementsInitializationOptions {
        configuration: Configuration;
        customization: Customization;
    }

    interface SecureElements {
        render(selector: string, options: SecureElementsInitializationOptions): SecureElements;
        update(customization: Customization): SecureElements;
        on(event: string, fn: (msg: string) => void): SecureElements;
    }
}
