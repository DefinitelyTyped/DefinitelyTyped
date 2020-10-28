import { User } from "../UsersClient";

export interface Token {
    name?: string;
    token?: string;
    sessionToken?: string;
}
export interface BotUser extends User {
    roles: string[];
}

export function oboAuthenticateByUserId(userId: number): Promise<Token>;
export function getBotUser(): void;
export function verifyJwt(jwt: string): Promise<string>;
