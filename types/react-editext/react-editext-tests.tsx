import EdiText from "react-editext";

import * as React from "react";
import { render } from "react-dom";

declare const container: Element;

render(
    <EdiText
        type="text"
        value={"hello"}
        onSave={v => v}
        renderValue={v => `${v} world`}
        hint="prefix the world"
        hideIcons={true}
        startEditingOnEnter
        onValidationFail={v => v}
        submitOnUnfocus
    />,
    container,
);
