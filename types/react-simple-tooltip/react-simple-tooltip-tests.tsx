import * as React from "react";
import Tooltip from "react-simple-tooltip";

export function Test() {
    return (
        <div>
            {/* Bare Minimum */}
            <Tooltip content="A cool tooltip!" />

            {/* All props */}
            <Tooltip
                content="A cool tooltip!"
                arrow={3}
                background="#222"
                border="#333"
                color="#444"
                fadeDuration={13}
                fadeEasing="ease"
                fixed={true}
                fontFamily="Roboto"
                fontSize="10px"
                padding={7}
                placement="bottom"
                radius={9}
                zIndex={2}
            />
        </div>
    );
}
