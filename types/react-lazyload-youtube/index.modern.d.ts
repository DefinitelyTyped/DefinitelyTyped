import { FunctionComponent } from "react";

export interface Props {
    /** The YouTube video's ID */
    videoId: string;
    /**
     * The width, defined in CSS units
     * @default "100%"
     */
    width?: string | undefined;
    /**
     * The height, defined in CSS units
     * @default "400px"
     */
    height?: string | undefined;
    /** @default "mqdefault" */
    imgSize?: "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault" | undefined;
}

declare const Youtube: FunctionComponent<Props>;

export default Youtube;
