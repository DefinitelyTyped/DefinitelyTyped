/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/units/digital_storage/digital_storage.js
 */
declare namespace SolverJS {
    interface Static {
        /**
         * bit to all importent digital storage units.
         */
        bitToByte(bit: number): number;
        bitToKb(bit: number): number;
        bitToMb(bit: number): number;
        bitToGb(bit: number): number;
        bitToTb(bit: number): number;
        bitToPb(bit: number): number;

        /**
         * byte to all importent digital storage units.
         */
        byteToBit(byte: number): number;
        byteToKb(byte: number): number;
        byteToMb(byte: number): number;
        byteToGb(byte: number): number;
        byteToTb(byte: number): number;
        byteToPb(byte: number): number;

        /**
         * kilobyte to all importent digital storage units.
         */
        kbToBit(kilobyte: number): number;
        kbToByte(kilobyte: number): number;
        kbToMb(kilobyte: number): number;
        kbToGb(kilobyte: number): number;
        kbToTb(kilobyte: number): number;
        kbToPb(kilobyte: number): number;

        /**
         * megabyte to all importent digital stroage units.
         */
        mbToBit(mb: number): number;
        mbToByte(mb: number): number;
        mbToKb(mb: number): number;
        mbToGb(mb: number): number;
        mbToTb(mb: number): number;
        mbToPb(mb: number): number;

        /**
         * gigabyte to all importent digital storage units.
         */
        gbToBit(gb: number): number;
        gbToByte(gb: number): number;
        gbToKb(gb: number): number;
        gbToMb(gb: number): number;
        gbToTb(gb: number): number;
        gbToPb(gb: number): number;

        /**
         * terabyte to all importent digital storage units.
         */
        tbToBit(tb: number): number;
        tbToByte(tb: number): number;
        tbToKb(tb: number): number;
        tbToMb(tb: number): number;
        tbToGb(tb: number): number;
        tbToPb(tb: number): number;

        /**
         * petabyte to all importent digital storage units.
         */
        pbToBit(pb: number): number;
        pbToByte(pb: number): number;
        pbToKb(pb: number): number;
        pbToMb(pb: number): number;
        pbToGb(pb: number): number;
        pbToTb(pb: number): number;
    }
}
