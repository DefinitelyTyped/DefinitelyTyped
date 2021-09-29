export namespace data {
    const pages: string[];
    const chars: {
        id: number;
        index: number;
        char: string;
        width: number;
        height: number;
        xoffset: number;
        yoffset: number;
        xadvance: number;
        chnl: number;
        x: number;
        y: number;
        page: number;
    }[];
    namespace info {
        const face: string;
        const size: number;
        const bold: number;
        const italic: number;
        const charset: string[];
        const unicode: number;
        const stretchH: number;
        const smooth: number;
        const aa: number;
        const padding: number[];
        const spacing: number[];
    }
    namespace common {
        export const lineHeight: number;
        export const base: number;
        export const scaleW: number;
        export const scaleH: number;
        const pages_1: number;
        export { pages_1 as pages };
        export const packed: number;
        export const alphaChnl: number;
        export const redChnl: number;
        export const greenChnl: number;
        export const blueChnl: number;
    }
    namespace distanceField {
        const fieldType: string;
        const distanceRange: number;
    }
    const kernings: any[];
}
