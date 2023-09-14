import persistPlugin from '@alpinejs/persist';
import Alpine, { AlpineComponent } from 'alpinejs';

Alpine.plugin(persistPlugin);

{
    // $ExpectType $persist
    Alpine.$persist;

    const testObject: AlpineComponent<{
        canFocus(): void;
    }> = {
        canFocus() {
            // $ExpectType $persist
            this.$persist;

            // $ExpectType number & persistInterceptor<number>
            let interceptor = this.$persist(0 as number);

            // $ExpectType number & persistInterceptor<number>
            interceptor.as('test');

            // $ExpectType number & persistInterceptor<number>
            interceptor.using(sessionStorage);
        },
    };
}
