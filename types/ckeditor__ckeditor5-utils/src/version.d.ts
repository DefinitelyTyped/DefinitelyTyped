declare const version = '28.0.0';
export default version;
declare global {
    interface Window {
        CKEDITOR_VERSION: typeof version;
    }
}
