/**
 * 图像审核结果
 * @see https://ai.baidu.com/ai-doc/ANTIPORN/Vk42xcpu1
 */
export interface ImageCensorUserDefinedResult {
    log_id: number;
    error_code?: number;
    err_msg?: string;
    conclusion: string;
    conclusionType: number;
    data: {
        error_code?: number;
        err_msg?: string;
        type: number;
        sub_type: number;
        msg: string;
        probability: number;
        datasetName: number;
        stars?: {
            name: string;
            probability: number;
            datasetName: string;
            area?: string;
            information?: string;
        };
        hits?: {
            words: string[];
            probability: number;
            datasetName: string;
            modelHitPositions: object[];
            wordHitPositions: {
                keyword: string;
                positions: number[];
                label: string;
            }[];
            modelName: string;
            score: number;
            modelId: [];
            label: string;
        };
        codes?: string[];
        location: {
            top: number;
            left: number;
            width: number;
            height: number;
            rotation: number;
        }[];
    }[];
    isHitMd5: boolean;
}
