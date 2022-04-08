// Type definitions for pwd-strength 1.0
// Project: https://github.com/rapomon/pwd-strength
// Definitions by: Dave Lunny <https://github.com/himynameisdave>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PwdStrengthLanguageOptions {
    weak?: string;
    average?: string;
    strong?: string;
    secure?: string;
    minPasswordChar?: string;
    minPasswordChars?: string;
    minLowerChar?: string;
    minLowerChars?: string;
    minUpperChar?: string;
    minUpperChars?: string;
    minSpecialChar?: string;
    minSpecialChars?: string;
    maxConsecutiveRepeatingChars?: string;
}

interface PwdStrengthColorOptions {
    error?: string;
    weak?: string;
    average?: string;
    strong?: string;
    secure?: string;
}

interface PwdStrengthOptions {
    debug?: boolean;
    minUpperChars?: number;
    minLowerChars?: number;
    minSpecialChars?: number;
    minPasswordLength?: number;
    maxConsecutiveRepeatingChars?: number;
    lang?: PwdStrengthLanguageOptions;
    color?: PwdStrengthColorOptions;
}

interface PwdStrengthReturn {
    success: boolean;
    key: string;
    message: string;
    color: string;
}

declare function passwordStrength(password: string, options?: PwdStrengthOptions): PwdStrengthReturn;

export = passwordStrength;
