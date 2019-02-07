import ReactStickyBox, { StickyBoxMode } from "react-sticky-box";
import * as React from "react";

const ReactStickyBoxRequiredOptions: JSX.Element = (
    <ReactStickyBox />
);

const changeHandler = (oldMode: StickyBoxMode, newMode: StickyBoxMode) => {
    console.log(`Changing from ${oldMode} to ${newMode}`);
};

const ReactStickyBoxAllOptions: JSX.Element = (
    <ReactStickyBox
        bottom
        offsetBottom={20}
        offsetTop={10}
        onChangeMode={changeHandler}
    />
);
