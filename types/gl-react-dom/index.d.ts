import * as glReact from "gl-react";
import { GLViewDOM, GLViewDOMProps } from "./GLViewDOM";

export interface SurfaceProps extends glReact.SurfaceProps, GLViewDOMProps {}

export class Surface extends glReact.Surface<GLViewDOM> {
    props: SurfaceProps;
}
