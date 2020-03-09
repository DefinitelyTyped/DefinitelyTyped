import * as React from "react";

export type FormLegendProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
} & { [x: string]: any };

declare const FormLegend: React.FunctionComponent<FormLegendProps>;

export default FormLegend;
