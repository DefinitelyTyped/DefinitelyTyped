import * as glReact from "gl-react";
import { GLViewHeadless, GLViewHeadlessProps } from "./GLViewHeadless";

export interface SurfaceProps extends glReact.SurfaceProps, GLViewHeadlessProps {}

export class Surface extends glReact.Surface<GLViewHeadless> {
    props: SurfaceProps;
}
