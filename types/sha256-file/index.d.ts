declare namespace sha256File {
    type CallbackFunction = (error: Error | null, sum: string | null) => void;
}

declare function sha256File(filename: string, callback: sha256File.CallbackFunction): void;
declare function sha256File(filename: string): string;

export = sha256File;
