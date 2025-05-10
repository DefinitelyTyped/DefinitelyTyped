import * as React from "react";
import Holder, { ReactHolderProp } from "react-holder";

// @ts-expect-error - props.width and `props.height` are required
<Holder />;

<Holder width="100%" height="200px" />;

<Holder
    width="100%"
    height="200px"
    updateOnResize={true}
    className={"my-custom-class"}
    theme="theme"
    random={false}
    bg="bg"
    fg="fg"
    text="text"
    size={12}
    font="italic"
    align="center"
    outline={false}
    lineWrap={3}
/>;
