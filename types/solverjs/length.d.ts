/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/units/length/length.js
 */
declare namespace SolverJS {
    interface Static {
        /**
         * kilometer to meter, centimeter, millimeter, micrometer, nanameter, yard, foot, inch.
         */
        kmToMe(km: number): number;
        kmToCm(km: number): number;
        kmToMm(km: number): number;
        kmToUm(km: number): number;
        kmToNm(km: number): number;
        kmToYd(km: number): number;
        kmToFt(km: number): number;
        kmToIn(km: number): number;

        /**
         * meter to kilometer, centimeter, millimeter, micrometer, nanometer, yard, foot, inch.
         */
        meToKm(me: number): number;
        meToCm(me: number): number;
        meToMm(me: number): number;
        meToUm(me: number): number;
        meToNm(me: number): number;
        meToYd(me: number): number;
        meToFt(me: number): number;
        meToIn(me: number): number;

        /**
         * centimeter to kilometer, meter, millimetre, micrometre, nanometre, yard, foot, inch.
         */
        cmToKm(cm: number): number;
        cmToMe(cm: number): number;
        cmToMm(cm: number): number;
        cmToUm(cm: number): number;
        cmToNm(cm: number): number;
        cmToYd(cm: number): number;
        cmToFt(cm: number): number;
        cmToIn(cm: number): number;

        /**
         * millimeter to kilometer, meter, centimeter, micrometre, nanometre, yard, foot, inch.
         */
        mmToKm(mm: number): number;
        mmToMe(mm: number): number;
        mmToCm(mm: number): number;
        mmToUm(mm: number): number;
        mmToNm(mm: number): number;
        mmToYd(mm: number): number;
        mmToFt(mm: number): number;
        mmToIn(mm: number): number;

        /**
         * micormeter to kilometer, meter, centimeter, millimeter, nanometer, yard, foot, inch.
         */
        umToKm(um: number): number;
        umToMe(um: number): number;
        umToCm(um: number): number;
        umToMm(um: number): number;
        umToNm(um: number): number;
        umToYd(um: number): number;
        umToFt(um: number): number;
        umToIn(um: number): number;

        /**
         * nanometer to kilometer, meter, centimeter, millimeter, micormeter, yard, foot, inch.
         */
        nmToKm(nm: number): number;
        nmToMe(nm: number): number;
        nmToCm(nm: number): number;
        nmToMm(nm: number): number;
        nmToUm(nm: number): number;
        nmToYd(nm: number): number;
        nmToFt(nm: number): number;
        nmToIn(nm: number): number;

        /**
         * yard to kilometer, meter, centimeter, millimeter, micormeter, nanometer, foot, inch.
         */
        ydToKm(yd: number): number;
        ydToMe(yd: number): number;
        ydToCm(yd: number): number;
        ydToMm(yd: number): number;
        ydToUm(yd: number): number;
        ydToNm(yd: number): number;
        ydToFt(yd: number): number;
        ydToIn(yd: number): number;

        /**
         * foot to kilometer, meter, centimeter, millimeter, micormeter, nanometer, yard, inch.
         */
        ftToKm(ft: number): number;
        ftToMe(ft: number): number;
        ftToCm(ft: number): number;
        ftToMm(ft: number): number;
        ftToUm(ft: number): number;
        ftToNm(ft: number): number;
        ftToYd(ft: number): number;
        ftToIn(ft: number): number;

        /**
         * inch to kilometer, meter, centimeter, millimeter, micormeter, nanometer, yard, foot.
         */
        inToKm(inc: number): number;
        inToMe(inc: number): number;
        inToCm(inc: number): number;
        inToMm(inc: number): number;
        inToUm(inc: number): number;
        inToNm(inc: number): number;
        inToYd(inc: number): number;
        inToFt(inc: number): number;
    }
}
