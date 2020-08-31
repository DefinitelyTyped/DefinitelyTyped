// TODO: Resolve these, ideally replace with external typings

// wp.media.model.Attachment
export interface Attachment {
    get(_: string): any; // TODO
}

// wp.media.controller.Cropper
export interface Cropper {
    get(_: string): any; // TODO
    set(_1: string, _2: any): void; // TODO
}

// wp.customize.HeaderTool.ImageModel
// tslint:disable-next-line:no-unnecessary-class
export class ImageModel {
    constructor(_: { header: any; choice: any }); // TODO
}

export interface Theme {
    _canInstall: boolean;
    _filesystemCredentialsNeeded: boolean;
    id: string;
    name: string;
}
