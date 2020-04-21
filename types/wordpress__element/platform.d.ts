export default Platform;
declare namespace Platform {
    const OS: string;
    function select(spec: any): any;
}
