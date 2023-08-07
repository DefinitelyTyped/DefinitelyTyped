declare module 'langdetect' {
  export interface DetectionResult {
    lang: string;
    prob: number;
  }

  export function detect(input: string): DetectionResult[];

  export function detectOne(input: string): string;
}
