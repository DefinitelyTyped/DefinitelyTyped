import { VueConstructor } from "vue";

declare const VueQrCode: QrCodeConstructor;
export = VueQrCode;

interface QrCodePorps {
    // The value of the QR code.
    value: string | null;
    // The options for the QR code generator.
    options: {
        // QR Code version.
        version?: number | undefined;
        // Error correction level.
        errorCorrectionLevel?: "low" | "medium" | "quartile" | "high" | "L" | "M" | "Q" | "H" | undefined;
        // Mask pattern used to mask the symbol.
        maskPattern?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined;
        // Define how much wide the quiet zone should be.
        margin?: number | undefined;
        // Scale factor.
        scale?: number | undefined;
        // Forces a specific width for the output image.
        width?: number | undefined;
        color?: {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined;
    };
    // The tag name of the component's root element.
    tag: string;
}

interface QrCodeWatch {
    $props: (val: any) => void;
}

interface QrCodeMethods {
    // Generate QR code.
    generate: () => void;
}

interface QrCodeConstructor extends VueConstructor {
    props: QrCodePorps;
    watch: QrCodeWatch;
    methods: QrCodeMethods;
}
