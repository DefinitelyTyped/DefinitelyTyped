// Type definitions for node-replicate 1.1
// Project: https://github.com/oelin/node-replicate#readme
// Definitions by: Ankan Bhattacharya <https://github.com/Ankan002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PredictionResponse {
    uuid: string;
    version_id: string;
    created_at: string;
    updated_at: string;
    complete_at: string | null;
    status: "starting" | "processing" | "canceled" | "succeeded" | "failed";
    inputs: {
        prompt: string;
    };
    output: string[] | null;
    output_files: string[];
    error: string | null;
    run_logs: string | null;
    version: {
        config: {
            build: Record<string, string>;
            predict: string;
        };
        docker_image_id: string;
        docker_image_name: string;
        openapi_schema: {
            info: Record<string, string>;
            paths: Record<string, string>;
            openapi: string;
            components: Record<string, string>;
        };
        model: {
            absolute_url: string;
            username: string;
            name: string;
            description: string;
            visibility: string;
            is_run_only: boolean;
            github_url: string;
            paper_url: string;
            arxiv_paper_id: string;
            cover_image: Record<string, string>;
            latest_version_created_at: string | null;
            default_example_uuid: string;
            display_output_as_json: boolean;
        };
    };
    user: string | null;
}

export interface PredictInput {
    prompt: string;
}

declare class Prediction {
    constructor(props?: Record<string, string>);
    hasTerminalStatus(): boolean;
    load(): Promise<PredictionResponse>;
}

declare class Model {
    constructor(path: string, version?: string);
    predict(
        inputs: PredictInput,
        arg1?: {
            onUpdate: (prediction: PredictionResponse) => void;
        },
        arg2?: {
            pollingInterval: number;
        },
    ): Promise<PredictionResponse>;
    createPrediction(inputs: PredictInput): Promise<Prediction>;
}

interface Replicate {
    model: (identifier: string) => Model;
}

export const replicate: Replicate;

export default replicate;
