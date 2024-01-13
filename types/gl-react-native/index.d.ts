import * as glReact from "gl-react";
import { GLViewNative, GLViewNativeProps } from "./GLViewNative";

export interface SurfaceProps extends glReact.SurfaceProps, GLViewNativeProps {}

export class Surface extends glReact.Surface<GLViewNative> {
    props: SurfaceProps;
}
