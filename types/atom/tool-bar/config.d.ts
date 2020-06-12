import "../index"

declare module "atom" {
    interface ConfigValues {
        /** Make tool-bar visible. - default: true */
        "tool-bar.visible": boolean

        /** Icon size. - default: "24px" */
        "tool-bar.iconSize":
            | "12px"
            | "14px"
            | "16px"
            | "18px"
            | "21px"
            | "24px"
            | "28px"
            | "32px"

        /** Position of tool-bar. - default: "Top"  */
        "tool-bar.position": "Top" | "Right" | "Bottom" | "Left"

        /** Fit the tool-bar to the window's full-width. - default: true */
        "tool-bar.fullWidth": boolean

        /** On MacOS, show seven first tool-bar buttons in the TouchBar. - default: true */
        "tool-bar.useTouchBar": string
    }
}
