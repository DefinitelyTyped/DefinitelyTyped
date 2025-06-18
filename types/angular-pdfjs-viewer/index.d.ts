import * as angular from "angular";

declare module "angular" {
    namespace pdfjsViewer {
        interface ConfigProvider extends IServiceProvider {
            setWorkerSrc(src: string): void;
            setCmapDir(dir: string): void;
            setImageDir(dir: string): void;
            disableWorker(): void;
            setVerbosity(verbosity: "errors" | "warnings" | "infos"): void;
        }
    }
}
