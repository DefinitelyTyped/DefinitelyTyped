// Type definitions for react-native-honeywell-scanner 1.0
// Project: https://github.com/Volst/react-native-honeywell-scanner
// Definitions by: Adam Walker <https://github.com/crashdoom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

declare namespace HoneywellScanner {
    const isCompatible: boolean;
    function on(eventName: string, handler: (event: string | null) => void): void;
    function off(eventName: string, handler: () => void): void;
    function startReader(): Promise<boolean>;
    function stopReader(): Promise<void>;
}

export default HoneywellScanner;
