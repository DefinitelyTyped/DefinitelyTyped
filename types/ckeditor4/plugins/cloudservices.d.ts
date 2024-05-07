declare namespace CKEDITOR {
    interface CKEditorPluginsCore {
        cloudservices?: {
            cloudServicesLoader: plugins.cloudservices.cloudServicesLoaderConstructor;
        };
    }
    namespace plugins {
        namespace cloudservices {
            interface cloudServicesLoaderConstructor extends fileTools.fileLoaderConstructor {
                new(editor: editor, fileOrData: Blob | string, fileName?: string, token?: string): cloudServicesLoader;
            }
            interface cloudServicesLoader extends fileTools.fileLoader {
                customToken: string;

                loadAndUpload(url?: string, additionalRequestParameters?: unknown): void;

                upload(url?: string, additionalRequestParameters?: unknown): void;
            }
        }
    }
}
