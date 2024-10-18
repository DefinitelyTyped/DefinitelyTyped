import { SCORM12 } from "./1.2";

export * from "./1.2";

declare global {
    interface Window {
        API?: SCORM12;
    }
}
