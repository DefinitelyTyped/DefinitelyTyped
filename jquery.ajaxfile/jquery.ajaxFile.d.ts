// Type definitions for jquery.ajaxfile v0.1.0
// Project: https://github.com/fpellet/jquery.ajaxFile
// Definitions by: Florent PELLET <https://github.com/fpellet/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../knockout/knockout.d.ts" />

declare namespace JQueryAjaxFile {
	export enum DataType {
		Json,
		Xml,
		Text
	}

	interface IFileData {
		name: string;
		element: HTMLInputElement;
	}

	interface IOption {
		method?: string;
		url?: string;

		data?: any;
		files?: IFileData[];
		desiredResponseDataType?: DataType;

		timeoutInSeconds?: number;
	}

	interface IResponseStatus {
		code: number;
		text: string;
		isSuccess: boolean;
	}

	interface IAjaxFileResult {
		error?: any;
		data?: any;
		status?: IResponseStatus;
	}

	interface IAjaxFileResultCallback {
		(result: IAjaxFileResult): void;
	}

	interface IAjaxFilePromise {
		then(success: IAjaxFileResultCallback, error?: IAjaxFileResultCallback): IAjaxFilePromise;
		done(success: IAjaxFileResultCallback): IAjaxFilePromise;
		fail(error: IAjaxFileResultCallback): IAjaxFilePromise;
		always(error: IAjaxFileResultCallback): IAjaxFilePromise;

		abord(): void;
	}

	interface IAjaxFileStatic {
		send(option: IOption): IAjaxFilePromise;
	}
	
	interface IJQueryXHR {
        readyState: any;
        status: number;
        statusText: string;
        responseXML: Document;
        responseText: string;
        statusCode?: { [key: string]: any; };

        abort(statusText?: string): void;

        setRequestHeader(header: string, value: string): void;
        getAllResponseHeaders(): string;
        getResponseHeader(header: string): string;

        beforeSend?(jqXHR: IJQueryXHR, settings: JQueryAjaxSettings): any;
        dataFilter?(data: any, ty: any): any;
        success?(data: any, textStatus: string, jqXHR: IJQueryXHR): any;
        error?(jqXHR: IJQueryXHR, textStatus: string, errorThrown: string): any;
        complete?(jqXHR: IJQueryXHR, textStatus: string): any;
    }

    interface IJQueryOption {
        type?: string;
        url?: string;

        data?: any;
        files?: IFileData[];
        dataType?: string;

        timeout?: number;

        global?: boolean;

        error?(jqXHR: IJQueryXHR, textStatus: string, errorThrown: string): any;
        success?(data: any, textStatus: string, jqXHR: IJQueryXHR): any;
        complete?(jqXHR: IJQueryXHR, textStatus: string): any;
    }

    interface IAjaxFileJQueryExtension {
        ajaxWithFile(jqueryOption: IJQueryOption): JQueryDeferred<any>;
    }
}

declare var AjaxFile: JQueryAjaxFile.IAjaxFileStatic;

declare module 'ajaxfile' {
    export = AjaxFile;
}

declare namespace AjaxFileKnockout {
    interface IFileInputWrapper {
        getElement(): HTMLInputElement;
        fileSelected(): boolean;
    }
}

interface KnockoutBindingHandlers {
    file: KnockoutBindingHandler;
}
