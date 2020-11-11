// Type definitions for @chenfengyuan/vue-qrcode 1.0
// Project: https://github.com/fengyuanchen/vue-qrcode
// Definitions by: gaoming13 <https://github.com/gaoming13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9
import { VueConstructor } from 'vue';

declare const VueQrCode: QrCodeConstructor;
export = VueQrCode;

interface QrCodePorps {
  // The value of the QR code.
  value: string | null;
  // The options for the QR code generator.
  options: {
    // QR Code version.
    version?: number;
    // Error correction level.
    errorCorrectionLevel?: 'low' | 'medium' | 'quartile' | 'high' | 'L' | 'M' | 'Q' | 'H';
    // Mask pattern used to mask the symbol.
    maskPattern?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    // Define how much wide the quiet zone should be.
    margin?: number;
    // Scale factor.
    scale?: number;
    // Forces a specific width for the output image.
    width?: number;
    color?: {
      dark?: string;
      light?: string;
    }
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
