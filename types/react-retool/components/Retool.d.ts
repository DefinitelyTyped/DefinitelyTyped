import { CSSProperties, FunctionComponent, IframeHTMLAttributes } from "react";

export interface RetoolProps {
    width?: IframeHTMLAttributes<HTMLIFrameElement>["width"];
    height?: IframeHTMLAttributes<HTMLIFrameElement>["height"];
    url: IframeHTMLAttributes<HTMLIFrameElement>["src"];
    data?: Record<string, unknown>;
    onData?: (data: unknown) => void;
    sandbox?: true | IframeHTMLAttributes<HTMLIFrameElement>["sandbox"];
    allow?: IframeHTMLAttributes<HTMLIFrameElement>["allow"];
    styling?: CSSProperties;
}

export const Retool: FunctionComponent<RetoolProps>;

export default Retool;
