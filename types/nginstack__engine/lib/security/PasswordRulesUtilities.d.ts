export = PasswordRulesUtilities;
declare function PasswordRulesUtilities(): void;
declare class PasswordRulesUtilities {}
declare namespace PasswordRulesUtilities {
    export {
        getPasswordRule,
        generatePassword,
        generatePasswordRuleBased,
        getPasswordStrength,
        validatePassword,
        PasswordRule,
    };
}
declare function getPasswordRule(ruleKey: number): PasswordRule;
declare function generatePassword(
    len: number,
    useCapitals: boolean,
    useNumbers: boolean,
    useSpecial: boolean,
    noRepeat: boolean
): string;
declare function generatePasswordRuleBased(passwordRuleKey: number): string;
declare function getPasswordStrength(password: string, maxLen: any): number;
declare function validatePassword(password: string, passwordRuleKey: number): string;
interface PasswordRule {
    minLength: number;
    changeInterval: number;
    maxTriesBeforeLock: number;
    allowRepeatedChars: boolean;
    requirements: {
        upperChars: boolean;
        lowerChars: boolean;
        symbols: boolean;
        numbers: boolean;
    };
}
