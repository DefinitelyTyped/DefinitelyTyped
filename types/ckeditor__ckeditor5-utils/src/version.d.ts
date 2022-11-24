declare const version = '32.0.0';
export default version;
declare global {
    interface Window {
        CKEDITOR_VERSION: typeof version;
    }
}
