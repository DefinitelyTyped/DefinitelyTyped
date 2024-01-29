import { ComponentLifecycle } from "react";

declare var PureRenderMixin: PureRenderMixin;
export = PureRenderMixin;

interface PureRenderMixin {
    shouldComponentUpdate: NonNullable<ComponentLifecycle<any, any>["shouldComponentUpdate"]>;
}
