import * as BigText from "ink-big-text";
import * as Gradient from "ink-gradient";
import * as React from "react";

function test() {
    return (
        <Gradient name="rainbow">
            <BigText text="I love TypeScript" backgroundColor="black" align="center" />
        </Gradient>
    );
}
