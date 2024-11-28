declare class NT {
    static readonly aop: {
        codes(cont: NA.Objects.Controller.Object, joinPoint: function): void;
        template(cont: NA.Objects.Controller.Object, joinPoint: function): void;
        components(cont: NA.Objects.Controller.Object, prop: string, compActionDefer: JQuery.Deferred[]): void;
        events(cont: NA.Objects.Controller.Object, prop: string): void;
    };
}