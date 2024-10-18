declare namespace GorillaEngine.UI {
    interface Font {
        font: string;
        fontSize: number;
        fontKerning: number;
        textColor: string;
        textAlign:
            | "centered left"
            | "centered right"
            | "left"
            | "right"
            | "center"
            | "top left"
            | "top right"
            | "top center"
            | "bottom left"
            | "bottom right"
            | "bottom center";
    }
}
