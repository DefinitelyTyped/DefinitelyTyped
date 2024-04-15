import PrettyProps, { CommonProps, Inter, Obj } from "pretty-proptypes";
import * as React from "react";

interface PropsProps {
    readonly overrides?: {
        readonly [key: string]: React.ComponentType<CommonProps>;
    } | undefined;
    readonly props: {
        readonly component?: Obj | Inter | undefined;
    };
}

const Props = (props: PropsProps) => (
    <PrettyProps
        heading=""
        components={{
            Button: ({ isCollapsed, ...rest }) => (
                <button {...rest}>
                    {isCollapsed ? "Hide Prop Shape" : "Show Prop Shape"}
                </button>
            ),
        }}
        {...props}
    />
);
