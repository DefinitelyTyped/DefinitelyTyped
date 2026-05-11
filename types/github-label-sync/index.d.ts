export interface BasicLabel {
    name: string;
    color: string;
    description?: string | undefined;
}

export interface LabelInfo extends BasicLabel {
    aliases?: string[] | undefined;
    delete?: boolean | undefined;
}

export interface OptionsBase {
    allowAddedLabels?: boolean | undefined;
    dryRun?: boolean | undefined;
    format?: {
        diff?: ((str: string) => string) | undefined;
        success?: ((str: string) => string) | undefined;
        warning?: ((str: string) => string) | undefined;
    } | undefined;
    labels: LabelInfo[];
    log?: {
        info?: ((str: string) => void) | undefined;
        warn?: ((str: string) => void) | undefined;
    } | undefined;
}

export interface Options extends OptionsBase {
    accessToken: string;
    repo: string;
    endpoint?: string | undefined;
}

export interface DefaultOptions extends Required<OptionsBase> {
    accessToken: null;
    endpoint: null;
    repo: null;
}

export interface LabelDiff {
    name: string;
    type: string;
    actual?: BasicLabel | undefined;
    expected?: BasicLabel | undefined;
}

export const defaults: DefaultOptions;

export default function githubLabelSync(options: Options): Promise<LabelDiff[]>;
