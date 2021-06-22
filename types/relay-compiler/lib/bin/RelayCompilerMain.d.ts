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
    watch?: boolean | null;
    validate: boolean;
    quiet: boolean;
    persistOutput?: string | null;
    noFutureProofEnums: boolean;
    language: string | PluginInitializer;
    persistFunction?: string | ((text: string) => Promise<string>) | null;
    artifactDirectory?: string | null;
    customScalars?: ScalarTypeMapping;
}

export function getLanguagePlugin(language: string | PluginInitializer): PluginInterface;

export function main(config: Config): Promise<void>;
