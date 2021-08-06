export = PasswordRulesUtilities;
declare function PasswordRulesUtilities(): void;
declare class PasswordRulesUtilities {}
declare namespace PasswordRulesUtilities {
    function _hasDigits(text: any): number;
    function _hasSymbols(text: any): number;
    function _hasCaps(text: any): number;
    function _hasSmall(text: any): number;
    function _isIncluded(text: any, ch: any): boolean;
    function _charCount(text: any, ch: any): number;
    function _hasRepetition(text: any): boolean;
    function _random(lo: any, hi: any): number;
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
