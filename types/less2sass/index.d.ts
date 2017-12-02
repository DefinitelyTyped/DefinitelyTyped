// Type definitions for less2sass 1.0
// Project: http://erickryski.com
// Definitions by: William Lohan <https://github.com/gatimus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Less2Sass {
    convert(file: string): string;
    private convertColourHelpers(): Less2Sass;
    private convertExtend(): Less2Sass;
    private convertFileExtensions(): Less2Sass;
    private convertFunctionUnit(): Less2Sass;
    private convertInterpolatedVariables(): Less2Sass;
    private convertMixins(): Less2Sass;
    private convertTildaStrings(): Less2Sass;
    private convertVariables(): Less2Sass;
    private includeMixins(): Less2Sass;
}

declare const less2sass: Less2Sass;
export = less2sass;
