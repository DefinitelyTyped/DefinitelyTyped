// Type definitions for deepai api, rev Aug 2023
// Project: https://deepai.org/
// Definitions by: Nicolas Newman <https://github.com/NicolasNewman> | DJ Stomp <https://github.com/DJStompZone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace deepai;

// Grouping Models for better readability
export type TextToTextModels = 'text-generator' | 'summarization' | 'sentiment-analysis' | 'text-tagging';
export type ImageToTextModels = 'nsfw-detector' | 'image-similarity';
export type TextToImageModels = 
    'text2img' 
    | 'stable-diffusion'
    | 'cute-creature-generator'
    | 'fantasy-world-generator'
    | 'cyberpunk-generator'
    | 'anime-portrait-generator'
    | 'old-style-generator'
    | 'renaissance-painting-generator'
    | 'abstract-painting-generator'
    | 'impressionism-painting-generator'
    | 'surreal-graphics-generator'
    | '3d-objects-generator'
    | 'origami-3d-generator'
    | 'hologram-3d-generator'
    | '3d-character-generator'
    | 'watercolor-painting-generator'
    | 'pop-art-generator'
    | 'contemporary-architecture-generator'
    | 'future-architecture-generator'
    | 'watercolor-architecture-generator'
    | 'fantasy-character-generator'
    | 'steampunk-generator'
    | 'logo-generator'
    | 'pixel-art-generator'
    | 'street-art-generator'
    | 'surreal-portrait-generator'
    | 'anime-world-generator'
    | 'fantasy-portrait-generator'
    | 'comics-portrait-generator'
    | 'cyberpunk-portrait-generator';
export type ImageToImageModels = 'torch-srgan' | 'waifu2x' | 'colorizer' | 'toonify' | 'deepdream';

export type Models = TextToTextModels | ImageToTextModels | TextToImageModels | ImageToImageModels;

export interface TextToTextInputs {
    'text-generator': { text: string };
    'summarization': { text: string };
    'sentiment-analysis': { text: string };
    'text-tagging': { text: string };
}

export interface ImageToTextInputs {
    'nsfw-detector': { image: string };
    'image-similarity': { image1: string, image2: string };
}

export interface TextToImageInputs {
    'text2img': { text: string };
    'stable-diffusion': { text: string };
    'cute-creature-generator': { text: string };
    'fantasy-world-generator': { text: string };
    'cyberpunk-generator': { text: string };
    'anime-portrait-generator': { text: string };
    'old-style-generator': { text: string };
    'renaissance-painting-generator': { text: string };
    'abstract-painting-generator': { text: string };
    'impressionism-painting-generator': { text: string };
    'surreal-graphics-generator': { text: string };
    '3d-objects-generator': { text: string };
    'origami-3d-generator': { text: string };
    'hologram-3d-generator': { text: string };
    '3d-character-generator': { text: string };
    'watercolor-painting-generator': { text: string };
    'pop-art-generator': { text: string };
    'contemporary-architecture-generator': { text: string };
    'future-architecture-generator': { text: string };
    'watercolor-architecture-generator': { text: string };
    'fantasy-character-generator': { text: string };
    'steampunk-generator': { text: string };
    'logo-generator': { text: string };
    'pixel-art-generator': { text: string };
    'street-art-generator': { text: string };
    'surreal-portrait-generator': { text: string };
    'anime-world-generator': { text: string };
    'fantasy-portrait-generator': { text: string };
    'comics-portrait-generator': { text: string };
    'cyberpunk-portrait-generator': { text: string };
}


export interface ImageToImageInputs {
    'torch-srgan': { image: string };
    'waifu2x': { image: string };
    'colorizer': { image: string };
    'toonify': { image: string };
    'deepdream': { image: string };
}

export interface ModelOutputs {
    'torch-srgan': { id: string, output_url: string };
    [key: string]: any;
}

export function setApiKey(apiKey: string): void;

/** @async */
export function callStandardApi<T extends Models>(
    modelName: T,
    inputs_object: TextToTextInputs[T] | ImageToTextInputs[T] | TextToImageInputs[T] | ImageToImageInputs[T]
): Promise<ModelOutputs[T]>;
