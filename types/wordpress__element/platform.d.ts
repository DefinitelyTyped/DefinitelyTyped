export default Platform;
declare namespace Platform {
    export const OS: string;
    export function select(spec: any): any;
}
