import * as React from "react";

import ReactCurvedText from "react-curved-text";

function MyCurvedText() {
    return (
        <ReactCurvedText
            text="1st August 2023"
            width={255}
            height={75}
            cx={125}
            cy={-33}
            rx={125}
            ry={100}
            startOffset={53}
            textProps={{
                fill: "#9cc19b",
                fontFamily: "Luckybones",
                fontSize: "20px",
            }}
        />
    );
}
