/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/utils/utils.js
 */
declare namespace SolverJS {
    interface Static {
        /**
         * Take a date string and return a week day name of the given date.
         */
        dateToDay(date: string): string;

        /**
         * Take a date string and return a string withe year, month day vlaues.
         */
        dobToAge(date: string): string;

        /**
         * If the word are contain number return true, else return false.
         */
        containNumber(word: string): boolean;

        /**
         * If the word are contain special charector return true, else return false.
         */
        contatinSpecial(word: string): boolean;

        /**
         * Extract the key word from given string and return it.
         */
        keywordExtractor(str: string): string[];

        /**
         * If the string contain keyword return true, else return false.
         */
        isKeywordExists(str: string, keyword: string): boolean;

        /**
         * CheckCamelCase method returns true if the string in camelCase, else return the false.
         */
        checkCamelCase(varName: string): boolean;

        /**
         * CheckFlatCase method returns true if the string in flatcase, else return the false.
         */
        checkFlatCase(varname: string): boolean;

        /**
         * CheckKebabCase method returns true if the string in kebab-case, else return the false.
         */
        checkKebabCase(varName: string): boolean;

        /**
         * CheckPascalCase method returns true if the string in PascalCase, else return the false.
         */
        checkPascalCase(VarName: string): boolean;

        /**
         * CheckSnakeCase method returns true if the string in snake_case, else return the false.
         */
        checkSnakeCase(varName: string): boolean;

        /**
         * URLShortener method converts any numeric id to a unique string
         */
        URLShortener(id: number): string;

        /**
         * railwayTimeConversion method converts normalized time string to Railway time string.
         */
        railwayTimeConversion(timeString: string): string;

        /**
         * Sort the list of values, partition in place method O(nlogn).
         */
        sort(arr: number[], reverse?: boolean): void;

        /**
         * ext method return the file extention.
         */
        ext(filename: string): string;
    }
}
