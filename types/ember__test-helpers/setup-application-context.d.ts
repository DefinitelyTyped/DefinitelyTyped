export default function<Context extends object>(context: Context): Promise<Context>;
export function visit(url: string): Promise<void>;
export function currentRouteName(): string;
export function currentURL(): string;
