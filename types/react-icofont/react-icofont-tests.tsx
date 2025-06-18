import * as React from "react";
import Icofont, { IcofontProps } from "react-icofont";

// @ts-expect-error -- props.icon is required.
<Icofont />;

// Required props.
<Icofont icon="spinner-alt-4" />;

// Optional props.
<Icofont
    icon="spinner-alt-4"
    rotate="180"
    flip="horizontal"
    size="7"
    spin={true}
    className="ico-font"
/>;
