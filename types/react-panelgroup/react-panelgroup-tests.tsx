import PanelGroup, { PanelWidth } from "react-panelgroup";
import * as React from "react";

const test1 = (
    <PanelGroup>
        <div>panel 1</div>
        <div>panel 2</div>
        <div>panel 3</div>
    </PanelGroup>
);

const test2 = (
    <PanelGroup direction="column">
        <div>panel 1</div>
        <div>panel 2</div>
        <div>panel 3</div>
    </PanelGroup>
);

const test3 = (
    <PanelGroup direction="row">
        <PanelGroup direction="column">
            <div>panel 1</div>
            <div>panel 2</div>
            <div>panel 3</div>
        </PanelGroup>
        <div>panel 4</div>
        <PanelGroup direction="column">
            <div>panel 5</div>
            <div>panel 6</div>
        </PanelGroup>
    </PanelGroup>
);

const test4 = (
    <PanelGroup
        panelWidths={[
            { size: 100, minSize: 50, resize: "dynamic" },
            { minSize: 100, resize: "stretch" },
            { size: 100, minSize: 50, resize: "dynamic" }
        ]}
    >
        <div>panel 1</div>
        <div>panel 2</div>
        <div>panel 3</div>
    </PanelGroup>
);

const test5 = (
    <PanelGroup
        direction="column"
        borderColor="#FFF"
        panelColor="#FFF"
        spacing={12}
        onUpdate={data => {}}
    >
        <div>panel 1</div>
        <div>panel 2</div>
        <div>panel 3</div>
    </PanelGroup>
);

const test6: PanelWidth = {
    size: 100,
    minSize: 100,
    resize: "fixed",
    snap: [50, 75]
};
