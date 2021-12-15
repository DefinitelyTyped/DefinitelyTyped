declare module 'delegates' {
    function Delegate(proto: Object, target: string): Delegate;
    interface Delegate {
        method(name: string): Delegate
        access(name: string): Delegate
        getter(name: string): Delegate
        setter(name: string): Delegate
    }
    export default Delegate;
}
