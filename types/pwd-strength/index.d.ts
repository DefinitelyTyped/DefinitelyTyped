// Type definitions for pwd-strength 1.1
// Project: https://github.com/rapomon/pwd-strength
// Definitions by: Dave Lunny <https://github.com/himynameisdave>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PwdStrengthLanguageOptions {
    weak?: string | undefined;
    average?: string | undefined;
    strong?: string | undefined;
    secure?: string | undefined;
    minPasswordChar?: string | undefined;
    minPasswordChars?: string | undefined;
    minLowerChar?: string | undefined;
    minLowerChars?: string | undefined;
    minUpperChar?: string | undefined;
    minUpperChars?: string | undefined;
    minSpecialChar?: string | undefined;
    minSpecialChars?: string | undefined;
    maxConsecutiveRepeatingChars?: string | undefined;
}

interface PwdStrengthColorOptions {
    error?: string | undefined;
    weak?: string | undefined;
    average?: string | undefined;
    strong?: string | undefined;
    secure?: string | undefined;
}

interface PwdStrengthOptions {
    debug?: boolean | undefined;
    minUpperChars?: number | undefined;
    minLowerChars?: number | undefined;
    minSpecialChars?: number | undefined;
    minPasswordLength?: number | undefined;
    minNumberChars?: number | undefined;
    maxConsecutiveRepeatingChars?: number | undefined;
    lang?: PwdStrengthLanguageOptions | undefined;
    color?: PwdStrengthColorOptions | undefined;
}

interface PwdStrengthReturn {
    success: boolean;
    key: string;
    message: string;
    color: string;
}

declare function passwordStrength(password: string, options?: PwdStrengthOptions): PwdStrengthReturn;

export = passwordStrength;
