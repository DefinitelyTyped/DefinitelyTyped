// Type definitions for react-file-icon 1.0
// Project: https://github.com/pixelunion/react-file-icon#readme
// Definitions by: njuro <https://github.com/njuro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export type IconType =
    | '3d'
    | 'acrobat'
    | 'audio'
    | 'binary'
    | 'code'
    | 'compressed'
    | 'document'
    | 'drive'
    | 'font'
    | 'image'
    | 'presentation'
    | 'settings'
    | 'spreadsheet'
    | 'vector'
    | 'video';

export interface FileIconProps {
    color?: string;
    extension?: string;
    fold?: boolean;
    foldColor?: string;
    glyphColor?: string;
    gradientColor?: string;
    gradientOpacity?: number;
    labelColor?: string;
    labelTextColor?: string;
    labelTextStyle?: object;
    labelUppercase?: boolean;
    radius?: number;
    type?: IconType;
}

export type DefaultExtensionType =
    | '3dm'
    | '3ds'
    | '3g2'
    | '3gp'
    | '7zip'
    | 'aac'
    | 'aep'
    | 'ai'
    | 'aif'
    | 'aiff'
    | 'asf'
    | 'asp'
    | 'aspx'
    | 'avi'
    | 'bin'
    | 'bmp'
    | 'c'
    | 'cpp'
    | 'cs'
    | 'css'
    | 'csv'
    | 'cue'
    | 'dll'
    | 'dmg'
    | 'doc'
    | 'docx'
    | 'dwg'
    | 'dxf'
    | 'eot'
    | 'eps'
    | 'exe'
    | 'flac'
    | 'flv'
    | 'fnt'
    | 'fodp'
    | 'fods'
    | 'fodt'
    | 'fon'
    | 'gif'
    | 'gz'
    | 'htm'
    | 'html'
    | 'indd'
    | 'ini'
    | 'java'
    | 'jpeg'
    | 'jpg'
    | 'js'
    | 'json'
    | 'jsx'
    | 'm4a'
    | 'm4v'
    | 'max'
    | 'md'
    | 'mid'
    | 'mkv'
    | 'mov'
    | 'mp3'
    | 'mp4'
    | 'mpeg'
    | 'mpg'
    | 'obj'
    | 'odp'
    | 'ods'
    | 'odt'
    | 'ogg'
    | 'ogv'
    | 'otf'
    | 'pdf'
    | 'php'
    | 'pkg'
    | 'plist'
    | 'png'
    | 'ppt'
    | 'pptx'
    | 'pr'
    | 'ps'
    | 'psd'
    | 'py'
    | 'rar'
    | 'rb'
    | 'rm'
    | 'rtf'
    | 'scss'
    | 'sitx'
    | 'svg'
    | 'swf'
    | 'sys'
    | 'tar'
    | 'tex'
    | 'tif'
    | 'tiff'
    | 'ts'
    | 'ttf'
    | 'txt'
    | 'wav'
    | 'webm'
    | 'wmv'
    | 'woff'
    | 'wpd'
    | 'wps'
    | 'xlr'
    | 'xls'
    | 'xlsx'
    | 'yml'
    | 'zip'
    | 'zipx';

export const defaultStyles: Record<DefaultExtensionType, Partial<FileIconProps>>;
export const FileIcon: React.FunctionComponent<FileIconProps>;
