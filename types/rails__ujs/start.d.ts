declare global {
    interface Window {
        _rails_loaded?: boolean;
    }
}

export function start(): void;
