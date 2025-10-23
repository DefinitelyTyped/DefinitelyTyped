import * as React from "react";

export default class QRCode extends React.Component<QRCodeProperties> {}

export interface QRCodeProperties {
    value?: string | undefined;
    size?: number | undefined;
    bgColor?: string | undefined;
    fgColor?: string | undefined;
}
