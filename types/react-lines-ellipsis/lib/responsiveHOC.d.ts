import { DebounceSettings } from "lodash";
import { ComponentType, Ref } from "react";
import { CommonReactLinesEllipsisProps } from "..";

declare function responsiveHOC(
    wait?: number,
    debounceOptions?: DebounceSettings,
): <P extends CommonReactLinesEllipsisProps>(
    WrappedComponent: ComponentType<P>,
) => ComponentType<P & { innerRef?: Ref<HTMLDivElement> }>;

export = responsiveHOC;
