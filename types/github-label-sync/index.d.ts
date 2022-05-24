// Type definitions for github-label-sync 2.0
// Project: https://github.com/Financial-Times/github-label-sync
// Definitions by: Federico Grandi <https://github.com/EndBug>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BasicLabel {
    name: string;
    color: string;
    description?: string | undefined;
}

export interface LabelInfo extends BasicLabel {
    aliases?: string[] | undefined;
}

export interface OptionsBase {
    allowAddedLabels?: boolean | undefined;
    dryRun?: boolean | undefined;
    format?: {
        diff?: ((str: string) => string) | undefined
        success?: ((str: string) => string) | undefined
        warning?: ((str: string) => string) | undefined
    } | undefined;
    labels: LabelInfo[];
    log?: {
        info?: ((str: string) => void) | undefined
        warn?: ((str: string) => void) | undefined
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
