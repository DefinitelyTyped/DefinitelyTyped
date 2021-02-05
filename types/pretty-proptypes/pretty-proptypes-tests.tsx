import * as React from "react";
import PrettyProps, { CommonProps, Inter, Obj } from "pretty-proptypes";

interface PropsProps {
    readonly overrides?: {
        readonly [key: string]: React.ComponentType<CommonProps>;
    };
    readonly props: {
        readonly component?: Obj | Inter;
    };
}

const Props = (props: PropsProps) => (
    <PrettyProps
        heading=""
        components={{
            Button: ({ isCollapsed, ...rest }) => (
                <button {...rest}>
                {isCollapsed ? 'Hide Prop Shape' : 'Show Prop Shape'}
                </button>
            ),
        }}
        {...props}
    />
);
