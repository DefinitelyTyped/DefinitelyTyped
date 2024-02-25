import { fake } from "mokapi/faker";
import { render } from "mokapi/mustache";

// @ts-expect-error
render(1);
// @ts-expect-error
render({});
// @ts-expect-error
render("");
render("", 1);
// @ts-expect-error
const i: number = render("", {});
const s: string = render("", {});

export default function() {
    const scope = {
        firstname: fake({
            type: "string",
            format: "{firstname}",
        }),
        calc: () => (3 + 4),
    };

    return render("{{firstname}} has {{calc}} apples", scope);
}
