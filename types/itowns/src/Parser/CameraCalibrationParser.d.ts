declare namespace _default {
    interface CameraCalibrationJson {
        projection: number[];
        size: number[];
        position: number[];
        rotation: number[];
        distorsion?: {
            pps?: number[];
            poly357?: number[];
            limit: number[];
            l1l2: number[];
            etat: number[];
        };
    }

    function parse(
        json: string | CameraCalibrationJson,
        options?: { near?: string; far?: string },
    ): Promise<any>;
}
export default _default;
