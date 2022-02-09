import * as React from "react";

export type FormLegendProps = {
    className?: string | undefined;
    disableStyles?: boolean | undefined;
} & { [x: string]: any };

declare const FormLegend: React.FunctionComponent<FormLegendProps>;

export default FormLegend;
