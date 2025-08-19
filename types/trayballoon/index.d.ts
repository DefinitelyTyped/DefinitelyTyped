export interface TrayballoonOptions {
    /**
     * The body text.
     */
    text: string;
    /**
     * The title text.
     */
    title?: string | undefined;
    /**
     * The path to a `.ico` file or a `.exe`/`.dll` file with icon resource index (eg: `shell32.dll,-154`).
     */
    icon?: string | undefined;
    /**
     * The duration to show the balloon in milliseconds.
     * @default 5000
     */
    timeout?: number | undefined;
}

export default function trayballoonFn(options?: TrayballoonOptions): Promise<void>;
