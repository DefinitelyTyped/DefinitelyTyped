import Token from "../token/token";
import FileUploader from "./fileuploader";

export default class UploadGateway {
    constructor(token: Token, apiAddress: string);
    upload(fileOrData: string | Blob): FileUploader;
}
