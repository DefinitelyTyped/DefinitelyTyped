/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/units/area/area.js
 */
declare namespace SolverJS {
    interface Static {
        /**
         * square kilometer to all
         */
        sqKmToSqMe(sqkm: number): number;
        sqKmToSqYd(sqkm: number): number;
        sqKmToSqFt(sqkm: number): number;
        sqKmToSqIn(sqkm: number): number;
        sqKmToHect(sqkm: number): number;
        sqKmToAcre(sqkm: number): number;

        /**
         * square meter to all
         */
        sqMeToSqKm(sqme: number): number;
        sqMeToSqYd(sqme: number): number;
        sqMeToSqFt(sqme: number): number;
        sqMeToSqIn(sqme: number): number;
        sqMeToHect(sqme: number): number;
        sqMeToAcre(sqme: number): number;

        /**
         * square yard to all
         */
        sqYdToSqKm(sqyd: number): number;
        sqYdToSqMe(sqyd: number): number;
        sqYdToSqFt(sqyd: number): number;
        sqYdToSqIn(sqyd: number): number;
        sqYdToHect(sqyd: number): number;
        sqYdToAcre(sqyd: number): number;

        /**
         * square foot to all
         */
        sqFtToSqKm(sqft: number): number;
        sqFtToSqMe(sqft: number): number;
        sqFtToSqYd(sqft: number): number;
        sqFtToSqIn(sqft: number): number;
        sqFtToHect(sqft: number): number;
        sqFtToAcre(sqft: number): number;

        /**
         * square inch to all
         */
        sqInToSqKm(sqin: number): number;
        sqInToSqMe(sqin: number): number;
        sqInToSqYd(sqin: number): number;
        sqInToSqFt(sqin: number): number;
        sqInToHect(sqin: number): number;
        sqInToAcre(sqin: number): number;

        /**
         * hectare to all
         */
        hectToSqKm(hect: number): number;
        hectToSqMe(hect: number): number;
        hectToSqYd(hect: number): number;
        hectToSqFt(hect: number): number;
        hectToSqIn(hect: number): number;
        hectToAcre(hect: number): number;

        /**
         * acre to all
         */
        acreToSqKm(acre: number): number;
        acreToSqMe(acre: number): number;
        acreToSqYd(acre: number): number;
        acreToSqFt(acre: number): number;
        acreToSqIn(acre: number): number;
        acreToHect(acre: number): number;
    }
}
