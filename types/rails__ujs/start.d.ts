declare global {
    interface Window {
        _rails_loaded?: boolean | undefined;
    }
}

export function start(): void;
