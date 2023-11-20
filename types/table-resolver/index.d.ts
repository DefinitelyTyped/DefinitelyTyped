export function headerRows<T>(args: { columns: T[] }): T[];
export function nested<T>(args: { column: T }): T;
export function resolve<T>(args: { columns: T[]; method: (args: { column: T }) => T }): (data: any) => T[];
export function columnChildren<T>(args: { columns: T[] }): T[];
