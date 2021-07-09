import { PluginInitializer, PluginInterface } from '../language/RelayLanguagePluginInterface';
import { ScalarTypeMapping } from '../language/javascript/RelayFlowTypeTransformers';

export interface Config {
    schema: string;
    src: string;
    extensions: string[];
    include: string[];
    exclude: string[];
    verbose: boolean;
    watchman: boolean;
    watch?: boolean | null | undefined;
    validate: boolean;
    quiet: boolean;
    persistOutput?: string | null | undefined;
    noFutureProofEnums: boolean;
    language: string | PluginInitializer;
    persistFunction?: string | ((text: string) => Promise<string>) | null | undefined;
    artifactDirectory?: string | null | undefined;
    customScalars?: ScalarTypeMapping | undefined;
}

export function getLanguagePlugin(language: string | PluginInitializer): PluginInterface;

export function main(config: Config): Promise<void>;
