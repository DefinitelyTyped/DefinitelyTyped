export function check(password: string): boolean;
export function checkPassword(password: string): boolean;
export function rateOfUsage(
    password: string,
): {
    password: string;
    frequency: number;
    message?: string | undefined;
};
