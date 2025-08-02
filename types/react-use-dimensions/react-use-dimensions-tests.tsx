import React, { type FC } from "react";
import useDimensions from "react-use-dimensions";

const ReactUseDimensionsTest: FC = () => {
    const [ref, { width, height }] = useDimensions<HTMLDivElement>();

    return (
        <div ref={ref} style={{ resize: "both", padding: "20px", backgroundColor: "#92dbf6ff" }}>
            {width === undefined || height === undefined
                ? <p>Measuring...</p>
                : (
                    <p>
                        Width: {width}, Height: {height}
                    </p>
                )}
        </div>
    );
};
