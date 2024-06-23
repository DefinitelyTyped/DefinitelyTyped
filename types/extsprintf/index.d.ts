export interface Stream {
    write(str: string): void;
}

export function fprintf(stream: Stream, format: string, ...args: any[]): any;
export function printf(format: string, ...args: any[]): any;
export function sprintf(format: string, ...args: any[]): string;
