export type LabelTypes = "success" | "warning" | "error";

export type LabelProps = {
    className?: string;
    type?: LabelTypes;
} & { [x: string]: any };

declare const Label: React.FunctionComponent<LabelProps>;

export default Label;
