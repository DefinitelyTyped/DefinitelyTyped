export = PasswordRulesUtilities;
declare function PasswordRulesUtilities(): void;
declare class PasswordRulesUtilities {}
declare namespace PasswordRulesUtilities {
    function generatePassword(
        len: number,
        useCapitals: any,
        useNumbers: any,
        useSpecial: any,
        noRepeat: any
    ): string;
    function generatePasswordRuleBased(passwordRuleKey: number): string;
    function getPasswordStrength(password: string, maxLen: any): number;
    function validatePassword(password: string, passwordRuleKey: number): string;
}
