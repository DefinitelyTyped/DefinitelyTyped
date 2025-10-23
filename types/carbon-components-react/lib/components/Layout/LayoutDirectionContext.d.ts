import React = require("react");

export interface LayoutDirectionContextData {
    direction: "ltr" | "rtl";
}

export const LayoutDirectionContext: React.Context<LayoutDirectionContextData>;
