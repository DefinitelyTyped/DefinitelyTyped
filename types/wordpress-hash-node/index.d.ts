// Type definitions for wordpress-hash-node 1.0
// Project: https://github.com/AlexAlbala/wordpress-hash-node
// Definitions by: Glenn Reyes <https://github.com/glennreyes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function HashPassword(password: string): string;
export function CheckPassword(password: string, hash: string): boolean;
