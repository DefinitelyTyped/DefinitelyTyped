import persistPlugin from "@alpinejs/persist";
import Alpine, { AlpineComponent } from "alpinejs";

Alpine.plugin(persistPlugin);

{
    // $ExpectType $persist
    Alpine.$persist;

    const testObject: AlpineComponent<{
        canPersist(): void;
    }> = {
        canPersist() {
            // $ExpectType $persist
            this.$persist;

            // $ExpectType persistInterceptor<number>
            const interceptor = this.$persist(0 as number);

            // $ExpectType persistInterceptor<number>
            interceptor.as("test");

            // $ExpectType persistInterceptor<number>
            interceptor.using(sessionStorage);
        },
    };

    Alpine.data("test", () => ({
        persisted: Alpine.$persist("foo" as const),
        init() {
            // $ExpectType "foo"
            this.persisted;
        },
    }));
}

{
    // 3.17 treats an undefined getItem result as "no value", and clears undefined
    // values through storage.removeItem?.()
    const optionalStorage = {
        getItem: () => undefined,
        setItem: () => {},
        removeItem: () => {},
    };

    // $ExpectType persistInterceptor<string>
    Alpine.$persist("foo").using(optionalStorage);

    // storage has a default value of localStorage, so it can be omitted
    Alpine.persist("key", { get: () => 0, set: () => {} });
    Alpine.persist("key", { get: () => 0, set: () => {} }, sessionStorage);
}
