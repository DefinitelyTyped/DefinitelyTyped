export function decode(data: Uint8Array): { keyword: string; text: string };

export function encode(keyword: string, text: string): { name: "tEXt"; data: Uint8Array };
