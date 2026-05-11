export interface Prediction {
    uuid: string;
    version_id: string;
    created_at: string;
    updated_at: string;
    complete_at: string | null;
    status: "starting" | "processing" | "canceled" | "succeeded" | "failed";
    inputs: any;
    output: unknown;
    output_files?: string[];
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

export interface Replicate {
    run(model: string, inputs: any): Promise<unknown>;
    get(prediction: Prediction): Promise<Prediction>;
    create(model: string, inputs: any): Promise<Prediction>;
}

export const replicate: Replicate;

export default replicate;
