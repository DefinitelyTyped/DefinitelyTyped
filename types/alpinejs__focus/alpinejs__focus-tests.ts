import focusPlugin from "@alpinejs/focus";
import Alpine, { AlpineComponent } from "alpinejs";

Alpine.plugin(focusPlugin);

{
    const testObject: AlpineComponent<{
        canFocus(): void;
    }> = {
        canFocus() {
            // $ExpectType $focus
            this.$focus;

            // $ExpectType boolean
            this.$focus.focusable(new HTMLButtonElement());
        },
    };
}
