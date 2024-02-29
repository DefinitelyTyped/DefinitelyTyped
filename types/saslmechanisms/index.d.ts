export = Factory;

declare class Factory {
    static Factory: typeof Factory;

    use(name: string, mechanism: Factory.MechanismStatic): this;
    use(mechanism: Factory.MechanismStatic): this;
    create(mechanisms: string[]): Factory.Mechanism | null;
}

declare namespace Factory {
    interface MechanismStatic {
        new(): Mechanism;
        prototype: {
            [key: string]: any;
            name: string;
        };
    }
    interface Mechanism {
        name: string;

        response(cred: { [key: string]: any }): string;

        challenge(chal: string): void;
    }
}
