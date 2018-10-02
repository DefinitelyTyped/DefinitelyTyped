// Type definitions for Dropbox Chooser 1.0
// Project: https://www.dropbox.com/developers/chooser
// Definitions by: Michael Su <https://github.com/quas94>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Dropbox {
    interface DropboxChooser {
      choose(options: ChooserOptions): void;
    }

    interface ChooserOptions {
        // alled when a user selects an item in the Chooser
        success(files: ReadonlyArray<File>): void;

        // called when the user closes the dialog without selecting a file
        cancel?(): void;

        // default: 'preview'
        linkType?: 'preview' | 'direct';

        // default: false
        multiselect?: boolean;

        // eg. '.png'
        extensions?: string[];

        // default: false
        folderselect?: boolean;

        // any positive number
        sizeLimit?: number;
    }

    interface File {
        // Unique ID for the file, compatible with Dropbox API v2.
        id: string;

        // Name of the file.
        name: string;

        // URL to access the file, which varies depending on the linkType specified when the
        // Chooser was triggered.
        link: string;

        // Size of the file in bytes.
        bytes: number;

        // URL to a 64x64px icon for the file based on the file's extension.
        icon: string;

        // A thumbnail URL generated when the user selects images and videos.
        // If the user didn't select an image or video, no thumbnail will be included.
        thumbnailLink?: string;

        // whether or not the file is actually a directory
        isDir: boolean;
    }
}

type DropboxChooser = Dropbox.DropboxChooser;
type DropboxChooserOptions = Dropbox.ChooserOptions;
type DropboxChooserFile = Dropbox.File;

interface Window {
    Dropbox?: DropboxChooser;
}
