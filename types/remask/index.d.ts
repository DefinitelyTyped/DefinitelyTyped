declare module 'remask' {
    export function mask(value: string, pattern: string): string;
    export function unmask(value: string): string;
  }