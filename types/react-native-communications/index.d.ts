// Type definitions for react-native-communications 2.2
// Project: https://github.com/anarchicknight/react-native-communications
// Definitions by: HuHuanming <https://github.com/huhuanming>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export function phonecall(phoneNumber: string, isPrompt: boolean): void;
export function email(to?: string[], cc?: string[], bcc?: string[], subject?: string, body?: string): void;
export function text(phoneNumber?: string | null, body?: string | null): void;
export function textWithoutEncoding(phoneNumber?: string | null, body?: string | null): void;
export function web(address?: string | null): void;
