interface Window {
    FileMaker?: {
        PerformScript: (name: string, parameter: string) => void;
        PerformScriptWithOption: (
            name: string,
            parameter: string,
            option: "0" | "1" | "2" | "3" | "4" | "5",
        ) => void;
    };
}
