import * as React from "react";
import { PieCenter, PieMenu, Slice } from "react-pie-menu";

const Pie = () => {
    const Center = () => <PieCenter onClick={() => {}}>center</PieCenter>;

    return (
        <>
            {/* minimal */}
            <PieMenu>
                <Slice>1</Slice>
                <Slice>2</Slice>
                <Slice>3</Slice>
                <Slice>4</Slice>
            </PieMenu>

            {/* with some common optional props, as used in example at */}
            {/* https://github.com/psychobolt/react-pie-menu/blob/091431b21426527fbea007d5a1e92838334b31d2/stories/Examples/PreferenceSelector/PreferenceSelector.component.js */}
            <PieMenu radius="125px" centerRadius="30px" startOffsetAngle={45} Center={Center}>
                <Slice attrs={{ active: "true" }}></Slice>
                <Slice onSelect={() => {}}>facebook</Slice>
                <Slice contentHeight="66px">3</Slice>
                <Slice>4</Slice>
            </PieMenu>
        </>
    );
};
