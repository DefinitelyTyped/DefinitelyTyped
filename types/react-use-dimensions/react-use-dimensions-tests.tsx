import React, { type FC } from "react";
import useDimensions from "react-use-dimensions";

const ReactUseDimensionsTest: FC = () => {
    const [ref, dimensions] = useDimensions<HTMLDivElement>();

    return (
        <div ref={ref} style={{ resize: "both", padding: "20px", backgroundColor: "#92dbf6ff" }}>
            {"width" in dimensions
                ? (
                    <p>
                        Width: {dimensions.width}, Height: {dimensions.height}
                    </p>
                )
                : <p>Loading dimensions...</p>}
        </div>
    );
};
