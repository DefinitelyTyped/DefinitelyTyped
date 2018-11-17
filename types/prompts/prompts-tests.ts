import prompts = require("prompts");

type HasProperty<T, K> = K extends keyof T ? true : false;

(async () => {
    const response = await prompts({
        type: "number",
        name: "value",
        message: "Input value to double:",
        validate: (value: any) => (value < 0 ? `Cant be less than zero` : true)
    });
    const HasPropValue: HasProperty<typeof response, "value"> = true;
    const DoesntHavePropAsdf: HasProperty<typeof response, "asdf"> = false;
})();
