import Cropper from "cropperjs";
import * as React from "react";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface ReactCropperProps
    extends Cropper.Options, Omit<React.HTMLProps<HTMLImageElement>, "data" | "ref">, React.RefAttributes<ReactCropper>
{
}

interface ReactCropper extends Cropper {} // eslint-disable-line @typescript-eslint/no-empty-interface
declare class ReactCropper extends React.Component<ReactCropperProps> {
    on(eventname: string, callback: () => void): void;
}
export default ReactCropper;
