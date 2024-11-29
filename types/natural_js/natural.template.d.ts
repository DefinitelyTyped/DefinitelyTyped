declare class NT {
    static readonly aop: {
        codes(cont: NA.Objects.Controller.Object, joinPoint: Function): void;
        template(cont: NA.Objects.Controller.Object, joinPoint: Function): void;
        components(cont: NA.Objects.Controller.Object, prop: string, compActionDefer: JQuery.Deferred<any>[]): void;
        events(cont: NA.Objects.Controller.Object, prop: string): void;
    };
}
