// Type definitions for deepai 1.0
// Project: https://deepai.org/
// Definitions by: Nicolas Newman <https://github.com/NicolasNewman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace deepai;

export type Models = 'colorizer'
    | 'text2img'
    | 'text-generator'
    | 'torch-srgan'
    | 'waifu2x'
    | 'nsfw-detector'
    | 'toonify'
    | 'image-similarity'
    | 'deepdream'
    | 'summarization'
    | 'sentiment-analysis'
    | 'text-tagging';
export interface ModelInputs {
    'colorizer': {image: string};
    'text2img': {text: string};
    'text-generator': {text: string};
    'torch-srgan': {image: string};
    'waifu2x': {image: string};
    'nsfw-detector': {image: string};
    'toonify': {image: string};
    'image-similarity': {image1: string, image2: string};
    'deepdream': {image: string};
    'summarization': {text: string};
    'sentiment-analysis': {text: string};
    'text-tagging': {text: string};
}
export interface ModelOutputs {
    'torch-srgan': {id: string, output_url: string};
    [key: string]: any;
}
export function setApiKey(apiKey: string): void;
/** @async */
export function callStandardApi<T extends Models>(modelName: T, inputs_object: ModelInputs[T]): Promise<ModelOutputs[T]>;
