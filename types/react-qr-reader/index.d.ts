// Type definitions for react-qr-reader 2.1
// Project: https://github.com/JodusNodus/react-qr-reader
// Definitions by: David Kevork <https://github.com/davidkevork>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export as namespace QrReader;

export default QrReader;

export namespace QrReader {
  interface props {
    onScan: (data: string | null) => void;
    onError: (err: any) => void;
    onLoad?: () => void;
    onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
    delay?: number | false;
    facingMode?: 'user' | 'environment';
    legacyMode?: boolean;
    resolution?: number;
    showViewFinder?: boolean;
    style?: any;
    className?: string;
  }
}

declare class QrReader extends React.Component<QrReader.props> {
}
