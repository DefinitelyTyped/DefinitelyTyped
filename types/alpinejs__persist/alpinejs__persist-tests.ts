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
