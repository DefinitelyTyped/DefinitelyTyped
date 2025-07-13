export let FIELD_DEFAULT_WIDTH_LIMIT: number;
export namespace DEFAULTS_BY_TYPE {
    namespace width {
        let integer: number;
        let int32: number;
        let int64: number;
        let date: number;
        let number: number;
        let latitude: number;
        let longitude: number;
        let angle: number;
        let combo: number;
        let memo: number;
        let file: number;
    }
    namespace alignment {
        let integer_1: string;
        export { integer_1 as integer };
        let int32_1: string;
        export { int32_1 as int32 };
        let int64_1: string;
        export { int64_1 as int64 };
        let latitude_1: string;
        export { latitude_1 as latitude };
        let longitude_1: string;
        export { longitude_1 as longitude };
        let angle_1: string;
        export { angle_1 as angle };
        let number_1: string;
        export { number_1 as number };
        let date_1: string;
        export { date_1 as date };
        export let boolean: string;
        export let image: string;
        let combo_1: string;
        export { combo_1 as combo };
        let file_1: string;
        export { file_1 as file };
    }
    namespace height {
        let file_2: string;
        export { file_2 as file };
    }
}
export namespace DEFAULTS_BY_CONTROL_TYPE {
    export namespace alignment_1 {
        let image_1: string;
        export { image_1 as image };
        export let color: string;
    }
    export { alignment_1 as alignment };
    export namespace width_1 {
        let color_1: number;
        export { color_1 as color };
    }
    export { width_1 as width };
}
