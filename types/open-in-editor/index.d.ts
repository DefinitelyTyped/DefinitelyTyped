export interface OpenInEditor {
    /**
     * @param path
     *   A file reference with the following format: `filename[:line[:column]]`, where `line` and `column` tell the editor where to place cursor when file is opened.
     */
    open(path: string): Promise<void>;
}

export interface ConfigureOptions {
    /**
     * Editor to open a file. Once value is set, we try to detect a command to launch an editor.
     *
     * @default null
     */
    editor?:
        | "sublime"
        | "atom"
        | "code"
        | "webstorm"
        | "phpstorm"
        | "idea14ce"
        | "vim"
        | "emacs"
        | "visualstudio"
        | null
        | undefined;

    /**
     * Command to launch an editor.
     *
     * @default null
     */
    cmd?: string | null | undefined;

    /**
     * Option to specify arguments for a command. Pattern can contain placeholders to be replaced by actual values. Supported placeholders: filename, line and column.
     *
     * @default null
     */
    pattern?: string | null | undefined;

    /**
     * Number of the first line in the editor
     *
     * @default 1
     */
    line?: number | undefined;

    /**
     * Number of the first column in the editor
     *
     * @default 1
     */
    column?: number | undefined;
}

/**
 * @param options
 *   Used to set up a command to launch an editor. If no options set it will try to get the command from [environment](https://github.com/lahmatiy/open-in-editor#environment)
 * @param failCallback
 *   Function that is called when something's wrong with editor setup.
 */
export function configure(
    options?: ConfigureOptions,
    failCallback?: (err: Error) => void,
): OpenInEditor;
