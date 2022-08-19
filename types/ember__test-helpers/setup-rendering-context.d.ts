import { TemplateFactory } from "htmlbars-inline-precompile";

export default function<Context extends object>(context: Context): Promise<Context>;
export function render(template: TemplateFactory): Promise<void>;
export function rerender(): Promise<void>;
export function clearRender(): Promise<void>;
