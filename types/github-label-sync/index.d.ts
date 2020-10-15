// Type definitions for github-label-sync 2.0
// Project: https://github.com/Financial-Times/github-label-sync
// Definitions by: Federico Grandi <https://github.com/EndBug>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BasicLabel {
    name: string;
    color: string;
}

export interface LabelInfo extends BasicLabel {
    aliases?: string[];
    description?: string;
}

export interface OptionsBase {
    allowAddedLabels?: boolean;
    dryRun?: boolean;
    format?: {
        diff?: (str: string) => string
        success?: (str: string) => string
        warning?: (str: string) => string
    };
    labels: LabelInfo[];
    log?: {
        info?: (str: string) => void
        warn?: (str: string) => void
    };
}

export interface Options extends OptionsBase {
    accessToken: string;
    repo: string;
    endpoint?: string;
}

export interface DefaultOptions extends Required<OptionsBase> {
    accessToken: null;
    endpoint: null;
    repo: null;
}

export interface LabelDiff {
    name: string;
    type: string;
    actual?: BasicLabel;
    expected?: BasicLabel;
}

export const defaults: DefaultOptions;

export default function githubLabelSync(options: Options): Promise<LabelDiff[]>;
